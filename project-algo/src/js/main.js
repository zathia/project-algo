import { initNavigation } from './modules/navigation.js';
import { initScrollAnimations, initCodeAnimation } from './modules/animations.js';
import { initTestimonials } from './modules/testimonials.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initCodeAnimation();
  initTestimonials();
});