document.addEventListener("DOMContentLoaded", () => {
  const injectHTML = async (selector, file) => {
    const target = document.querySelector(selector);
    if (target) {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Fichier non trouvé");
        const content = await response.text();
        target.innerHTML = content;
      } catch (error) {
        console.error(`Erreur de chargement ${file} :`, error);
      }
    }
  };

  injectHTML("header[data-include]", "components/header.html");
  injectHTML("footer[data-include]", "components/footer.html");
});
