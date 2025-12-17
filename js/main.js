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
    // Shared Contact Form Component (Single Source of Truth)
    const formContainer = document.getElementById('contact-form-container');
    if (formContainer) {
        const contactFormHTML = `
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm"
                style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <input type="text" id="prenom" name="prenom" placeholder="Prénom" required
                        style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                    <input type="text" id="nom" name="nom" placeholder="Nom" required
                        style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                </div>
                <input type="email" id="email" name="email" placeholder="Email professionnel" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                <select id="sujet" name="sujet" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                    <option value="" disabled selected>Sujet de votre demande</option>
                    <option value="consulting" style="color: black;">Consulting & Projets</option>
                    <option value="formation" style="color: black;">Formation</option>
                    <option value="recrutement" style="color: black;">Recrutement / Partenariat</option>
                    <option value="autre" style="color: black;">Autre</option>
                </select>
                <textarea id="message" name="message" rows="5" placeholder="Votre message" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;"></textarea>
                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">Envoyer le message</button>
                <div class="form-reassurance-text">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Nous ne partageons jamais vos informations.
                </div>
            </form>
        `;
        formContainer.innerHTML = contactFormHTML;
    }
});
