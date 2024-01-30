let currentCharacter;

async function loadCharacter(){
    let url = 'https://hp-api.onrender.com/api/characters';
    let response = await fetch(url);
    let allCharacters = await response.json();
    console.log( allCharacters);
    currentCharacter = allCharacters[34];
    console.log(currentCharacter);
    renderCharacterInfo();
}

function renderCharacterInfo(){
    document.getElementById('name').innerHTML = currentCharacter['name'];

    if (currentCharacter['house'] !== '') {
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

    if (currentCharacter['image'] !== '') {
            document.getElementById('img').setAttribute('href', currentCharacter['image']);
    }

    if ((currentCharacter['wizard']==true)&&(currentCharacter['gender']=='male')) {
        document.getElementById('wizOrMug').innerHTML = 'Zauberer';
    } else if ((currentCharacter['wizard']==true)&&(currentCharacter['gender']=='female')) {
        document.getElementById('wizOrMug').innerHTML = 'Hexe';
    } else if ((currentCharacter['ancestry']=='muggle')) {
        document.getElementById('wizOrMug').innerHTML = 'Muggel';
    }
}  

