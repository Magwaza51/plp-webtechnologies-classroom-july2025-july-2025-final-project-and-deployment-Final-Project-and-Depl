// Simple script for form validation and menu toggle (expand as needed)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }
});