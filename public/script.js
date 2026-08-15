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
