// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 50, // Offset for header
      behavior: 'smooth',
    });
  });
});

// Example Button Click Alert (on banner button)
const bannerButton = document.querySelector('.banner button');

bannerButton.addEventListener('click', () => {
  alert('Welcome to our website!');
});
