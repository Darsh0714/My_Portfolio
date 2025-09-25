document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close the menu on mobile after clicking a link
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });
  });

  // EmailJS form submission
  emailjs.init('AwBS3ECE3m6BN2Zgp');

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs.sendForm('service_5gwzvui', 'template_6kwjnqv', this)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          this.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Failed to send message: ' + error.text);
        });
    });
  }
});
