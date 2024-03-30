/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js"; /*Esto no sé si hace flta al tener el module instalado de swiper*/

new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},

	autoplay: {
		delay: 5000,
	},
    breakpoints: {
    // when window width is >= 320px
    250: {
    slidesPerView: 1,
    spaceBetween: 50
    },
    // when window width is >= 768 pantalla desktop
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    // when window width is >=900
    900: {
        slidesPerView: 3,
        spaceBetween: 30
    }
    }
});


/****MENÚ HAMBURGUESA******/
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("main-nav--visible"); 
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("main-nav--visible"); 
    });
});
