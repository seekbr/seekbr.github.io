document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.createElement("div");
  headerPlaceholder.id = "header-placeholder";
  document.body.prepend(headerPlaceholder);

  fetch("/partials/header.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;
    })
    .catch(err => console.error("Erro ao carregar o header:", err));
});