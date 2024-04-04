document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelector(".images");
    const slides = document.querySelectorAll(".images img");
    const totalSlides = slides.length;

 
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.left = `${i * 950}px`;
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 2000);

   
    document.querySelector(".previous").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    
    document.querySelector(".next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        for (let i = 0; i < totalSlides; i++) {
            const index = (currentIndex + i) % totalSlides;
            slides[index].style.transition = "left 0.5s ease";
            slides[index].style.left = `${i * 950}px`;
        }
    }
});
