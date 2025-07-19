# Tiny Haven Project - Replit.md

## Overview

This is a full-stack web application for the Tiny Haven Project, a nonprofit organization that builds affordable tiny homes for vulnerable populations including foster youth aging out of care, veterans experiencing housing instability, and single parents in crisis. The application serves as the organization's website, providing information about their mission, donation capabilities, and contact functionality.

## System Architecture

The application follows a modern full-stack architecture with the following key components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful HTTP API
- **Development**: Hot reloading with Vite integration

### Database Architecture
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for production)
- **Schema**: Centralized in shared directory
- **Development**: In-memory storage implementation for rapid prototyping

## Key Components

### Frontend Pages
- **Home**: Hero section with mission statement and impact statistics
- **About**: Organization story and purpose
- **What We Do**: Service descriptions and target populations
- **Donate**: Donation levels and contribution options
- **FAQ**: Common questions and answers
- **Blog**: Stories and updates
- **Contact**: Contact form with interest selection

### Backend API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin)

### Database Schema
- **Users table**: Authentication system (prepared for future use)
- **Contacts table**: Contact form submissions with timestamps

### Shared Components
- Type-safe schema definitions using Drizzle and Zod
- Reusable validation schemas
- TypeScript interfaces for data models

## Data Flow

1. **User visits website**: Static pages served from Vite-built React application
2. **Contact form submission**: Form data validated on client, sent to Express API
3. **Server processing**: Zod validation, data persistence, response with success/error
4. **Data storage**: Currently in-memory for development, PostgreSQL for production
5. **Admin access**: API endpoint to view all contact submissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for production
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **react-hook-form**: Form validation and management
- **zod**: Runtime type validation

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

The application is configured for deployment on Replit's autoscale platform:

### Development Mode
- Uses Vite dev server with hot module replacement
- In-memory database for rapid iteration
- Development port: 5000

### Production Build
1. Frontend: Vite builds React app to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Database: Drizzle pushes schema to PostgreSQL
4. Deployment: Replit autoscale serves the bundled application

### Environment Configuration
- **Development**: `NODE_ENV=development`, in-memory storage
- **Production**: `NODE_ENV=production`, PostgreSQL via `DATABASE_URL`

## Changelog

Changelog:
- June 26, 2025. Initial setup
- July 2, 2025. Website completed with custom domain ready (tinyhaveproject.org)
- July 19, 2025. Major website cleanup and updates:
  - Removed Blog and Get Involved pages and navigation links
  - Updated Donate button to correct GoFundMe campaign link (https://www.gofundme.com/f/support-tiny-haven-project-homes-for-hope)
  - Updated social media: removed Twitter, added TikTok with proper direct link
  - Removed Monthly Giving and In-Kind Donation sections from Donate page
  - Updated email address to tinyhavenproject@outlook.com throughout site
  - Fixed DOM nesting warnings in navigation and footer components

## User Preferences

Preferred communication style: Simple, everyday language.