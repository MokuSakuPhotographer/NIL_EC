(function () {
    const header = document.querySelector('header');
    if (!header) return;

    const dropdowns = document.querySelectorAll('.has-dropdown, .site-dropdown');
    dropdowns.forEach((dropdown) => {
        const trigger = dropdown.querySelector(':scope > a, :scope > button');
        if (!trigger) return;

        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');

        dropdown.addEventListener('mouseenter', () => {
            trigger.setAttribute('aria-expanded', 'true');
        });

        dropdown.addEventListener('mouseleave', () => {
            if (!dropdown.classList.contains('open')) {
                trigger.setAttribute('aria-expanded', 'false');
            }
        });

        dropdown.addEventListener('focusin', () => {
            trigger.setAttribute('aria-expanded', 'true');
        });

        dropdown.addEventListener('focusout', () => {
            window.setTimeout(() => {
                if (!dropdown.contains(document.activeElement)) {
                    dropdown.classList.remove('open');
                    trigger.setAttribute('aria-expanded', 'false');
                }
            }, 0);
        });

        if (dropdown.classList.contains('site-dropdown')) {
            trigger.addEventListener('click', (event) => {
                if (!window.matchMedia('(max-width: 768px)').matches) return;

                event.preventDefault();
                const isOpen = dropdown.classList.toggle('open');
                trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

                dropdowns.forEach((item) => {
                    if (item === dropdown || !item.classList.contains('site-dropdown')) return;
                    item.classList.remove('open');
                    item.querySelector(':scope > a, :scope > button')?.setAttribute('aria-expanded', 'false');
                });
            });
        }
    });

    let lastScrollY = window.scrollY;
    let ticking = false;

    function setHeaderState() {
        const currentY = window.scrollY;

        header.classList.toggle('header-hidden', currentY > lastScrollY && currentY > 90);
        header.classList.toggle('header-compact', currentY > 50);
        lastScrollY = currentY;
    }

    function requestHeaderUpdate() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            setHeaderState();
            ticking = false;
        });
    }

    window.addEventListener('scroll', requestHeaderUpdate, { passive: true });
    window.addEventListener('resize', requestHeaderUpdate);
    setHeaderState();
}());
