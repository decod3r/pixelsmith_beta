document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const body = document.body;

  // Set theme from localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.add("fade-transition");
    setTimeout(() => {
      body.classList.toggle("dark");
      localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
      setTimeout(() => body.classList.remove("fade-transition"), 600);
    }, 10);
  });

  // Reveal animation on scroll
  const images = document.querySelectorAll(".gallery img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => observer.observe(img));
});
