// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  // Clic sur le bouton burger => afficher/cacher les liens
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // fermer menu
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });
});
