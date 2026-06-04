// ─── Projects Data ──────────────────────────────────────────
const projects = [
    {
        title: 'Sales Analytics Dashboard',
        description: 'Power BI dashboard tracking sales performance, trends, and KPIs across multiple regions. Resulted in 25% improvement in decision-making speed.',
        tags: ['Power BI', 'SQL', 'Excel'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    },
    {
        title: 'Customer Segmentation — RFM Analysis',
        description: 'RFM analysis using Python and SQL to segment customers, enabling targeted campaigns that increased retention by 18%.',
        tags: ['Python', 'SQL', 'Pandas'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    },
    {
        title: 'Revenue Forecasting Model',
        description: 'Predictive model using scikit-learn and SQL to forecast revenue with 92% accuracy. Used directly in quarterly strategic planning.',
        tags: ['Python', 'scikit-learn', 'SQL'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    },
    {
        title: 'Inventory Optimization',
        description: 'Data models and Power BI visualizations to optimize inventory levels — reduced carrying costs by 22% while maintaining service levels.',
        tags: ['Power BI', 'DAX', 'Excel'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    },
    {
        title: 'Employee Performance Analytics',
        description: 'Automated Excel reports and Power BI dashboards tracking employee KPIs. Supported HR in data-driven talent management decisions.',
        tags: ['Excel', 'Power BI', 'VBA'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    },
    {
        title: 'Market Research Data Pipeline',
        description: 'ETL pipeline in Python to clean and analyze market research data, providing actionable insights for product development strategy.',
        tags: ['Python', 'SQL', 'Data Cleaning'],
        github: 'https://github.com/krishanchoudhary01',
        demo: '#'
    }
];

// ─── Render Projects ─────────────────────────────────────────
function renderProjects() {
    const list = document.getElementById('projectsList');
    if (!list) return;

    list.innerHTML = '';

    projects.forEach((project, index) => {
        const card = document.createElement('a');
        card.className = 'proj-card reveal';
        card.href = project.github !== '#' ? project.github : '#';
        if (project.github !== '#') {
            card.setAttribute('target', '_blank');
            card.setAttribute('rel', 'noopener noreferrer');
        }

        card.innerHTML = `
            <div class="proj-left">
                <div class="proj-number">0${index + 1}</div>
                <div class="proj-title">${project.title}</div>
                <p class="proj-desc">${project.description}</p>
                <div class="proj-tags">
                    ${project.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
                </div>
            </div>
            <span class="proj-arrow">↗</span>
        `;

        list.appendChild(card);
    });

    // trigger reveal for already-visible items
    setTimeout(initReveal, 50);
}

// ─── Mobile Nav ──────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // close on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// close mobile nav when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('open');
        }
    }
});

// ─── Smooth Scroll ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ─── Navbar scroll shadow ────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
    } else {
        navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
}, { passive: true });

// ─── Scroll Reveal ───────────────────────────────────────────
function initReveal() {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // stagger siblings
                const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
                const delay = siblings.indexOf(entry.target) * 60;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// Mark section children as reveal targets
function markRevealTargets() {
    const targets = document.querySelectorAll(
        '.about-layout, .skills-grid, .skill-card, .stack-item, .contact-layout'
    );
    targets.forEach(el => el.classList.add('reveal'));
}

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    markRevealTargets();
    initReveal();
});
