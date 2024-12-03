document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    // Adds or removes the "scrolled" class based on scroll position
    const toggleNavbarClass = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", toggleNavbarClass);
});
