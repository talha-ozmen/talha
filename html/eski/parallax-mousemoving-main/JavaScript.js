document.addEventListener("mousemove", movingimg);

function movingimg(e) {
  this.querySelectorAll('.parallax').forEach(parallax => {
    const speed = parallax.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerHeight - e.pageY * speed) / 100

    parallax.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}