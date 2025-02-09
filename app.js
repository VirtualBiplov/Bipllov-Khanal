
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("#header .hamburger");
    const mobileMenu = document.querySelector("#header .nav-list ul");
    const menuItems = document.querySelectorAll("#header .nav-list ul li a");
    const header = document.querySelector("#header");

    // Toggle menu on click
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });

    // Change header background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

