function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    // Quando um desses elementos selecionados pelo queryselector for clicado, irá adicionar/remover a classe"open"
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}