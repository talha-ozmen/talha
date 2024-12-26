//yorum
var swiper = new Swiper(".comment-section .swiper", {
    slidesPerView: 1.1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        850: {
            slidesPerView: 1.8
        },
        700: {
            slidesPerView: 1.3
        }

    }

},
);


//odalar
var swiper = new Swiper(".swiper-room", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: "true",
    breakpoints: {
    991: {
        slidesPerView: 3
    },
    450: {
        slidesPerView: 2
    }
}
    
},
);



//rezervasyon
$(function () {
    $("#date").datepicker({
        dateFormat: "dd/mm/yy"
    });
});

$(function () {
    $("#date2").datepicker({
        dateFormat: "dd/mm/yy"
    });
});

//anasayfa
var swiper = new Swiper(".swiper-home-page", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    loop: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
},
);