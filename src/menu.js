(() => {
  const refs = {
      openMenuBtn: document.querySelector(".open-menu-btn"),
      closeMenuBtn: document.querySelector(".close-menu-btn"),
      menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.openMenuBtn.classList.toggle("is-hidden");
  }
})();