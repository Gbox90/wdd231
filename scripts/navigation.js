const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    const isOpen =navButton.classicList.toggle('show');
    navbutton.setAttribute('aria-expanded', isOpen);
    navBar.classList.toggle('show');
});

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
    
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById("currentyear");

yearElement.textContent = currentYear;


const lastModified = document.getElementById("lastModified");

lastModified.textContent =
    "Last Modification: " + document.lastModified;