// Applique la transition d'apparition une fois que le DOM est prêt
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// Avant de quitter la page (clic sur un lien ou fermeture), applique la transition de sortie
window.addEventListener("beforeunload", () => {
  document.body.classList.remove("fade-in");
  document.body.classList.add("fade-out");
});

// Corrige le bug du retour arrière : réaffiche la page avec l'animation
window.addEventListener("pageshow", (event) => {
  if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");
  }
});
