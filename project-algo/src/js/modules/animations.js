export const initScrollAnimations = () => {
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
};

export const initCodeAnimation = () => {
  const codeElement = document.querySelector('.code-animation code');
  if (!codeElement) return;

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

  typeCode();
};