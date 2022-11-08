// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const contact = document.querySelector(".contact");
const cover = document.querySelector(".contact-cover");
const form = document.querySelector(".contact-form");
const formRight = document.querySelector(".contact-form-right");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

navMenu.addEventListener("click", function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

contact.addEventListener("click", function () {
    cover.classList.remove("z-20");
    contact.classList.remove("h-64");
    contact.classList.add("h-[32rem]");
    formRight.classList.remove("md:order-2");
    formRight.classList.add("md:border-r");
})

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}

if(document.getElementsByClassName('tiny-two-item').length > 0) {
    var slider = tns({
        container: '.tiny-two-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['', ''],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            768: {
                items: 2
            },
        },
    });
};
