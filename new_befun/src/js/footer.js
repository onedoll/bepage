document.addEventListener('DOMContentLoaded', function() {
    const logoImg = document.querySelector('.img-logo img');

    logoImg.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
