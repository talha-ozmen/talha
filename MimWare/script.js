const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active'); -
    offScreenMenu.classList.toggle('active');
})

var swiper = new Swiper(".banner-bg .swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },

});


var swiper = new Swiper(".video .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener('scroll', function () {
  const animasyonOge = document.querySelector('.indust-boxs');
  const windowHeight = window.innerHeight; // Görünür ekranın yüksekliği
  const elementTop = animasyonOge.getBoundingClientRect().top; // Öğenin üst kenarının mesafesi

  if (elementTop < windowHeight) {
      animasyonOge.classList.add('a'); // Öğeyi görünür hale getir
  }
});