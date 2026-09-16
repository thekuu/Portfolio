import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Platform",
    slug: "ecommerce",
    category: "E-Commerce",
    description: "A modern e-commerce experience focused on product discovery, responsive interfaces, and scalable application architecture.",
    overview: "A premium full-stack e-commerce platform that transitions retail businesses from chat-based social media sales into a professional, automated online storefront.",
    problem: "Relying on Telegram channels for sales creates massive friction: customers cannot easily filter products by size, order processing is entirely manual, and manually migrating chat-based inventory to a real website is incredibly time-consuming.",
    solution: "Built with React, TypeScript, Node.js, and Neon PostgreSQL. The architecture features a custom regex-driven parsing engine that instantly converts raw Telegram posts into structured database inventory, paired with a localized dynamic checkout system and a highly polished UI powered by Tailwind CSS and Framer Motion.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    features: ["Advanced filtering", "Real-time inventory", "Stripe integration"],
    challenges: ["Handling concurrent cart updates", "Optimizing image delivery"],
    lessons: ["Implemented optimistic UI updates for better UX", "Learned advanced caching strategies"],
    liveUrl: "https://shegaddis.vercel.app",
    githubUrl: "https://github.com/thekuu/mern-ecommerce"
  },
  {
    id: "02",
    title: "Publishing Platform",
    slug: "blog",
    category: "Publishing",
    description: "A modern content platform focused on readable typography, structured content, responsive design and a clean publishing experience.",
    overview: "This is a custom blogging platform built with Next.js and TypeScript. It uses MDX for content rendering and Framer Motion for UI animations, providing a straightforward and clean experience for readers.",
    problem: "Standard CMS options are often too heavy for a simple developer blog. The goal was to build a lightweight, custom alternative that solves three practical needs: supporting markdown-based writing with custom components, allowing the author to save unpublished drafts, and handling technical SEO requirements out of the box.",
    solution: "The application relies on Next.js for routing and server-side rendering. I used MDX for rich text editing, which allows React components to be embedded directly within standard markdown files. To support the writing workflow, I built a simple draft management system that filters out unpublished works-in-progress from the live production build. For discoverability, the architecture includes automated SEO optimization by generating meta tags and titles based on each post's frontmatter. Finally, Framer Motion provides basic page transitions, and TypeScript ensures type safety across the entire codebase.",
    technologies: ["Next.js", "TypeScript", "MDX", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    features: ["Rich text editing", "Draft management", "SEO optimization"],
    challenges: ["Building a stable rich text editor", "Dynamic OG image generation"],
    lessons: ["Mastered MDX integration", "Improved understanding of web vitals"],
    liveUrl: "https://kuujournal.netlify.app",
    githubUrl: "https://github.com/thekuu/mern-blog"
  },
  {
    id: "03",
    title: "Real Estate Platform",
    slug: "real-estate",
    category: "Real Estate",
    description: "A property-focused digital experience designed to make browsing, discovering and evaluating properties intuitive across devices.",
    overview: "Homi Estate is a full-stack real estate marketplace designed to efficiently connect property buyers and sellers. It provides a responsive, intuitive interface where users can seamlessly browse active listings, perform advanced filtering, and securely manage their own property portfolios from a single centralized platform.",
    problem: "The real estate market is often plagued by inflated housing prices driven by layers of middlemen and opaque pricing structures. Buyers struggle to find transparent cost data, while independent sellers lose significant margins to excessive broker fees. The core challenge was to build a secure, user-friendly platform that removes the technical friction of listing properties online, empowering homeowners to bypass traditional brokers entirely and fostering transparent, direct transactions with buyers.",
    solution: "To facilitate this direct peer-to-peer marketplace, I developed a decoupled web application using React and Vite, giving homeowners a highly responsive dashboard to effortlessly control their own listings. The backend is a robust Node.js and Express REST API connected to a mongo DB to guarantee data integrity. To remove onboarding barriers for independent sellers, I integrated Firebase for frictionless Google OAuth, combined with a custom backend JWT implementation using HTTP-only cookies to securely maintain sessions and protect user data.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    features: ["Advanced Search", "Listing Management", "Secure Login"],
    challenges: ["Complex spatial queries", "Managing large datasets on client"],
    lessons: ["Geospatial indexing in MongoDB", "Virtualizing long lists in React"],
    liveUrl: "https://homiestate.netlify.app",
    githubUrl: "https://github.com/thekuu/mern-estate"
  }
];
