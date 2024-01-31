const totalSlides = document.querySelectorAll('.slide').length;

  function showSlide(index) {
    const newTransformValue = -index * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
  }

  function nextSlide() {
    const radios = document.querySelectorAll('.radio-button');
    let currentIndex = Array.from(radios).findIndex(radio => radio.checked);

    if (currentIndex < totalSlides - 1) {
      radios[currentIndex + 1].checked = true;
      showSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    const radios = document.querySelectorAll('.radio-button');
    let currentIndex = Array.from(radios).findIndex(radio => radio.checked);

    if (currentIndex > 0) {
      radios[currentIndex - 1].checked = true;
      showSlide(currentIndex - 1);
    }
  }

  // Auto-play functionality
  let autoPlayInterval;

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Start auto-play on page load
  startAutoPlay();

  // Pause auto-play when the user interacts with the slider
  const sliderContainer = document.getElementById('slider-container');
  sliderContainer.addEventListener('mouseover', stopAutoPlay);
  sliderContainer.addEventListener('mouseout', startAutoPlay);
  