document.addEventListener('DOMContentLoaded', function() {
    // Toggle verification box expanded view
    const verificationBox = document.querySelector('.verification-box');
    const verificationExpanded = document.querySelector('.verification-expanded');
    const closeBtn = document.querySelector('.close-btn');
    
   
    
    // Show expanded view when clicking on the verification box
    if (verificationBox) {
        verificationBox.addEventListener('click', function() {
            if (verificationExpanded) {
                verificationExpanded.style.display = 'block';
            }
        });
    }
    
    // Hide expanded view when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            if (verificationExpanded) {
                verificationExpanded.style.display = 'none';
            }
        });
    }
    
    // Navigation active state
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Price calculation (for demonstration)
    function calculateTotal() {
        const baseFare = 15000;
        const verifyFee = 500;
        const discount = 2000;
        const total = baseFare + verifyFee - discount;
        
        // Update DOM elements if they exist
        const totalElement = document.querySelector('.price-row.total span:last-child');
        if (totalElement) {
            totalElement.textContent = `Rs ${total}`;
        }
    }
    
    // Call the function to ensure the total is calculated on page load
    calculateTotal();
});