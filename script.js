document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Initialize EmailJS (replace with your public key)
emailjs.init('AwBS3ECE3m6BN2Zgp'); // <--- Add your EmailJS public key here

// EmailJS form submission
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm('service_5gwzvui', 'template_6kwjnqv', this)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      this.reset(); // Clear form after sending
    })
    .catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send message: ' + error.text);
    });
});
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("active");
});
