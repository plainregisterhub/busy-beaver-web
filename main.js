import { DAYONE } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // If an asset is missing or misnamed, hide the broken-image icon instead of
    // showing it. Sections already have a solid background color underneath,
    // so this fails quietly rather than breaking the layout.
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            img.classList.add('is-broken');
        }, { once: true });
    });

    const updateLinks = () => {
        document.querySelectorAll('[data-link="x"]').forEach(el => el.href = DAYONE.links.socials.x);
        document.querySelectorAll('[data-link="telegram"]').forEach(el => el.href = DAYONE.links.socials.telegram);
        document.querySelectorAll('[data-link="instagram"]').forEach(el => el.href = DAYONE.links.socials.instagram);

        document.querySelectorAll('[data-link="buy"]').forEach(btn => {
            if (!DAYONE.links.buyToken) {
                btn.classList.add('is-disabled');
                btn.removeAttribute('href');
                btn.setAttribute('aria-disabled', 'true');
            } else {
                btn.classList.remove('is-disabled');
                btn.removeAttribute('aria-disabled');
                btn.href = DAYONE.links.buyToken;
            }
        });
    };

    updateLinks();

    const header = document.querySelector('.site-header');
    const syncHeader = () => {
        header?.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });

    const revealElements = document.querySelectorAll('[data-reveal]');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    const coinBtn = document.querySelector('.coin');
    if (coinBtn) {
        coinBtn.addEventListener('click', () => {
            const flipped = coinBtn.classList.toggle('is-flipped');
            coinBtn.setAttribute('aria-pressed', String(flipped));
            coinBtn.setAttribute('aria-label', flipped ? 'Show $DayOne coin front' : 'Show $DayOne coin back');
        });
    }

    const copyBtn = document.querySelector('[data-action="copy-contract"]');
    if (copyBtn) {
        if (!DAYONE.token.contract) {
            copyBtn.textContent = 'PENDING';
            copyBtn.classList.add('is-disabled');
            copyBtn.setAttribute('aria-disabled', 'true');
        } else {
            copyBtn.addEventListener('click', async () => {
                const originalText = 'COPY CONTRACT';
                try {
                    await navigator.clipboard.writeText(DAYONE.token.contract);
                    copyBtn.textContent = 'COPIED';
                    setTimeout(() => { copyBtn.textContent = originalText; }, 2000);
                } catch (err) {
                    copyBtn.textContent = 'COPY FAILED';
                    setTimeout(() => { copyBtn.textContent = originalText; }, 2000);
                    console.error('Failed to copy contract:', err);
                }
            });
        }
    }

    const faqList = document.querySelector('[data-faq-list]');
    if (faqList) {
        faqList.innerHTML = DAYONE.faq.map(item => `
            <details class="faq-item" data-reveal>
                <summary>${item.question}<span>+</span></summary>
                <div class="faq-item__answer">${item.answer}</div>
            </details>
        `).join('');

        faqList.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-visible'));
    }

    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(faq => {
        faq.addEventListener('toggle', () => {
            if (!faq.open) return;
            faqs.forEach(otherFaq => {
                if (otherFaq !== faq) otherFaq.removeAttribute('open');
            });
        });
    });

    const menuToggle = document.querySelector('.nav__toggle');
    const navLinks = document.querySelector('.nav__links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(open));
        });

        navLinks.addEventListener('click', e => {
            if (e.target.closest('a')) {
                navLinks.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                navLinks.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelector('[data-action="top"]')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
