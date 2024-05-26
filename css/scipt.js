
$(document).ready(function(){
  $("#slider").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slider.style.transform = `translateX(-${currentSlide * 40}%)`;
}

setInterval(nextSlide, 5000); 

document.getElementById('toggle-nav').addEventListener('click', function() {
    this.classList.toggle('active');
  });