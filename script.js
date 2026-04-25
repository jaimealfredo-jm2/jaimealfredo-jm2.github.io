const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
//Abrir y cerrar el menú
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//Cerrar el menú  al hacer clic afuera
document.addEventListener("click", (e) => {
  if (
    !menuToggle.contains(e.target) &&
    !navMenu.contains(e.target)
  ){
    navMenu.classList.remove("active");
  }
});
