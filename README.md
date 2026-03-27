# My Portfolio Site

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean, minimalist design with smooth animations and dark/light theme support.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with elegant animations
- **Responsive Layout**: Optimized for all device sizes and screen resolutions
- **Dark/Light Theme**: Toggle between dark and light modes with smooth transitions
- **Interactive Components**: Engaging hover effects and smooth scrolling
- **Project Showcase**: Dynamic project carousel with detailed descriptions
- **Blog Section**: Featured articles with categorization and reading time
- **Contact Form**: Functional contact form with form validation
- **Performance Optimized**: Fast loading times and smooth user experience

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Latest React features with hooks

### UI Components & Libraries
- **Radix UI** - Headless, accessible UI primitives
- **Shadcn/ui** - Beautiful, reusable components built on Radix UI
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** (via Tailwind animations) - Smooth animations
- **Next Themes** - Dark/light theme switching

### Form Handling & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Features
- **Vercel Analytics** - Website analytics and insights
- **Geist Font** - Modern, clean typography
- **Date-fns** - Modern date utility library
- **Class Variance Authority** - Component variant management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd my-portfolio-site
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
my-portfolio-site/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # Shadcn/ui components
│   ├── blog.tsx           # Blog section
│   ├── contact.tsx        # Contact form
│   ├── header.tsx         # Navigation header
│   ├── hero.tsx           # Hero section
│   └── projects.tsx       # Projects showcase
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🎨 Customization

### Theme Configuration
The site uses a custom theme configuration with CSS variables for colors. You can modify the theme in:
- `app/globals.css` - CSS custom properties
- `components/theme-provider.tsx` - Theme context

### Content Updates
- **Projects**: Update project data in `components/projects.tsx`
- **Blog Posts**: Modify blog content in `components/blog.tsx`  
- **Contact Info**: Update contact details in `components/contact.tsx`
- **Hero Section**: Customize hero content in `components/hero.tsx`

### Styling
- Uses Tailwind CSS for utility-first styling
- Custom components built with Radix UI primitives
- Responsive design with mobile-first approach

## 🌟 Key Features Breakdown

### Hero Section
- Dynamic project counter
- Smooth fade-in animations
- Real-time clock display
- Interactive navigation

### Projects Showcase
- Horizontal scrolling carousel
- Project filtering and navigation
- Gradient overlays and hover effects
- Detailed project descriptions

### Blog Section
- Article cards with metadata
- Category-based organization
- Reading time estimates
- Responsive grid layout

### Contact Form
- Form validation with Zod schemas
- React Hook Form integration
- Accessible form controls
- Contact information display

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- Mobile: `< 768px`
- Tablet: `768px - 1023px` 
- Desktop: `≥ 1024px`

## 🎯 Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Code splitting** with Next.js automatic optimization
- **CSS-in-JS** with zero runtime overhead via Tailwind

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Static hosting** platforms

### Deploy to Vercel
1. Push your code to GitHub
2. Import your project on [Vercel](https://vercel.com)
3. Configure build settings (auto-detected)
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: [your-email@example.com]
- **Portfolio**: [your-portfolio-url]
- **LinkedIn**: [your-linkedin-profile]
- **GitHub**: [your-github-profile]

---
