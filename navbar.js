document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.innerHTML = `
        <ul>
            <li> <a href="index.html">home</a> </li>
            <li> <a href="projects.html">projecs</a> </li>
            <li> <a href="contact.html">contect</a> </li>
        </ul>
      `;
    }
  });
  