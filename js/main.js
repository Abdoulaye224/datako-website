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
    // --- TRANSLATION LOGIC START ---
    const translations = {
        fr: {
            nav: {
                home: "Accueil",
                services: "Prestations",
                training: "Formations",
                matching: "Matching",
                blog: "Blog",
                contact: "Contact"
            },
            hero: {
                tag: "CONTACT",
                title: "Parlons de votre projet",
                desc: "Vous avez un défi data à relever ? Une question sur nos formations ? Notre équipe est à votre écoute.",
                badge1: "Réponse sous 24h-48h",
                badge2: "Présence Europe & Afrique",
                badge3: "Accompagnement PME & Grands Comptes"
            },
            process: {
                title: "Comment ça marche ?",
                subtitle: "Une démarche simple et structurée pour avancer rapidement.",
                step1_title: "Vous décrivez votre besoin",
                step1_desc: "Remplissez le formulaire ci-dessous ou écrivez-nous pour nous expliquer votre contexte et vos enjeux data ou IA.",
                step2_title: "Nous analysons le contexte",
                step2_desc: "Notre équipe étudie votre demande et vous recontacte rapidement pour qualifier vos attentes.",
                step3_title: "Proposition adaptée",
                step3_desc: "Nous vous proposons une feuille de route claire, un devis ou un plan de formation sur mesure."
            },
            form: {
                title: "Envoyez-nous un message",
                ph_firstname: "Prénom",
                ph_lastname: "Nom",
                ph_email: "Email professionnel",
                ph_message: "Votre message",
                subject_default: "Sujet de votre demande",
                subject_consulting: "Consulting & Projets",
                subject_training: "Formation",
                subject_recruitment: "Recrutement / Partenariat",
                subject_other: "Autre",
                btn_send: "Envoyer le message",
                privacy: "Nous ne partageons jamais vos informations."
            },
            offices: {
                title: "Nos Bureaux",
                guinea: "Guinée",
                france: "France",
                email: "Email direct"
            },
            index: {
                hero: {
                    tag: "Cabinet de Consulting",
                    title: "Transformez vos données en levier de croissance",
                    desc: "DataKö accompagne les entreprises partout en Afrique de l’Ouest et en Europe dans la modernisation de leur gestion de données et l’intégration de l’Intelligence Artificielle.",
                    btn_services: "Nos Services",
                    btn_contact: "Nous Contacter"
                },
                expertise: {
                    title: "Une expertise pointue",
                    intro: "DataKö est né d’une conviction simple : la Data doit devenir un véritable levier de performance pour les entreprises, et non un sujet complexe réservé aux experts.",
                    list1: "<strong>Pragmatisme :</strong> des solutions concrètes, adaptées au terrain.",
                    list2: "<strong>Excellence technique :</strong> standards enterprise-grade issus de missions menées dans de grands groupes.",
                    list3: "<strong>Transmission :</strong> accompagner, documenter, rendre vos équipes autonomes."
                },
                services: {
                    title: "Nos Domaines d’Intervention",
                    desc: "De la stratégie à la mise en production, nous couvrons l’ensemble de la chaîne de valeur data pour vous aider à transformer vos données en avantage concurrentiel.",
                    card1_title: "Expertise & Matching Data",
                    card1_desc: "Sourcing, sélection et mise en relation avec des profils Data & IA adaptés à vos enjeux, partout en Afrique.",
                    card1_cta: "En savoir plus →",
                    card2_title: "Data Engineering",
                    card2_desc: "Architecture de données moderne, pipelines ETL/ELT robustes et industrialisation de vos flux vers des plateformes cloud ou on-premise.",
                    card2_cta: "En savoir plus →",
                    card3_title: "Analytics & BI",
                    card3_desc: "De la préparation des données à la data visualisation, nous construisons des tableaux de bord stratégiques pour piloter vos décisions.",
                    card3_cta: "En savoir plus →",
                    card4_title: "IA & Automatisation",
                    card4_desc: "Automatisation de processus et solutions data & IA sur mesure pour répondre à vos usages métiers et améliorer l’efficacité opérationnelle.",
                    card4_cta: "En savoir plus →"
                },
                why: {
                    title: "Pourquoi choisir DataKö ?",
                    statement: "Nous ne sommes pas une agence de staffing, ni une ESN classique. DataKö est votre partenaire de confiance pour transformer la complexité data en levier de performance durable",
                    signature: "Vos ambitions méritent une exécution sans faille.",
                    p1_title: "Alignement Business",
                    p1_desc: "Comprendre vos enjeux stratégiques avant de toucher à l'architecture technique.",
                    p2_title: "Standards Techniques",
                    p2_desc: "Une rigueur industrielle et des méthodes inspirées des leaders de la tech.",
                    p3_title: "Ancrage Terrain",
                    p3_desc: "Une présence hybride Europe & Afrique pour une réactivité totale.",
                    p4_title: "Culture du Résultat",
                    p4_desc: "Une approche orientée mise en production, avec des POC pensés dès le départ pour créer de la valeur mesurable."
                }
            }
        },
        en: {
            nav: {
                home: "Home",
                services: "Services",
                training: "Training",
                matching: "Matching",
                blog: "Blog",
                contact: "Contact"
            },
            hero: {
                tag: "CONTACT",
                title: "Let's Talk About Your Project",
                desc: "Have a data challenge? A question about our training? Our team is here to listen.",
                badge1: "Response within 24-48h",
                badge2: "Presence in Europe & Africa",
                badge3: "Support for SMEs & Enterprises"
            },
            process: {
                title: "How It Works",
                subtitle: "A simple and structured approach to move fast.",
                step1_title: "Describe Your Needs",
                step1_desc: "Fill out the form below or email us to explain your context and data/AI challenges.",
                step2_title: "We Analyze Context",
                step2_desc: "Our team reviews your request and contacts you quickly to qualify your expectations.",
                step3_title: "Tailored Proposal",
                step3_desc: "We propose a clear roadmap, a quote, or a training plan suited to you."
            },
            form: {
                title: "Send Us a Message",
                ph_firstname: "First Name",
                ph_lastname: "Last Name",
                ph_email: "Professional Email",
                ph_message: "Your Message",
                subject_default: "Subject of your request",
                subject_consulting: "Consulting & Projects",
                subject_training: "Training",
                subject_recruitment: "Recruitment / Partnership",
                subject_other: "Other",
                btn_send: "Send Message",
                privacy: "We never share your information."
            },
            offices: {
                title: "Our Offices",
                guinea: "Guinea",
                france: "France",
                email: "Direct Email"
            },
            index: {
                hero: {
                    tag: "Consulting Firm",
                    title: "Transform Your Data into Growth Levers",
                    desc: "DataKö supports companies across West Africa and Europe in modernizing their data management and integrating Artificial Intelligence.",
                    btn_services: "Our Services",
                    btn_contact: "Contact Us"
                },
                expertise: {
                    title: "Deep Expertise",
                    intro: "DataKö was born from a simple conviction: Data must become a true performance lever for companies, not a complex subject reserved for experts.",
                    list1: "<strong>Pragmatism:</strong> concrete solutions, adapted to your needs.",
                    list2: "<strong>Technical Excellence:</strong> enterprise-grade standards from missions in major groups.",
                    list3: "<strong>Transmission:</strong> coach, document, and make your teams autonomous."
                },
                services: {
                    title: "Our Areas of Intervention",
                    desc: "From strategy to production, we cover the entire data value chain to help you transform your data into a competitive advantage.",
                    card1_title: "Data Expertise & Matching",
                    card1_desc: "Sourcing, selection, and connection with Data & AI profiles adapted to your challenges, everywhere in Africa.",
                    card1_cta: "Learn More →",
                    card2_title: "Data Engineering",
                    card2_desc: "Modern data architecture, robust ETL/ELT pipelines, and industrialization of your flows to cloud or on-premise platforms.",
                    card2_cta: "Learn More →",
                    card3_title: "Analytics & BI",
                    card3_desc: "From data preparation to visualization, we build strategic dashboards to drive your decisions.",
                    card3_cta: "Learn More →",
                    card4_title: "AI & Automation",
                    card4_desc: "Process automation and custom Data & AI solutions to meet your business needs and improve operational efficiency.",
                    card4_cta: "Learn More →"
                },
                why: {
                    title: "Why Choose DataKö?",
                    statement: "We are not a staffing agency, nor a classic IT firm. DataKö is your trusted partner to transform data complexity into lasting performance levers.",
                    signature: "Your ambitions deserve flawless execution.",
                    p1_title: "Business Alignment",
                    p1_desc: "Understanding your strategic challenges before touching technical architecture.",
                    p2_title: "Technical Standards",
                    p2_desc: "Industrial rigor and methods inspired by tech leaders.",
                    p3_title: "Local Anchoring",
                    p3_desc: "A hybrid presence in Europe & Africa for total responsiveness.",
                    p4_title: "Result Oriented",
                    p4_desc: "A production-oriented approach, with POCs designed from the start to create measurable value."
                }
            }
        }
    };

    let currentLang = 'fr'; // Default

    function applyTranslations() {
        const t = translations[currentLang];

        // 1. Text Replacements via data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const keys = el.getAttribute('data-i18n').split('.');
            let val = t;
            keys.forEach(k => { val = val ? val[k] : null });
            if (val) el.innerHTML = val; // Use innerHTML to support <strong> tags
        });

        // 2. Update Contact Form Injection
        renderContactForm();

        // 3. Update Button Text
        const langBtn = document.querySelector('.lang-switch');
        if (langBtn) langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }

    function toggleLanguage() {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        applyTranslations();
    }

    // Inject Language Button
    const globalNavMenu = document.querySelector('.nav-menu');
    if (globalNavMenu) {
        const li = document.createElement('li');
        li.className = 'nav-item';
        const btn = document.createElement('button');
        btn.className = 'lang-switch';
        btn.textContent = 'EN'; // Start with option to switch to EN
        btn.onclick = toggleLanguage;
        li.appendChild(btn);
        globalNavMenu.appendChild(li);

        // Initial Application of Language (if not FR)
        // applyTranslations(); // Optional if we wanted to auto-detect
    }
    // --- TRANSLATION LOGIC END ---


    // Shared Contact Form Component (Single Source of Truth)
    function renderContactForm() {
        const formContainer = document.getElementById('contact-form-container');
        if (formContainer) {
            const t = translations[currentLang].form;
            const contactFormHTML = `
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="contactForm"
                    style="display: flex; flex-direction: column; gap: 20px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <input type="text" id="prenom" name="prenom" placeholder="${t.ph_firstname}" required>
                        <input type="text" id="nom" name="nom" placeholder="${t.ph_lastname}" required>
                    </div>
                    <input type="email" id="email" name="email" placeholder="${t.ph_email}" required>
                    <select id="sujet" name="sujet" required>
                        <option value="" disabled selected>${t.subject_default}</option>
                        <option value="consulting" style="color: black;">${t.subject_consulting}</option>
                        <option value="formation" style="color: black;">${t.subject_training}</option>
                        <option value="recrutement" style="color: black;">${t.subject_recruitment}</option>
                        <option value="autre" style="color: black;">${t.subject_other}</option>
                    </select>
                    <textarea id="message" name="message" rows="5" placeholder="${t.ph_message}" required></textarea>
                    <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">${t.btn_send}</button>
                    <div class="form-reassurance-text">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        ${t.privacy}
                    </div>
                </form>
            `;
            formContainer.innerHTML = contactFormHTML;
        }
    }
    // Initial Render
    renderContactForm();

    // Scroll Reveal Animation for Process Steps
    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length > 0) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Slight artificial delay if multiple appear at once for stagger effect
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        processSteps.forEach((step, index) => {
            step.style.transitionDelay = `${index * 100}ms`; // CSS stagger
            observer.observe(step);
        });
    }

});
