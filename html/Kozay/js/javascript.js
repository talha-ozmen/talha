const swiper = new Swiper('.banner .swiper-container', {
    slidesPerView: 1,
    loop: "true",
    pagination: "true",
    effect: 'fade',
    pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,
    },
});

const swiper2 = new Swiper('.project .swiper-container', {
    loop: "true",
    spaceBetween: 5,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper('.other-project .swiper-container', {
    spaceBetween: 30,
    loop: "true",
    pagination: "true",
    pagination: {
        el: ".other-project .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

function requestform(){
    $(".request-form-open").toggleClass("active");
}

function menu() {
    $(".menu").toggleClass("active");
    $(".header-link").toggleClass("height-max");
    $(".header-link a").toggleClass("active");
    $(".header-bg>div").toggleClass("menu-bg-black");
    $(".dropdawn").toggleClass("active");
}

function dropdawn(){
    $(".header-project").toggleClass("header-project-dropdawn active");
    $(".header-project-elysium").toggleClass("header-project-elysium-dropdawn active");
    $(".arrow-open").toggleClass("header-link-open");
}


