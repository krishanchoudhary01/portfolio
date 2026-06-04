// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        updateActiveNav();
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', updateActiveNav);

function updateActiveNav() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Projects data with filters
const projects = [
    {
        title: 'Sales Analytics Dashboard',
        description: 'Comprehensive Power BI dashboard tracking sales performance, trends, and KPIs across regions with 25% improvement in decision-making speed.',
        tags: ['Power BI', 'SQL', 'DAX'],
        filter: 'powerbi',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Customer Segmentation Analysis',
        description: 'RFM analysis using Python and SQL to segment customers, enabling targeted marketing campaigns that increased retention by 18%.',
        tags: ['Python', 'SQL', 'Pandas'],
        filter: 'python',
        image: 'https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Inventory Optimization',
        description: 'Data models and Power BI visualizations to optimize inventory levels, reducing carrying costs by 22% while maintaining service levels.',
        tags: ['Power BI', 'Excel', 'DAX'],
        filter: 'powerbi',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Revenue Forecasting Model',
        description: 'Predictive models using Python (scikit-learn) and SQL queries to forecast revenue with 92% accuracy, supporting strategic planning.',
        tags: ['Python', 'SQL', 'ML'],
        filter: 'python',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c11?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Employee Performance Analytics',
        description: 'Automated Excel reports and Power BI dashboards tracking employee KPIs, supporting HR in data-driven talent management decisions.',
        tags: ['Excel', 'Power BI', 'VBA'],
        filter: 'excel',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Market Research Data Pipeline',
        description: 'ETL pipeline using Python to clean and analyze market research data, providing actionable insights for product development strategy.',
        tags: ['Python', 'SQL', 'ETL'],
        filter: 'python',
        image: 'https://images.unsplash.com/photo-1518611505868-d2b4fd09b1d4?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Financial Data Analysis',
        description: 'SQL database optimization and Excel dashboards for financial reporting, reducing data processing time by 40% and improving accuracy.',
        tags: ['SQL', 'Excel', 'Finance'],
        filter: 'sql',
        image: 'https://images.unsplash.com/photo-1526628652108-aa09b6a23dea?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    },
    {
        title: 'Business Intelligence Suite',
        description: 'Complete BI solution combining Power BI, Power Query, and DAX for real-time business metrics and executive dashboards.',
        tags: ['Power BI', 'DAX', 'Power Query'],
        filter: 'powerbi',
        image: 'https://images.unsplash.com/photo-1551353086-b54d5f2a1c93?w=500&h=300&fit=crop',
        github: '#',
        demo: '#'
    }
];

// Render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all' ? projects : projects.filter(p => p.filter === filter);

    filtered.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.style.animationDelay = `${index * 0.1}s`;
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

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    updateActiveNav();
});

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

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
