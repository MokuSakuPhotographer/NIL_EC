(() => {
    const header = document.querySelector('.site-header');
    const menuButton = document.querySelector('.menu-toggle');
    const brandMenu = document.querySelector('.brand-menu');
    const mobile = window.matchMedia('(max-width: 760px)');
    function closeMenu(restoreFocus = false) {
        header?.classList.remove('menu-open');
        menuButton?.setAttribute('aria-expanded', 'false');
        if (menuButton) menuButton.textContent = 'Menu +';
        if (brandMenu) brandMenu.open = false;
        if (restoreFocus) menuButton?.focus();
    }
    menuButton?.addEventListener('click', () => {
        const open = header.classList.toggle('menu-open');
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.textContent = open ? 'Close −' : 'Menu +';
    });
    document.addEventListener('click', event => { if (!header?.contains(event.target)) closeMenu(); });
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        if (brandMenu?.open) { brandMenu.open = false; brandMenu.querySelector('summary').focus(); }
        else if (header?.classList.contains('menu-open')) closeMenu(true);
    });
    header?.addEventListener('focusout', () => {
        setTimeout(() => { if (!header.contains(document.activeElement)) closeMenu(); }, 0);
    });
    mobile.addEventListener('change', () => closeMenu());
    let lastY = window.scrollY;
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = Math.max(0, window.scrollY);
            if (Math.abs(y - lastY) > 6) {
                const interacting = header?.contains(document.activeElement) || header?.classList.contains('menu-open') || brandMenu?.open;
                header?.classList.toggle('header-hidden', y > lastY && y > 150 && !interacting);
                lastY = y;
            }
            ticking = false;
        });
    }, { passive: true });
    const brandButtons = document.querySelectorAll('.brand-selector [data-brand]');
    function selectBrand(brand) {
        brandButtons.forEach(button => {
            const selected = button.dataset.brand === brand;
            button.setAttribute('aria-pressed', String(selected));
            document.getElementById(button.getAttribute('aria-controls')).hidden = !selected;
        });
    }
    brandButtons.forEach(button => button.addEventListener('click', () => {
        selectBrand(button.dataset.brand);
        history.replaceState(null, '', `#${button.dataset.brand}`);
    }));
    function syncBrandHash() { if (brandButtons.length) selectBrand(location.hash === '#okurih' ? 'okurih' : 'eole'); }
    window.addEventListener('hashchange', syncBrandHash);
    syncBrandHash();
})();
