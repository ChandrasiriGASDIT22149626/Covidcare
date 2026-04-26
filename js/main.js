document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between hamburger and close (if using an icon font like FontAwesome or simple text)
            if (navLinks.classList.contains('active')) {
                mobileToggle.innerHTML = '✕';
            } else {
                mobileToggle.innerHTML = '☰';
            }
        });
    }

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            
            // Also highlight parent if it's a dropdown item
            const dropdown = link.closest('.dropdown');
            if (dropdown) {
                dropdown.querySelector('a:not(.dropdown-menu a)').classList.add('active');
            }
        }
    });

    // Mobile dropdown toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('a');
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && dropdown.querySelector('.dropdown-menu')) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});
