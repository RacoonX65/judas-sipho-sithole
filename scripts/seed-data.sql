-- Insert sample profile data with your actual email
INSERT INTO profile (
    name, title, bio, email, phone, location, website, linkedin, github, twitter,
    current_role, company, education, years_of_experience
) VALUES (
    'Judas Sipho Sithole',
    'Electrical Engineer & Software Developer',
    'BEng Tech in Electrical Engineering from the University of Johannesburg, specializing in IoT, Software Engineering, and Machine Learning. Passionate about bridging the gap between electrical engineering and software development.',
    'judassithole@duck.com',
    '+27 123 456 789',
    'Johannesburg, South Africa',
    'https://judassithole.com',
    'https://linkedin.com/in/judassithole',
    'https://github.com/judassithole',
    'https://twitter.com/judassithole',
    'Electrical Engineer & Software Developer',
    'Freelance',
    'BEng Tech Electrical Engineering - University of Johannesburg',
    3
) ON CONFLICT DO NOTHING;

-- Insert sample projects
INSERT INTO projects (title, description, long_description, technologies, status, github_url, live_url, image_url, featured) VALUES
(
    'Smart Greenhouse Monitoring',
    'IoT-based greenhouse monitoring system with real-time data visualization',
    'A comprehensive IoT solution for monitoring greenhouse conditions including temperature, humidity, soil moisture, and light levels. Features real-time data visualization, automated alerts, and remote control capabilities.',
    ARRAY['React', 'Node.js', 'Arduino', 'MongoDB', 'Socket.io'],
    'active',
    'https://github.com/judas/greenhouse',
    'https://greenhouse-demo.com',
    '/placeholder.svg?height=200&width=300',
    true
),
(
    'Circuit Design Simulator',
    'Web-based circuit design and simulation tool for electrical engineering students',
    'An interactive web application that allows students to design, simulate, and analyze electrical circuits. Built with modern web technologies and advanced simulation algorithms.',
    ARRAY['React', 'TypeScript', 'WebGL', 'Python', 'FastAPI'],
    'completed',
    'https://github.com/judas/circuit-sim',
    'https://circuit-simulator.com',
    '/placeholder.svg?height=200&width=300',
    false
) ON CONFLICT DO NOTHING;

-- Insert sample skills
INSERT INTO skills (name, category, level, years_of_experience) VALUES
('React', 'software', 90, 3.0),
('Node.js', 'software', 85, 3.0),
('Arduino', 'technical', 95, 4.0),
('Circuit Design', 'electrical', 88, 4.0),
('Python', 'software', 80, 2.0),
('AutoCAD', 'tools', 75, 3.0),
('MATLAB', 'tools', 85, 4.0),
('ESP32', 'technical', 90, 3.0),
('TypeScript', 'software', 85, 2.5),
('MongoDB', 'software', 75, 2.0)
ON CONFLICT DO NOTHING;

-- Insert sample services
INSERT INTO services (title, description, features, price, duration, category, active) VALUES
(
    'IoT System Development',
    'Complete IoT solution development from hardware design to web application',
    ARRAY['Hardware Design', 'Sensor Integration', 'Real-time Dashboard', 'Mobile App', 'Cloud Integration'],
    'R15,000 - R50,000',
    '4-8 weeks',
    'iot',
    true
),
(
    'Electrical System Design',
    'Professional electrical system design and consultation services',
    ARRAY['Circuit Design', 'Load Calculations', 'Safety Analysis', 'Documentation', 'Compliance Check'],
    'R5,000 - R20,000',
    '2-4 weeks',
    'electrical',
    true
),
(
    'Web Application Development',
    'Modern web applications using React, Node.js, and cloud technologies',
    ARRAY['Responsive Design', 'Database Integration', 'API Development', 'Deployment', 'Maintenance'],
    'R10,000 - R30,000',
    '3-6 weeks',
    'software',
    true
)
ON CONFLICT DO NOTHING;

-- Insert sample blog posts
INSERT INTO blog_posts (title, excerpt, content, tags, status, publish_date, read_time, image_url) VALUES
(
    'Building IoT Solutions with Arduino and React',
    'Learn how to create full-stack IoT applications combining hardware sensors with modern web technologies.',
    'In this comprehensive guide, we''ll explore how to build a complete IoT solution using Arduino for hardware control and React for the web interface...',
    ARRAY['IoT', 'Arduino', 'React', 'JavaScript'],
    'published',
    CURRENT_DATE - INTERVAL '7 days',
    8,
    '/placeholder.svg?height=200&width=300'
),
(
    'Electrical Engineering Meets Software Development',
    'Exploring the intersection of electrical engineering and software development in modern applications.',
    'The modern world increasingly requires professionals who can bridge the gap between hardware and software...',
    ARRAY['Electrical Engineering', 'Software Development', 'Career'],
    'published',
    CURRENT_DATE - INTERVAL '14 days',
    6,
    '/placeholder.svg?height=200&width=300'
)
ON CONFLICT DO NOTHING;
