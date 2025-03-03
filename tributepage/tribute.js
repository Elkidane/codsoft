let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Change slide every 7 seconds
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll(".slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow
showSlides();