let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function bookNow() {
  alert("Booking functionality is under development!");
}

function learnMore() {
  alert("Learn More functionality is under development!");
}
