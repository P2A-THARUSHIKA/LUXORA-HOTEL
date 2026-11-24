// ======================================
// LUXORA - LUXURY HOTEL WEBSITE
// JavaScript Interactions
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. MOBILE MENU
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            nav.classList.toggle("active");
        });

        // Close menu after clicking a link
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                nav.classList.remove("active");
            });
        });

    }


    // 2. LOADER
    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                loader.remove();
            }, 3000);
        });
    }


    // 3. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll(
        ".intro-grid, .intro-image, .section-top, .room-card, .experience-content, .dining-image, .dining-content, .booking-content"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });


    // 4. HEADER SCROLL EFFECT
    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    // 5. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // 6. CURRENT YEAR IN FOOTER
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

// ===============================
// LUXORA CONTACT FORM DEMO
// ===============================

const luxoraForm = document.getElementById("luxoraContactForm");

if (luxoraForm) {

    luxoraForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage = document.getElementById("formMessage");

        formMessage.style.display = "block";

        formMessage.textContent =
            "Thank you for contacting LUXORA! This is a demo form. Your message has not been sent.";

        luxoraForm.reset();

    });

}