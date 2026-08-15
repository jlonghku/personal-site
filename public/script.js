const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.textContent = isOpen ? "Menu" : "Close";
  mobileNav.hidden = isOpen;
  document.body.style.overflow = isOpen ? "" : "hidden";
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
    mobileNav.hidden = true;
    document.body.style.overflow = "";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");

const updateScrollState = () => {
  const hasScrolled = window.scrollY > 80;
  siteHeader?.classList.toggle("is-scrolled", hasScrolled);
  backToTop?.classList.toggle("is-visible", window.scrollY > 600);
};

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();
