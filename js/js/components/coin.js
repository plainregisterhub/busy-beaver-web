export function initCoin() {
  const coin = document.querySelector("[data-coin]");
  if (!coin) return;

  let flipping = false;

  coin.addEventListener("click", () => {
    if (flipping) return;
    flipping = true;
    coin.classList.add("is-flipping");
    window.setTimeout(() => {
      coin.classList.remove("is-flipping");
      flipping = false;
    }, 820);
  });
}
