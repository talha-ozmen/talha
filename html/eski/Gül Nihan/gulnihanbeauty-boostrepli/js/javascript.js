const swiper = new Swiper('#comment-area .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: "true",
    breakpoints: {
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3
        },
    },
});

const swiper2 = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: "true",
    pagination: "true",
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

function menu() {
    $(".menu").toggleClass("active");
    $(".header-link-container").toggleClass("header-link-container-active");
    $(".shadow").toggleClass("shadow-active");
    $(".overflow").toggleClass("overflow-hidden");
    $(".dropdawn-container").toggleClass("d-none")
}