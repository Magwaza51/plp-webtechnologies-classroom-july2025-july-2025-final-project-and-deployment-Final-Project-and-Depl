// Highlight current page in nav
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.parentElement.classList.add('active');
    } else {
        link.parentElement.classList.remove('active');
    }
});

// Contact form validation and alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Thank you for your message, ' + name + '!');
        contactForm.reset();
    });
}
