# Components Structure

This document outlines the refactored folder structure for the portfolio components.

## Overview

The components have been organized into a more scalable and maintainable structure with the following principles:

- **Separation of Concerns**: Each component has its own folder with related files
- **Data-Driven**: Components use data files for configuration
- **Reusable**: Components are designed to be reusable and modular
- **Type Safety**: Full TypeScript support with proper interfaces

## Folder Structure

```
src/components/
├── About/
│   ├── components/
│   │   ├── About.tsx              # Main About component
│   │   ├── AboutSection.tsx       # Individual about section
│   │   └── SkillsSection.tsx      # Skills display component
│   ├── data/
│   │   └── aboutData.ts           # About content and skills data
│   ├── view/
│   │   └── About.view.tsx         # About view wrapper
│   └── index.ts                   # Export file
├── Projects/
│   ├── components/
│   │   ├── Projects.tsx           # Main projects grid
│   │   ├── ProjectCard.tsx        # Individual project card
│   │   ├── ProjectDetail.tsx      # Project detail page
│   │   └── Ecommerce.tsx          # Legacy ecommerce component
│   ├── data/
│   │   └── projectsData.ts        # Projects configuration
│   ├── view/
│   │   └── Project.view.tsx       # Projects view wrapper
│   └── index.ts                   # Export file
├── Services/
│   ├── components/
│   │   ├── Services.tsx           # Main services grid
│   │   └── ServiceCard.tsx        # Individual service card
│   ├── data/
│   │   └── servicesData.ts        # Services configuration
│   ├── view/
│   │   └── Services.view.tsx      # Services view wrapper
│   └── index.ts                   # Export file
└── index.ts                       # Main components export
```

## Key Features

### Projects

- **Dynamic Project Cards**: Each project is rendered from data configuration
- **Filter System**: Filter projects by category (Frontend, Full Stack, etc.)
- **Project Details**: Click "View Details" to see comprehensive project information
- **Responsive Design**: Cards adapt to different screen sizes
- **Technology Tags**: Display relevant technologies for each project

### Services

- **Enhanced Service Cards**: More detailed service information
- **Interactive Elements**: Hover effects and animations
- **Feature Lists**: Key features and technologies for each service
- **Consistent Styling**: Maintains the original color scheme and design

### About

- **Modular Sections**: About content is organized into reusable sections
- **Skills Display**: Interactive skills section with category tabs
- **Technology Grid**: Visual representation of technical skills
- **CV Download**: Maintained the original CV download functionality

## Usage

### Adding New Projects

1. Add project data to `src/components/Projects/data/projectsData.ts`
2. The project will automatically appear in the projects grid
3. Use the `ProjectDetail` component for detailed project views

### Adding New Services

1. Add service data to `src/components/Services/data/servicesData.ts`
2. The service will automatically appear in the services grid

### Modifying About Content

1. Update content in `src/components/About/data/aboutData.ts`
2. Add new skills categories or modify existing ones

## Routing

The refactored structure supports dynamic routing:

- `/` - Home page with all sections
- `/project/:projectId` - Individual project detail pages
- `/ecommerce` - Legacy ecommerce project (maintained for compatibility)

## TypeScript Interfaces

All components use proper TypeScript interfaces:

- `Project` - Project data structure
- `Service` - Service data structure
- `AboutSection` - About content structure
- `Skill` - Skills data structure

## Benefits

1. **Maintainability**: Easier to update and modify components
2. **Scalability**: Simple to add new projects, services, or content
3. **Consistency**: Uniform structure across all components
4. **Performance**: Optimized rendering with proper data structures
5. **Developer Experience**: Better code organization and TypeScript support
