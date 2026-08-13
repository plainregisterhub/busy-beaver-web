/* =========================================================
   DAY ONE — INTERACTION SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     HEADER SCROLL STATE
     ======================================================= */

  const header = document.querySelector(".site-header");

  if (header) {

    const updateHeader = () => {

      if (window.scrollY > 30) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }

    };

    window.addEventListener("scroll", updateHeader, {
      passive: true
    });

    updateHeader();

  }


  /* =======================================================
     CARD INTERACTION
     ======================================================= */

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
      card.classList.add("is-active");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("is-active");
    });

  });


  /* =======================================================
     BUY TOKEN BUTTON
     ======================================================= */

  const tokenLinks = document.querySelectorAll(
    'a[href="#token"]'
  );

  tokenLinks.forEach((link) => {

    link.addEventListener("click", () => {

      const tokenSection = document.querySelector("#token");

      if (tokenSection) {
        tokenSection.classList.add("token-highlight");

        setTimeout(() => {
          tokenSection.classList.remove("token-highlight");
        }, 900);
      }

    });

  });


  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "DAY ONE — Still Building."
  );

  console.log(
    "Three friends. One workshop. Always building."
  );

});
