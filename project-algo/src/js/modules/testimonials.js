export const initTestimonials = () => {
  const testimonials = document.querySelectorAll('.testimonial-card');
  let currentTestimonial = 0;

  function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
  }

  setInterval(showNextTestimonial, 5000);
};