const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


// Navbar background on scroll

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// Mobile menu

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});


// Close mobile menu after clicking a link

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});

// Scroll reveal animations

const revealElements = document.querySelectorAll(
    ".story-left, .story-right, .menu-intro, .featured-dish, .after-dark-content, .gallery-heading, .gallery-item, .reservation-content, .footer-main, .contact-heading, .contact-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal", "visible");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

// Image reveal

const imageElements = document.querySelectorAll(
    ".story-image, .dish-image, .after-dark-image, .gallery-item"
);

const imageObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                imageObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

imageElements.forEach((image) => {
    image.classList.add("reveal-image");
    imageObserver.observe(image);
});