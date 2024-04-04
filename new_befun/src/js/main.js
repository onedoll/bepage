document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});

window.onload = function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, document.querySelector(".main-header").offsetTop);
    };
};
