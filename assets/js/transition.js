document.addEventListener("DOMContentLoaded", function () {
  // Appliquer la classe fade-in à l'arrivée
  document.body.classList.add("fade-in");

  // Pour tous les liens internes
  const anchors = document.querySelectorAll("a[href]");

  anchors.forEach(anchor => {
    const href = anchor.getAttribute("href");
    const isInternal = href && !href.startsWith("http") && !href.startsWith("#");

    if (isInternal) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 300); // doit être < transition CSS (0.5s)
      });
    }
  });
});
