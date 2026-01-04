document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE LOGIC START ---
    const isEnglish = window.location.pathname.includes('/en/');
    const savedLang = localStorage.getItem('datako_lang');
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';

    // Auto-Redirect based on preference (only if explicitly saved)
    if (savedLang === 'en' && !isEnglish) {
        // Redirect to EN
        window.location.href = 'en/' + filename;
    } else if (savedLang === 'fr' && isEnglish) {
        // Redirect to FR (Root)
        window.location.href = '../' + filename;
    }

    // Language Switcher Injection
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
        const li = document.createElement('li');
        li.className = 'nav-item';

        // Determine target URLs for buttons
        // If we are in EN (subdirectory), FR link is '../filename'
        // If we are in FR (root), EN link is 'en/filename'

        const frLink = isEnglish ? '../' + filename : '#';
        const enLink = isEnglish ? '#' : 'en/' + filename;

        li.innerHTML = `
            <div class="lang-switcher">
                <span class="lang-opt ${!isEnglish ? 'active' : ''}" data-lang="fr">FR</span>
                <span class="lang-divider">|</span>
                <span class="lang-opt ${isEnglish ? 'active' : ''}" data-lang="en">EN</span>
            </div>
        `;
        navMenu.appendChild(li);

        // Bind Events
        li.querySelectorAll('.lang-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                const lang = opt.getAttribute('data-lang');
                if ((lang === 'en' && isEnglish) || (lang === 'fr' && !isEnglish)) return; // Already here

                localStorage.setItem('datako_lang', lang);

                if (lang === 'en') {
                    window.location.href = isEnglish ? '#' : 'en/' + (filename === '' ? 'index.html' : filename);
                    // Special case for root / -> en/index.html
                } else {
                    window.location.href = isEnglish ? '../' + filename : '#';
                }
            });
        });
    }
    // --- LANGUAGE LOGIC END ---


    // Hamburger Menu Logic
    const hamburger = document.querySelector(".hamburger");
    // navMenu already selected above

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
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Simple check: matches filename or is index match
        const isMatch = href === filename ||
            (filename === '' && href === 'index.html') ||
            (href.endsWith(filename) && filename !== '');

        if (isMatch) {
            link.classList.add('active');
        }
    });

    // Floating Button (Optional)
    const floatBtn = document.querySelector('.floating-btn');
    // Logic preserved

    // Modal Logic
    const openModalBtns = document.querySelectorAll('[data-open-modal]');
    const closeModalBtns = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal-overlay');

    if (openModalBtns.length > 0) {
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

        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.modal-overlay');
                modal.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });

        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            });
        });

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

    // Shared Contact Form Component (Bilingual)
    const formContainer = document.getElementById('contact-form-container');
    if (formContainer) {
        // Translations for form
        const t = isEnglish ? {
            ph_firstname: "First Name",
            ph_lastname: "Last Name",
            ph_email: "Professional Email",
            ph_message: "Your Message",
            opt_default: "Subject of your request",
            opt_1: "Consulting & Projects",
            opt_2: "Training",
            opt_3: "Recruitment / Partnership",
            opt_4: "Other",
            btn: "Send Message",
            privacy: "We never share your information."
        } : {
            ph_firstname: "Prénom",
            ph_lastname: "Nom",
            ph_email: "Email professionnel",
            ph_message: "Votre message",
            opt_default: "Sujet de votre demande",
            opt_1: "Consulting & Projets",
            opt_2: "Formation",
            opt_3: "Recrutement / Partenariat",
            opt_4: "Autre",
            btn: "Envoyer le message",
            privacy: "Nous ne partageons jamais vos informations."
        };

        const contactFormHTML = `
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm"
                style="display: flex; flex-direction: column; gap: 20px;">
                <div class="form-row">
                    <input type="text" id="prenom" name="prenom" placeholder="${t.ph_firstname}" required
                        style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                    <input type="text" id="nom" name="nom" placeholder="${t.ph_lastname}" required
                        style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                </div>
                <input type="email" id="email" name="email" placeholder="${t.ph_email}" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                <select id="sujet" name="sujet" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;">
                    <option value="" disabled selected>${t.opt_default}</option>
                    <option value="consulting" style="color: black;">${t.opt_1}</option>
                    <option value="formation" style="color: black;">${t.opt_2}</option>
                    <option value="recrutement" style="color: black;">${t.opt_3}</option>
                    <option value="autre" style="color: black;">${t.opt_4}</option>
                </select>
                <textarea id="message" name="message" rows="5" placeholder="${t.ph_message}" required
                    style="padding: 15px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; color: white;"></textarea>
                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">${t.btn}</button>
                <div class="form-reassurance-text">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    ${t.privacy}
                </div>
            </form>
        `;
        formContainer.innerHTML = contactFormHTML;
    }

    // Scroll Reveal Animation (Preserved)
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        processSteps.forEach((step, index) => {
            step.style.transitionDelay = `${index * 100}ms`;
            observer.observe(step);
        });
    }
});
