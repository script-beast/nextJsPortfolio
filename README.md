# Ankit Prajapati - Developer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with blue/purple accents
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for elegant interactions
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js for optimal loading speeds

## 📱 Sections

- **Hero**: Compelling introduction with call-to-action buttons
- **About**: Professional bio and key stats
- **Skills**: Categorized technical skills with icons
- **Projects**: Featured projects with live demos and source code
- **Experience**: Professional timeline with detailed achievements
- **Contact**: Interactive form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family
- **Deployment**: Optimized for Vercel/Netlify

## 🚀 Quick Start

1. **Development**:
   ```bash
   npm run dev
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy on every push to main branch

4. **Deploy to Netlify**:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`

## ✏️ Customization

### Personal Information
Edit the following files to customize with your information:

- `components/sections/Hero.tsx` - Name, title, and introduction
- `components/sections/About.tsx` - Bio, location, and stats
- `components/sections/Projects.tsx` - Your projects and tech stacks
- `components/sections/Experience.tsx` - Work history and achievements
- `components/sections/Contact.tsx` - Contact information and social links

### Styling
- `app/globals.css` - Global styles and color scheme
- `tailwind.config.ts` - Tailwind configuration
- Individual component files for section-specific styling

### Content Structure
```
components/
├── layout/
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx       # Footer component
└── sections/
    ├── Hero.tsx         # Landing section
    ├── About.tsx        # About me section
    ├── Skills.tsx       # Technical skills
    ├── Projects.tsx     # Portfolio projects
    ├── Experience.tsx   # Work experience
    └── Contact.tsx      # Contact form
```

## 🎨 Design System

- **Colors**: Blue (#3B82F6) and Purple (#8B5CF6) accents on dark background
- **Typography**: Inter font with clear hierarchy
- **Spacing**: 8px grid system for consistent layout
- **Components**: Reusable shadcn/ui components
- **Animations**: Subtle, professional motion design

## 📄 License

This project is open source and available under the MIT License.