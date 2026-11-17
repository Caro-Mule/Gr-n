// Fælles mobilmenu og foldbare footergrupper på alle sider.
// CSS bruger klassen mobile-menu-enhanced til kun at aktivere mobiladfærden, når dette script kører.
(() => {
    const siteNav = document.querySelector(".site-nav");
    const toggle = siteNav && siteNav.querySelector(".site-nav-toggle");
    const label = toggle && toggle.querySelector(".site-nav-toggle-label");

    if (!siteNav || !toggle || !label) {
        throw new Error("The mobile navigation controls are missing.");
    }

    // aria-controls forbinder hver knap med det panel, den åbner og lukker.
    const footerAccordions = Array.from(document.querySelectorAll(".footer-accordion-toggle"), (footerToggle) => {
        const panelId = footerToggle.getAttribute("aria-controls");
        const panel = panelId && document.getElementById(panelId);
        const indicator = footerToggle.querySelector('[aria-hidden="true"]');

        if (!panel || !indicator) {
            throw new Error("A footer accordion panel is missing.");
        }

        const setOpen = (isOpen) => {
            panel.classList.toggle("is-open", isOpen);
            footerToggle.setAttribute("aria-expanded", String(isOpen));
            indicator.textContent = isOpen ? "−" : "+";
        };

        footerToggle.addEventListener("click", () => {
            setOpen(footerToggle.getAttribute("aria-expanded") !== "true");
        });

        return { toggle: footerToggle, setOpen };
    });

    const setMenuOpen = (isOpen) => {
        siteNav.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Luk menu" : "Åbn menu");
        label.textContent = isOpen ? "Luk menu" : "Menu";
    };

    // Uden JavaScript forbliver navigationens links og footerens indhold synlige som fallback.
    document.body.classList.add("mobile-menu-enhanced");

    toggle.addEventListener("click", () => {
        setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest(".site-nav-links a")) {
            setMenuOpen(false);
        }
    });

    // Luk mobilmenuen ved klik udenfor; Escape lukker først menuen og derefter en åben footerkolonne.
    document.addEventListener("click", (event) => {
        if (toggle.getAttribute("aria-expanded") === "true" && !siteNav.contains(event.target)) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        if (toggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            toggle.focus();
            return;
        }

        const openAccordion = footerAccordions.find(({ toggle: footerToggle }) => (
            footerToggle.getAttribute("aria-expanded") === "true"
        ));

        if (openAccordion) {
            openAccordion.setOpen(false);
            openAccordion.toggle.focus();
        }
    });

    // Mobiltilstanden skal ikke hænge ved, hvis vinduet bliver bredere end CSS' 800 px breakpoint.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            setMenuOpen(false);
            footerAccordions.forEach(({ setOpen }) => setOpen(false));
        }
    });
})();
