# Judas Sipho Sithole Portfolio

A modern, full-stack portfolio website showcasing my work as a Software Engineer, Electrical Engineer, and IoT Specialist. Built with Next.js, TypeScript, and Supabase.

## 🌟 Features

- **Modern UI/UX**: Built with Next.js 14 and styled using Tailwind CSS
- **Interactive Components**: Dynamic project showcases, skill visualizations, and IoT dashboards
- **Blog System**: Integrated blog functionality for sharing technical articles and insights
- **Admin Dashboard**: Secure admin interface for managing content
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Real-time Updates**: Live metrics and project status updates
- **Authentication**: Secure authentication system using Supabase
- **Database**: PostgreSQL database with Row Level Security

## 🛠️ Tech Stack

- **Frontend**:
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Shadcn UI Components
  - React Context for state management

- **Backend**:
  - Supabase
  - PostgreSQL
  - Row Level Security
  - JWT Authentication

- **Development Tools**:
  - pnpm (Package Manager)
  - ESLint
  - Prettier
  - TypeScript

## 📦 Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin dashboard pages
│   ├── blog/              # Blog pages
│   ├── projects/          # Project showcase pages
│   └── services/          # Services pages
├── components/            # React components
│   ├── admin/            # Admin dashboard components
│   ├── ui/               # Reusable UI components
│   └── [feature]/        # Feature-specific components
├── contexts/             # React context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── scripts/             # Database and setup scripts
└── styles/              # Global styles
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/RacoonX65/judas-sipho-sithole.git
   cd judas-sipho-sithole
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**
   ```bash
   pnpm run setup-db
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

## 📝 Database Schema

The project uses the following main tables:
- `projects`: Portfolio projects
- `blog_posts`: Blog articles
- `profile`: Personal information
- `skills`: Technical skills
- `services`: Offered services

Each table has Row Level Security enabled for proper access control.

## 🔒 Security

- Row Level Security (RLS) is enabled on all tables
- JWT-based authentication
- Secure API routes
- Environment variable protection

## 🎨 UI Components

The project uses a custom component library built with:
- Shadcn UI
- Tailwind CSS
- Custom animations and transitions
- Responsive design patterns

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interfaces
- Optimized images and assets

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Name**: Judas Sipho Sithole
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]

---

Built with ❤️ using Next.js and Supabase 