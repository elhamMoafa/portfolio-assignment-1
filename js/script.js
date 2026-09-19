const root = document.documentElement;
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const greeting = document.getElementById('greeting');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Mobile navigation opens and closes without reloading the page.
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

// Save the selected theme so it remains active after refreshing the page.
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;
themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
  themeToggle.textContent = nextTheme === 'dark' ? '☀' : '☾';
});

const hour = new Date().getHours();
greeting.textContent = hour < 12 ? 'Good morning, welcome to my portfolio.' : hour < 18 ? 'Good afternoon, welcome to my portfolio.' : 'Good evening, welcome to my portfolio.';

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    formMessage.textContent = 'Please complete all fields with valid information.';
    formMessage.style.color = '#ffd0c8';
    return;
  }
  formMessage.textContent = 'Thank you! Your message was prepared successfully.';
  formMessage.style.color = '#a9e0c3';
  contactForm.reset();
});
