// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// ============ COPY CONTRACT ADDRESS ============
const copyBtn = document.getElementById('copy-btn');
const copyBtnText = document.getElementById('copy-btn-text');
const contractAddress = document.getElementById('contract-address');

if (copyBtn && contractAddress) {
  copyBtn.addEventListener('click', async () => {
    const text = contractAddress.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // Fallback for browsers without clipboard API access
      const temp = document.createElement('textarea');
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      document.body.removeChild(temp);
    }
    const original = copyBtnText.textContent;
    copyBtnText.textContent = 'Copied ✓';
    copyBtn.disabled = true;
    setTimeout(() => {
      copyBtnText.textContent = original;
      copyBtn.disabled = false;
    }, 1800);
  });
}
