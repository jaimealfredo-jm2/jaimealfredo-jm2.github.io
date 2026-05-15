/* INICIO INTRO*/
gsap.registerPlugin(SplitText);

const split = SplitText.create(
    ".logo", { type: "chars" }
);

gsap.timeline()
    .set(".preloader", { autoAlpha: 1 }, 0)
    .from(".logo",{
        scale: 0.7,
        duration: 6,
        ease: "none"
    },0
)

.from(
    split.chars, {
        rotationY: 360,
        duration: 0.5,
        stagger: 0.1,
        ease: "none"
    }, 0.1
)
.to(".preloader", {
    autoAlpha: 0,
    duration: 4.5,
    ease: "power1.out"
}, 0
)
.to("main", {
    opacity: 1,
    duration: 0.5,
}, 3.5
);
/* FIN INTRO*/

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
