
const navbutton = document.querySelector('#ham-button');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    const isOpen = navbutton.classList.toggle('show');
    navbutton.setAttribute('aria-expanded', isOpen);
    navlinks.classList.toggle('show');
});

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
