function Delete() {
    let pic = document.querySelector("#picture");
    pic.parentNode.removeChild(pic);
}

const swiper = new Swiper('.foundation .swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    speed: 600,
    breakpoints: {
        480: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
      },
    navigation: {
        nextEl: '.foundation .swiper-button-next',
        prevEl: '.foundation .swiper-button-prev',
    },
});

$(document).ready(function() {
    $('.foundation-director .swiper-slide ').click(function() {

      // Daha önce eklenmiş blu-line sınıfını kaldır
      $('.foundation-director .swiper-slide ').removeClass('blue-line');

      // Tıklanan öğeye blu-line sınıfını ekle
      $(this).addClass('blue-line');
    });
  });