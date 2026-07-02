const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-link");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactForm = document.getElementById("contactForm");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        if (icon) {
            icon.classList.toggle("fa-moon");
            icon.classList.toggle("fa-sun");
        }
    });
}

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });
    navLinksAll.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

navLinksAll.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("show");
        }
    });
});

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = contactForm.querySelector("input[type='text']").value.trim();
        const email = contactForm.querySelector("input[type='email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required!");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email!");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
}
