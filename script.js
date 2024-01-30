let currentCharacter;

async function loadCharacter(){
    let url = 'https://hp-api.onrender.com/api/characters';
    let response = await fetch(url);
    let allCharacters = await response.json();
    currentCharacter = allCharacters[0];
    console.log(currentCharacter);
    renderCharacterInfo();
}

function renderCharacterInfo(){
    document.getElementById('name').innerHTML = currentCharacter['name'];
    document.getElementById('img').setAttribute('href', currentCharacter['image']);

}  

