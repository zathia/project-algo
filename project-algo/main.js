// Navbar Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

// Change testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);

// Code Animation
const codeElement = document.querySelector('.code-animation code');
const originalCode = codeElement.textContent;
let currentIndex = 0;

function typeCode() {
    if (currentIndex < originalCode.length) {
        codeElement.textContent = originalCode.slice(0, currentIndex + 1);
        currentIndex++;
        setTimeout(typeCode, 50);
    } else {
        setTimeout(() => {
            currentIndex = 0;
            codeElement.textContent = '';
            typeCode();
        }, 3000);
    }
}

// Start the typing animation
typeCode();

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});