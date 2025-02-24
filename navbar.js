document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.innerHTML = `
        <a href="index.html">home</a>
        <a href="projects.html">projects</a>
        <a href="contact.html">contact</a>
      `;
    }
  });
  