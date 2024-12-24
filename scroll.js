document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
});