# ZENNY - Luxury Watch E-commerce Platform

## Overview

ZENNY is a luxury watch e-commerce platform built as a full-stack web application. The project showcases premium timepieces with a sophisticated user interface featuring product catalogs, categories, blog content, and customer reviews. The application follows a modern architecture with a React frontend, Express.js backend, and PostgreSQL database using Drizzle ORM for data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui components for consistent design system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API architecture with structured endpoints for categories, products, blog posts, and reviews
- **Middleware**: Custom logging middleware for API request tracking and error handling
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Database Architecture
- **Database**: PostgreSQL with connection pooling via Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Schema**: Well-structured tables for users, categories, products, blog posts, and reviews with proper relationships
- **Migrations**: Drizzle Kit for database schema versioning and deployment
- **Storage Strategy**: Hybrid approach with in-memory storage for development and PostgreSQL for production

### Data Models
- **Users**: Authentication system with username/password
- **Categories**: Product categorization with slugs and descriptions
- **Products**: Rich product data including pricing, brands, images, and feature flags (new, popular, featured)
- **Blog Posts**: Content management for news and perspectives with featured post support
- **Reviews**: Customer feedback system with ratings and testimonials

### Development Architecture
- **Monorepo Structure**: Organized into client, server, and shared directories for code reuse
- **Shared Types**: Common TypeScript interfaces and schemas shared between frontend and backend
- **Code Quality**: ESLint, TypeScript strict mode, and proper error boundaries
- **Asset Management**: Centralized asset handling with proper path resolution

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database connections
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL dialect support
- **drizzle-kit**: Database migration and schema management tools

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Consistent icon library for user interface elements

### State and Data Management
- **@tanstack/react-query**: Server state management with caching, synchronization, and background updates
- **react-hook-form**: Form state management with validation support
- **@hookform/resolvers**: Form validation resolvers for schema validation

### Development Tools
- **vite**: Fast build tool with HMR and development server
- **tsx**: TypeScript execution for server-side development
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for better debugging experience
- **wouter**: Minimalist routing library for React applications

### Additional Libraries
- **date-fns**: Date manipulation and formatting utilities
- **nanoid**: Unique ID generation for database records
- **cmdk**: Command palette component for enhanced user experience
- **embla-carousel-react**: Touch-friendly carousel component for product showcases