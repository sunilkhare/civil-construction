# Civil Construction Website

A modern, responsive React.js website for BuildCraft Construction - a professional civil construction company. This website features a clean, modern design with easy content management through JSON data files.

## 🚀 Features

- **Modern React.js Architecture**: Built with Vite for fast development and optimal performance
- **Data-Driven Content**: All website content stored in JSON files for easy modification
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Professional Design**: Clean, modern design suitable for construction industry
- **Easy Content Management**: Update website content by simply editing JSON files
- **Fast Performance**: Optimized build process with Vite

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx/css   # Navigation header
│   └── Footer.jsx/css   # Site footer
├── pages/              # Page components
│   ├── Home.jsx/css    # Homepage with hero, services preview
│   ├── About.jsx/css   # Company information and team
│   ├── Services.jsx/css # Detailed services information
│   ├── Projects.jsx/css # Project portfolio with filtering
│   └── Contact.jsx/css # Contact form and information
├── data/               # Content management (JSON files)
│   ├── company.json    # Company details and contact info
│   ├── services.json   # Construction services offered
│   ├── projects.json   # Portfolio projects
│   ├── team.json       # Team member information
│   └── testimonials.json # Client testimonials
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and CSS variables
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and gray palette
- **Typography**: Modern Segoe UI font family
- **Interactive Elements**: Smooth hover effects and transitions
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📝 Content Management

### Easy Content Updates

All website content is stored in JSON files in the `src/data/` folder. To update content:

1. **Company Information**: Edit `src/data/company.json`
2. **Services**: Modify `src/data/services.json`
3. **Projects**: Update `src/data/projects.json`
4. **Team Members**: Edit `src/data/team.json`
5. **Testimonials**: Modify `src/data/testimonials.json`

### Example: Adding a New Service

```json
{
  "id": 7,
  "title": "Green Building Construction",
  "description": "Sustainable construction practices using eco-friendly materials and energy-efficient designs.",
  "icon": "🌱",
  "features": [
    "LEED Certified Construction",
    "Solar Panel Installation",
    "Energy Efficient Systems",
    "Sustainable Materials"
  ]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📱 Pages Overview

### Home Page
- Hero section with company overview
- Featured services preview
- Latest projects showcase
- Client testimonials
- Call-to-action sections

### About Page
- Company story and mission
- Core values and principles
- Team member profiles
- Company statistics

### Services Page
- Detailed service descriptions
- Construction process overview
- Why choose us section

### Projects Page
- Project portfolio with filtering
- Project details and specifications
- Project status tracking
- Client information

### Contact Page
- Contact form for quotes
- Company contact information
- Business hours
- Office location details

## 🎯 Customization

### Changing Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
}
```

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 📞 Support

For questions about customizing this website or adding new features, refer to the documentation or contact the development team.

## 📄 License

This project is created for BuildCraft Construction. All rights reserved.
