document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.innerHTML = `
        <link href="css/navbar.css" rel="stylesheet" type="text/css"/>
        <ul>
            <li> <a href="index.html">home</a> </li>
            <li> <a href="projects.html">projects</a> </li>
            <li> <a href="aboutme.html">about me</a> </li>
            <li> <a href="contact.html">contact</a> </li>
        </ul>
      `;
    }
  });
  