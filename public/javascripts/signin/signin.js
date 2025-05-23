document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('#password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle eye icon
            const eyeIcon = this.querySelector('i');
            eyeIcon.classList.toggle('fa-eye');
            eyeIcon.classList.toggle('fa-eye-slash');
        });
    }
    
    // Form submission with smooth transition
    const loginForm = document.querySelector('form');
    const container = document.querySelector('.container');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const remember = document.querySelector('#remember').checked;
            
            // Validate form
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Login attempt:', { email, password, remember });
            
            // Add transition effect
            document.body.style.overflow = 'hidden'; // Prevent scrolling during animation
            
            // Create overlay for transition effect
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '0';
            overlay.style.backgroundColor = '#9333ea';
            overlay.style.zIndex = '9999';
            overlay.style.transition = 'height 0.8s ease-in-out';
            document.body.appendChild(overlay);
            
            // Trigger animation
            setTimeout(() => {
                overlay.style.height = '100%';
                
                // After animation completes, redirect to homepage
                setTimeout(() => {
                    window.location.href = 'homepage.html'; // Redirect to homepage
                }, 800);
            }, 100);
        });
    }
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('facebook') ? 'Facebook' : 
                            this.classList.contains('google') ? 'Google' : 'Apple';
            
            // Here you would typically redirect to OAuth provider
            console.log(`Login with ${provider}`);
            
            // Add transition effect for social login
            document.body.style.overflow = 'hidden';
            
            // Create overlay for transition effect
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '0';
            overlay.style.backgroundColor = '#9333ea';
            overlay.style.zIndex = '9999';
            overlay.style.transition = 'height 0.8s ease-in-out';
            document.body.appendChild(overlay);
            
            // Trigger animation
            setTimeout(() => {
                overlay.style.height = '100%';
                
                // After animation completes, redirect to homepage
                setTimeout(() => {
                    window.location.href = 'homepage.html'; // Redirect to homepage
                }, 800);
            }, 100);
        });
    });
});