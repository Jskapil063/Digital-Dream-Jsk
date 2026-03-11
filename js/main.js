document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // Basic toggle for now. Can enhance with slide animation.
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';

            navButtons.style.display = navButtons.style.display === 'flex' ? 'none' : 'flex';
            navButtons.style.flexDirection = 'column';
            navButtons.style.position = 'absolute';
            navButtons.style.top = '280px';
            navButtons.style.left = '0';
            navButtons.style.width = '100%';
            navButtons.style.backgroundColor = 'white';
            navButtons.style.padding = '20px';
            navButtons.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
    }

    // Smooth Scrolling for anchor links
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

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(10, 37, 64, 0.1)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Update File Upload Text
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function (e) {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const textElement = e.target.parentElement.querySelector('p');
                if (textElement) {
                    textElement.innerHTML = `<i class="fas fa-file-alt"></i> <strong>Selected File:</strong> ${fileName}`;
                    textElement.style.color = 'var(--primary)';
                }
            }
        });
    });
});
