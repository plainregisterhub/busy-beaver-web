export function renderSiteData(config) {
  const builders = document.querySelector("[data-builders]");
  if (builders) {
    builders.innerHTML = config.builders.map(builder => `
      <article class="builder-card">
        <div class="builder-card__art">
          <img src="${builder.asset}" alt="${builder.name}, a $DayOne builder" loading="lazy">
        </div>
        <h3>${builder.name}</h3>
        <p>${builder.oneLiner}</p>
      </article>
    `).join("");
  }

  const statuses = document.querySelector("[data-status-grid]");
  if (statuses) {
    statuses.innerHTML = config.status.map(item => `
      <div class="status-row">
        <span>${item.label}</span>
        <span class="status-row__value">${item.value}</span>
      </div>
    `).join("");
  }

  const socials = document.querySelector("[data-social-links]");
  const footerSocials = document.querySelector("[data-footer-social]");
  const socialMarkup = config.socials.map(item => `
    <a class="social-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <span>${item.label}</span><span aria-hidden="true">${item.icon}</span>
    </a>
  `).join("");
  if (socials) socials.innerHTML = socialMarkup;
  if (footerSocials) footerSocials.innerHTML = config.socials.map(item =>
    `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
  ).join("");

  const faq = document.querySelector("[data-faq]");
  if (faq) {
    faq.innerHTML = config.faq.map((item, index) => `
      <article class="accordion__item">
        <h3>
          <button class="accordion__trigger" type="button"
                  aria-expanded="false" aria-controls="faq-answer-${index + 1}">
            <span>${item.question}</span>
            <span class="accordion__icon" aria-hidden="true">+</span>
          </button>
        </h3>
        <div class="accordion__content" id="faq-answer-${index + 1}" hidden>
          <p>${item.answer}</p>
        </div>
      </article>
    `).join("");
  }

  const address = document.querySelector("[data-contract-address]");
  const copy = document.querySelector("[data-copy]");
  if (address) address.textContent = config.token.address || "Contract address — coming soon";
  if (copy) {
    copy.dataset.copyValue = config.token.address || "";
    copy.disabled = !config.token.address;
  }

  document.querySelectorAll("[data-token-link]").forEach(link => {
    link.href = config.token.tokenUrl || "#";
    if (!config.token.tokenUrl) link.setAttribute("aria-disabled", "true");
  });
  document.querySelectorAll("[data-contract-link]").forEach(link => {
    link.href = config.token.explorerUrl || "#";
    if (!config.token.explorerUrl) link.setAttribute("aria-disabled", "true");
  });
  document.querySelectorAll("[data-explorer-link]").forEach(link => {
    link.href = config.token.explorerUrl || "#";
    if (!config.token.explorerUrl) link.setAttribute("aria-disabled", "true");
  });

  const empty = document.querySelector("[data-empty-state]");
  const entries = document.querySelector("[data-entries]");
  if (empty && entries) {
    if (config.buildLog.length === 0) {
      empty.hidden = false;
      entries.innerHTML = "";
    } else {
      empty.hidden = true;
      entries.innerHTML = config.buildLog.map(entry => `
        <article class="build-log-entry">
          <time>${entry.date}</time>
          <h3>${entry.title}</h3>
          <p>${entry.description}</p>
        </article>
      `).join("");
    }
  }
}
