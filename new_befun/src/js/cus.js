document.addEventListener("DOMContentLoaded", function() {
    const imagesContainer = document.querySelector('.images');
    const images = document.querySelectorAll('.images img');
    const prevButton = document.querySelector('.previous');
    const nextButton = document.querySelector('.next');

    const imageWidth = images[0].offsetWidth;
    const totalImages = images.length;
    const totalSlides = totalImages -4;
    let currentIndex = 0;

 
    function slideRight() {
        if (currentIndex < totalSlides) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        const newPosition = -currentIndex * imageWidth;
        imagesContainer.style.transition = 'transform 0.5s ease';
        imagesContainer.style.transform = `translateX(${newPosition}px)`;
    }

 
    function slideLeft() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides;
        }
        const newPosition = -currentIndex * imageWidth;
        imagesContainer.style.transition = 'transform 0.5s ease';
        imagesContainer.style.transform = `translateX(${newPosition}px)`;
    }


    nextButton.addEventListener('click', slideRight);


    prevButton.addEventListener('click', slideLeft);

 
    setInterval(slideRight, 2000);
});
