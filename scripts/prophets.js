const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');
        const portrait = document.createElement('img');

        //populate heading with prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        //populate paragraph with prophet's birth date
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        //paragraph with prophet's birth place
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        //image element
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //append section(card) with prophet's information
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        //add section card to div
        cards.appendChild(card);
    });
}