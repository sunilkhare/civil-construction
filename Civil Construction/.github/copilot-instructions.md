# GitHub Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a modern React.js website for a civil construction company called "BuildCraft Construction". The website is built using Vite for fast development and includes the following key features:

## Project Structure
- **Data-driven content**: All website content is stored in JSON files in the `src/data/` folder for easy modification
- **Component-based architecture**: Reusable React components for header, footer, and page content
- **Responsive design**: Modern CSS with mobile-first approach
- **React Router**: Client-side routing for single-page application experience

## Key Data Files
- `company.json`: Company information, contact details, and social media links
- `services.json`: Construction services offered with descriptions and features
- `projects.json`: Portfolio of completed and ongoing construction projects
- `team.json`: Team member information and credentials
- `testimonials.json`: Client testimonials and reviews

## Design Guidelines
- **Color Scheme**: Primary (#2c3e50), Secondary (#3498db), Accent (#e74c3c)
- **Typography**: Segoe UI font family for modern, professional appearance
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Components**: Modular components with isolated CSS files
- **User Experience**: Smooth transitions, hover effects, and interactive elements

## Development Notes
- All data should be imported from JSON files in the data folder
- CSS variables are used for consistent theming
- Mobile-responsive design with breakpoints at 768px
- Modern ES6+ JavaScript and React hooks
- Clean, semantic HTML structure for accessibility

## Content Management
To modify website content:
1. Edit the appropriate JSON file in `src/data/`
2. The changes will automatically reflect on the website
3. No code changes needed for content updates

This structure allows for easy content management while maintaining a professional, modern design suitable for a construction company website.
