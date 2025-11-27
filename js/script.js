const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");

if (menuToggle && navMenu && closeMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
    menuToggle.classList.add("is-hidden");
    menuToggle.classList.remove("is-visible");
    closeMenu.classList.add("is-visible");
    closeMenu.classList.remove("is-hidden");
  });

  closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("is-hidden");
    menuToggle.classList.add("is-visible");
    closeMenu.classList.remove("is-visible");
    closeMenu.classList.add("is-hidden");
  });

  const navLinks = document.querySelectorAll(".nav-menu ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      closeMenu.classList.remove("is-visible");
      closeMenu.classList.add("is-hidden");
      menuToggle.classList.remove("is-hidden");
      menuToggle.classList.add("is-visible");
    });
  });
}

/* Стрілочка — без змін */
const nextArrow = document.querySelector(".next-arrow");

if (nextArrow) {
  nextArrow.addEventListener("click", () => {
    const currentSection = document.getElementById("hero");
    const nextSection = currentSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}
