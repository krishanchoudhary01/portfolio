// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Projects data with thumbnail images
const projects = [
    {
        title: 'Sales Analytics Dashboard',
        description: 'Built a comprehensive Power BI dashboard tracking sales performance, trends, and KPIs across multiple regions, resulting in 25% improvement in decision-making speed.',
        tags: ['Power BI', 'SQL', 'Excel'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Customer Segmentation Analysis',
        description: 'Performed RFM analysis using Python and SQL to segment customers, enabling targeted marketing campaigns that increased customer retention by 18%.',
        tags: ['Python', 'SQL', 'Pandas'],
        image: 'https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Inventory Optimization',
        description: 'Developed data models and visualizations in Power BI to optimize inventory levels, reducing carrying costs by 22% while maintaining service levels.',
        tags: ['Power BI', 'DAX', 'Excel'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Revenue Forecasting Model',
        description: 'Created predictive models using Python (scikit-learn) and SQL queries to forecast revenue with 92% accuracy, supporting strategic planning.',
        tags: ['Python', 'SQL', 'Machine Learning'],
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Employee Performance Analytics',
        description: 'Designed automated Excel reports and Power BI dashboards to track employee KPIs, supporting HR in data-driven talent management decisions.',
        tags: ['Excel', 'Power BI', 'VBA'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Market Research Data Pipeline',
        description: 'Built an ETL pipeline using Python to clean and analyze market research data, providing actionable insights for product development strategy.',
        tags: ['Python', 'SQL', 'Data Cleaning'],
        image: 'https://images.unsplash.com/photo-1518611505868-d2b4fd09b1d4?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    }
];

// Render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <a href="${project.demo}" target="_blank" class="view-btn">View Project</a>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">View Code</a>
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', renderProjects);

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
