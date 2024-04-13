// text slider
var maincopy = document.querySelector(".scrl-slide");

for (var i = 0; i < 8; i++) {
    var copy = maincopy.cloneNode(true);
    document.querySelector(".scrl").appendChild(copy);
}
// ---------------- slider----------------
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
    const nameElement = document.querySelector('.name');
  
    // slide names
    const slideNames = ['Patrick Tan', 'Emily Turner', 'Sophia Reynolds', 'Ethan Mitchell'];
  
    let currentSlideIndex = 0;
  
    function showSlide(index) {
      // Hide slides
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      // Show selected slide
      slides[index].style.display = 'block';
      // Update slide name
      nameElement.textContent = slideNames[index];
      // Update active dot
      dots.forEach((dot, dotIndex) => {
        dot.classList.remove('active');
        if (dotIndex === index) {
          dot.classList.add('active');
        }
      });
    }
    showSlide(currentSlideIndex);
    // E listeners for previous and next buttons
    prevBtn.addEventListener('click', function() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      showSlide(currentSlideIndex);
    });
    nextBtn.addEventListener('click', function() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(currentSlideIndex);
    });
    // E listeners for dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        currentSlideIndex = index;
        showSlide(currentSlideIndex);
      });
    });
  });