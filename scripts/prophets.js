const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        
        const card = document.createElement('section');
        const h2 = document.createElement('fullName');
        const img = document.createElement('portrait');

        //populate heading with prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        //image element
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
        portrait.setAttribute('loading');
        portrait.setAttribute('width');
        portrait.setAttribute('height');

        //append section(card) with h2 and img
        card.appendChild(fullName);
        card.appendChild(portrait);

        //add section card to div
        cards.appendChild(card);
    });
}