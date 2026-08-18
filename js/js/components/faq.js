export function initAccordion() {
  const root = document.querySelector("[data-faq]");
  if (!root) return;

  root.querySelectorAll(".accordion__trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion__item");
      const content = item?.querySelector(".accordion__content");
      const open = item?.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(Boolean(open)));
      if (content) content.hidden = !open;
    });
  });
}
