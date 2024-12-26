var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5, 
    },
  },
});

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
