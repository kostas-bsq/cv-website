document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Client-side form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const messageInput = contactForm.querySelector('#message');

            let isValid = true;

            // Clear previous error messages
            contactForm.querySelectorAll('.error-message').forEach(e => e.remove());
            contactForm.querySelectorAll('.invalid-field').forEach(e => e.classList.remove('invalid-field'));

            if (!nameInput.value.trim()) {
                displayError(nameInput, 'Name is required.');
                isValid = false;
            }

            if (!emailInput.value.trim()) {
                displayError(emailInput, 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                displayError(messageInput, 'Message is required.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                // Track successful form submission
                if (typeof gtag === 'function') {
                    gtag('event', 'form_submit', {
                        'event_category': 'Contact',
                        'event_label': 'Contact Form Submission'
                    });
                }
            }
        });
    }

    function displayError(inputElement, message) {
        inputElement.classList.add('invalid-field');
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '0.9em';
        errorMessage.style.marginTop = '5px';
        errorMessage.textContent = message;
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }

    function isValidEmail(email) {
        // Basic email regex for client-side validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // GA4 Event Tracking
    if (typeof gtag === 'function') {
        // PDF Download Tracking
        document.querySelectorAll('a[download]').forEach(link => {
            link.addEventListener('click', () => {
                gtag('event', 'file_download', {
                    'event_category': 'Download',
                    'event_label': link.href.split('/').pop(), // Get filename
                    'file_extension': 'pdf'
                });
            });
        });

        // External Link Tracking
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', () => {
                gtag('event', 'external_link_click', {
                    'event_category': 'Outbound Link',
                    'event_label': link.href
                });
            });
        });
    }
});