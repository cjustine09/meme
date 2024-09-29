// Function to display a personalized alert message
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
    }
}

// Form validation
function validateForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("All fields must be filled out.");
            event.preventDefault();
        }
    });
}

// Initialize form validation
window.onload = validateForm;
