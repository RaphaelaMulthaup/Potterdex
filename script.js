let currentCharacter;

async function loadCharacter(){
    let url = 'https://hp-api.onrender.com/api/characters';
    let response = await fetch(url);
    let allCharacters = await response.json();
    console.log( allCharacters);
    currentCharacter = allCharacters[0];
    console.log(currentCharacter);
    renderCharacterInfo();
}

function renderCharacterInfo(){
    document.getElementById('name').innerHTML = currentCharacter['name'];
    document.getElementById('img').setAttribute('href', currentCharacter['image']);
    if (currentCharacter['house'] != '') {
            document.getElementById('house').innerHTML = currentCharacter['house'];
            if (currentCharacter['house'] == 'Gryffindor') {
                document.getElementById('cardTop').style.backgroundColor = '#A24335';
            } else if (currentCharacter['house'] == 'Slytherin') {
                document.getElementById('cardTop').style.backgroundColor = '#1D5B54';
            } else if (currentCharacter['house'] == 'Ravenclaw') {
                document.getElementById('cardTop').style.backgroundColor = '#1C477B';
            } else if (currentCharacter['house'] == 'Hufflepuff') {
                document.getElementById('cardTop').style.backgroundColor = '#C99C5A';
            }

    }

}  

