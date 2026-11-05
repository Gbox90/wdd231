const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});


const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");

yearElement.textContent = currentYear;


const lastModified = document.getElementById("lastModified");

lastModified.textContent =
    "Last Modification: " + document.lastModified;