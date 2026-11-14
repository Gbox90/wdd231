const url = 'data/members.json';
const cards = document.querySelector('#cards');
    
async function getMemberData() {
    const response = await fetch(url);
    const data  = await response.json();
    console.table(data.members);
    displayMembers(data.members);
    }

    getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');
        const img = document.createElement('img');
        const memberLevel = document.createElement('p')
        const businessType = document.createElement('p');

        //heading is business' name//
        businessName.textContent = `${member.name}`;

        //paragraph section with address, phone, website, membership level and business type//
        address.textContent = `${member.address}`;
        phone.textContent = `phone: ${member.phone}`;
        website.textContent = `${member.website}`;
        memberLevel.textContent = `Member status: ${member.level}`;
        businessType.textContent = `Type of business; ${member.type}`;

        //images display for businesses//
        img.setAttribute('src', member.img);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '250');
        img.setAttribute('height', 'auto');

        //card with business information//
        card.appendChild(businessName);
        card.appendChild(img)
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(memberLevel);
        card.appendChild(businessType);


        cards.appendChild(card);



    }
    )
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");

    cards.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    cards.classList.add("list");
    cards.classList.remove("grid");
}

//navigation menu//

const navbutton = document.querySelector('#ham-menu');
const navlinks = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('show');
    navbutton.setAttribute('aria-expanded', isOpen);
    
});

//footer//

document.querySelector('#currentyear').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modified: ${document.lastModified}`;

