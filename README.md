Peyman Salimi | Professional Software Portfolio
Live Demo: https://peymanpro.github.io/portfolio/

Overview
A modular, component-based portfolio website showcasing enterprise software architecture projects, scientific achievements, and professional development journey. Built with vanilla JavaScript using ES Modules for clean separation of concerns.

Features
Modular Architecture: ES Module-based code organization with separate modules for rendering, gallery, and lightbox functionality

Dynamic Content Rendering: All content is rendered from JavaScript data files, making updates simple and maintainable

Image Gallery: Horizontal scrollable gallery with navigation buttons, wheel scroll support, and full-screen lightbox view

Responsive Design: Fully responsive layout that adapts to all screen sizes

Accessibility: ARIA attributes, keyboard navigation, and focus management

Project Structure
text
/
├── index.html              # Main HTML entry point
├── style.css               # Global styles
├── data/
│   ├── heroData.js         # Hero section content
│   └── projects.js         # Project sections data
└── src/
    ├── app.js              # Application entry point (bootstrapping)
    └── modules/
        ├── Lightbox.js     # Full-screen image viewer
        ├── Gallery.js      # Scrollable gallery with controls
        └── Renderer.js     # DOM rendering utilities
Technologies Used
HTML5 – Semantic markup

CSS3 – Custom properties, flexbox, grid, responsive design

JavaScript (ES Modules) – Modular architecture with import/export

Vanilla JS – No external libraries or frameworks

Sections
Enterprise Micro Frontend Architecture – React-based Micro Frontend platform with Module Federation

Enterprise Microservices Architecture – ASP.NET Core microservices with YARP Gateway, gRPC, and RabbitMQ

Enterprise Desktop Suite – Windows Forms application with multiple organizational systems

SurangMarket – Medical equipment e-commerce platform (Next.js + NestJS)

Scientific Achievement – Top 1% Scientist recognition by ISC

Professional Training – Continuous learning journey with 40+ technologies

Getting Started
Prerequisites
A modern web browser

Local development server (e.g., VS Code Live Server, Python HTTP server)

Installation
Clone the repository:

bash
git clone https://github.com/peymanpro/portfolio.git
cd portfolio
Open index.html in your browser or serve with a local development server:

bash
# Using Python
python -m http.server 8000

# Using VS Code Live Server
# Right-click on index.html → Open with Live Server
Navigate to http://localhost:8000 (or the port you specified)

Customization
Adding a New Project Section
Open data/projects.js

Add a new object to the sections array:

javascript
{
  title: "Your Project Title",
  description: "Project description here...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  items: [
    { title: "Image Title", image: "images/your-image.jpg" }
  ]
}
Updating Hero Content
Open data/heroData.js

Modify the title, subtitle, or paragraphs array

Adding Gallery Images
Place images in the images/ directory

Reference them in the items array of the relevant section

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

License
This project is for portfolio demonstration purposes. All rights reserved.

Author
Peyman Salimi – Enterprise Software Architect & Full-Stack Developer

Portfolio: https://peymanpro.github.io/portfolio/

GitHub: https://github.com/peymanpro

