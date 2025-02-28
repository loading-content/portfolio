document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.innerHTML = `
        <link href="navbar.css" rel="stylesheet" type="text/css"/>
        <ul>
            <li> <a href="index.html">home</a> </li>
            <li> <a href="projects.html">projecs</a> </li>
            <li> <a href="aboutme.html">about moi</a> </li>
            <li> <a href="contact.html">contect</a> </li>
        </ul>
      `;
    }
  });
  