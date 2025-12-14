document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Logic
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop() || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Floating Button Interaction (Optional Smooth Scroll or Modal trigger)
    const floatBtn = document.querySelector('.floating-btn');
    if (floatBtn) {
        floatBtn.addEventListener('click', (e) => {
            // If we want it to scroll to contact section or open a modal later
            // For now it's just a link to contact.html
        });
    }

    // Modal Logic
    const openModalBtns = document.querySelectorAll('[data-open-modal]');
    const closeModalBtns = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal-overlay');

    if (openModalBtns.length > 0) {
        // Open Modal
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = btn.getAttribute('data-open-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            });
        });

        // Close Modal (Button)
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal-overlay');
                modal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close Modal (Overlay Click)
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });

        // Close Modal (Escape Key)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal-overlay.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    }
});
