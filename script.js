document.querySelector('.subscribe-button').addEventListener('click', () => {
    alert("Thank you for subscribing to Wine Haven!");
  });
  

// script.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function (e) {
        const inputs = this.querySelectorAll('input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = 'red'; // Highlight empty fields
            } else {
                input.style.borderColor = ''; // Reset border color
            }
        });

        if (!valid) {
            e.preventDefault(); // Prevent form submission if invalid
            alert('Please fill in all fields.');
        }
    });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it has animated
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Footer animation on load
window.addEventListener('load', () => {
    const footer = document.querySelector('.footer');
    footer.classList.add('visible');
});

// Toggle mobile menu (if you have a mobile navigation)
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('active');
    });
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('show'); // Toggles visibility of menu
    hamburger.classList.toggle('open'); // Toggles "X" animation
}

document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.removeItem('loggedIn'); // Clear login state
    window.location.href = 'login.html'; // Redirect to login page
});



