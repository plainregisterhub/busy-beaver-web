export function initClipboard() {
  document.querySelectorAll("[data-copy]").forEach(button => {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue || "";
      if (!value) return;

      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = "COPIED";
        button.classList.add("is-copied");
        window.setTimeout(() => {
          button.textContent = original;
          button.classList.remove("is-copied");
        }, 1600);
      } catch {
        button.textContent = "COPY FAILED";
        window.setTimeout(() => { button.textContent = original; }, 1800);
      }
    });
  });
}
