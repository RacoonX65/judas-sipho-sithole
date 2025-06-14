-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    technologies TEXT[] DEFAULT '{}',
    status TEXT CHECK (status IN ('active', 'completed', 'in-progress')) DEFAULT 'in-progress',
    github_url TEXT,
    live_url TEXT,
    image_url TEXT NOT NULL,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    tags TEXT[] DEFAULT '{}',
    status TEXT CHECK (status IN ('published', 'draft', 'scheduled')) DEFAULT 'draft',
    publish_date DATE DEFAULT CURRENT_DATE,
    read_time INTEGER DEFAULT 5,
    image_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create profile table
CREATE TABLE IF NOT EXISTS profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    bio TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    location TEXT,
    website TEXT,
    linkedin TEXT,
    github TEXT,
    twitter TEXT,
    profile_image TEXT,
    resume_url TEXT,
    years_of_experience INTEGER DEFAULT 0,
    current_role TEXT NOT NULL,
    company TEXT NOT NULL,
    education TEXT NOT NULL,
    certifications TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    category TEXT CHECK (category IN ('technical', 'electrical', 'software', 'tools')) DEFAULT 'technical',
    level INTEGER CHECK (level >= 1 AND level <= 100) DEFAULT 50,
    years_of_experience NUMERIC(3,1) DEFAULT 1.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT[] DEFAULT '{}',
    price TEXT NOT NULL,
    duration TEXT NOT NULL,
    category TEXT CHECK (category IN ('electrical', 'software', 'iot', 'consulting')) DEFAULT 'software',
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all operations for authenticated users)
CREATE POLICY "Allow all operations for authenticated users" ON projects
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON blog_posts
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON profile
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON skills
    FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow all operations for authenticated users" ON services
    FOR ALL USING (auth.role() = 'authenticated');

-- Allow public read access to all tables
CREATE POLICY "Allow public read access" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access" ON blog_posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Allow public read access" ON profile
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access" ON skills
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access" ON services
    FOR SELECT USING (active = true);
