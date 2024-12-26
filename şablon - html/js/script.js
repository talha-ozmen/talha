const swiper = new Swiper('.test .swiper', {
    slidesPerView: 1.5,
    spaceBetween: 10,
    // loop: true, // sonsuz yapar
    // centeredSlides: "true", //bu kod sliderı ortalar
    // effect: 'fade', // fade efecti verir
    pagination: "true", // dotsları açar
    navigation: "true", // Ok tuşlarını açar

    /*
     breakpoints: { //responsivede kullanılır
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
    */

   
    navigation: { // ok tuşları
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    

    
    pagination: { // dots
        el: ".test .pagination",
        clickable: true,
    },
    
});



function menu() {
    $(".menu").toggleClass("active");
    $(".header-links").toggleClass("active-flex");
    $(".header-social-media").toggleClass("active-flex");
    $(".header-links a").toggleClass("test");
}