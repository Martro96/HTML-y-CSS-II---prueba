/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
import { register } from 'swiper/element/bundle';
register();


let swiperContainer = document.querySelector('.swiper__wrapper');
let swiper = new swiper(swiperContainer, {
    slidesPerView: 3,
    gridRows: 1,
    mousewheelForceToAxis: true,
});

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) { 
        swiper.params.slidesPerView = 1;
        swiper.update(); 
    } else {
        swiper.params.slidesPerView = 3;
        swiper.update();
    }
});


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlacesCerrarMenu = document.querySelectorAll(".main-nav__link");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

enlacesCerrarMenu.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});
