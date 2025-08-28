# Edwin Anderson - Portfolio Website

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14+ App Router, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Accessible Components**: Built with Radix UI primitives for accessibility
- **Performance Optimized**: Next.js Image optimization and efficient rendering
- **Dark Mode Support**: Theme switching with next-themes

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Forms**: React Hook Form (ready for integration)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
|   ├── api/
|   |   └── send/
|   |       └── route.tsx  # Route for send email
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles and Tailwind config
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   └── sonner.tsx
│   └── providers/         # Context providers
│       └── ThemeProvider.tsx
├── constants/
│   └── mockData.ts        # Mock data for easy content management
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design Features

Based on the Figma design, this portfolio includes:

- **Hero Section**: Eye-catching introduction with statistics and CTA
- **About Section**: Development principles and philosophy
- **Skills Section**: Technology showcase with interactive cards
- **Comparison Section**: Strengths vs. weaknesses comparison
- **Projects Section**: Portfolio showcase with project cards
- **Experience Section**: Professional timeline and achievements
- **Testimonials Section**: Client feedback and reviews
- **FAQ Section**: Interactive accordion for common questions
- **Contact Section**: Contact form and call-to-action
- **Footer**: Social links and copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portofolio_company_profile_3
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Content Management

All content is managed through the `src/constants/mockData.ts` file. You can easily:

- Update personal information
- Modify project details
- Change testimonials
- Update skills and technologies
- Modify contact information

### Styling

The design system uses Tailwind CSS with custom color variables. You can customize:

- Color scheme in `tailwind.config.ts`
- Typography in `globals.css`
- Component styles in individual component files

### Adding New Sections

To add new sections:

1. Create a new component in `src/components/sections/`
2. Add the section to `src/app/page.tsx`
3. Update navigation in `src/constants/mockData.ts`

## 🎯 Key Features

- **Responsive Navigation**: Both horizontal and vertical navigation options
- **Smooth Scrolling**: CSS scroll-behavior and Framer Motion animations
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Form Handling**: Ready-to-use contact form with validation
- **Performance**: Optimized images, lazy loading, and efficient animations

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

### Deploy

This project can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: Pink/Magenta (#ec4899)
- **Secondary**: Yellow (#fbbf24)
- **Neutral**: Gray scale (#f9fafb to #111827)
- **Accent**: Various shades for highlights and interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from the provided Figma design
- Built with modern web technologies and best practices
- Icons from Lucide React
- UI components from Radix UI and Shadcn/ui

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
