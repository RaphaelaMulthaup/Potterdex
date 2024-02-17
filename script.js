let currentCharacter;
let allCharacters;
let numberDisplayedResults = 20;
let lengthWand;
let previousSearchLength = 0; // Variable zur Speicherung der vorherigen Länge von searchTerm (des Suchbegriffs)


async function loadCharacter() {
  // Daten von API abrufen/als JSON/Charakter auswählen
  let url = "https://hp-api.onrender.com/api/characters";
  let response = await fetch(url);
  allCharacters = await response.json();
  renderCollection();
}
// alle Karten in der Übersicht anzeigen
function renderCollection() {
  document.getElementById("main").innerHTML = "";
  for (let i = 0; i < numberDisplayedResults; i++) {
    document.getElementById("main").innerHTML += miniCardHtml(i);
    if (allCharacters[i]["alive"] == false) {
      document.getElementById(`h1Minicard${i}`).innerHTML += " &dagger;";
    }
    houseColorMiniCard(i);
    if (allCharacters[i]["image"] !== "") {
      document.getElementById(`miniCard${i}`).innerHTML += imgMiniCardHtml(i);
    }
    wizardWitchMuggleSpeciesMiniCard(i);
  }
}

function miniCardHtml(i) {
  return /*html*/ `
        <div id="miniCard${i}" class="miniCard" onclick="renderCharacterInfo(${i}), doNotClose(event)" onmouseover="hover(${i})" onmouseout="hoverUndone(${i})">
            <h1 id="h1Minicard${i}" class="h1Minicard">${allCharacters[i]["name"]}</h1>
        </div>
    `;
}
// Hogwartshaus mit Farbe
function houseColorMiniCard(i) {
  if (allCharacters[i]["house"] !== "") {
    if (allCharacters[i]["house"] == "Gryffindor") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#A24335";
    } else if (allCharacters[i]["house"] == "Slytherin") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#1D5B54";
    } else if (allCharacters[i]["house"] == "Ravenclaw") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#1C477B";
    } else if (allCharacters[i]["house"] == "Hufflepuff") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#C99C5A";
    }
  } else {
    document.getElementById(`miniCard${i}`).style.backgroundColor = "#6B63B5";
  }
}

function imgMiniCardHtml(i) {
  return /*html*/ `
        <svg id="svg${i}" height="160" width="160">
            <defs>
                <pattern
                id="imagePattern${i}"
                x="0"
                y="0"
                patternUnits="objectBoundingBox"
                height="1"
                width="1"
                >
                <image
                    id="img"
                    x="0"
                    y="0"
                    width="160px" 
                    href="${allCharacters[i]["image"]}"
                />
                </pattern>
            </defs>
            <polygon id="polygon${i}"
                points="80,0 160,68 128,160 32,160 0,68" 
                fill="url(#imagePattern${i})"
                stroke="#242633"
                stroke-width="1"
            />
        </svg>
    `;
}

function wizardWitchMuggleSpeciesMiniCard(i) {
  if (
    allCharacters[i]["wizard"] == true &&
    allCharacters[i]["gender"] == "male"
  ) {
    document.getElementById(`miniCard${i}`).innerHTML += /*html*/ `
  <span>wizard</span>
  `;
  } else if (
    allCharacters[i]["wizard"] == true &&
    allCharacters[i]["gender"] == "female"
  ) {
    document.getElementById(`miniCard${i}`).innerHTML += /*html*/ `
  <span>witch</span>
  `;
  } else if (allCharacters[i]["ancestry"] == "muggle") {
    document.getElementById(`miniCard${i}`).innerHTML += /*html*/ `
  <span>muggle</span>
  `;
  } else if (allCharacters[i]["species"] !== "humen") {
    document.getElementById(`miniCard${i}`).innerHTML += /*html*/ `
  <span>${allCharacters[i]["species"]}</span>
  `;
  }
}

function hover(i) {
  hovercolor(i);
  let svg = document.getElementById(`svg${i}`);
  if (svg) {
    let img = svg.querySelector("image");
    svg.setAttribute("width", 180);
    svg.setAttribute("height", 180);
    img.setAttribute("width", 180);
    document
      .getElementById(`polygon${i}`)
      .setAttribute("points", "90,0 180,76 144,180 36,180 0,76");
  }
}

function hovercolor(i) {
  if (allCharacters[i]["house"] !== "") {
    if (allCharacters[i]["house"] == "Gryffindor") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#c16356";
    } else if (allCharacters[i]["house"] == "Slytherin") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#447671";
    } else if (allCharacters[i]["house"] == "Ravenclaw") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#446287";
    } else if (allCharacters[i]["house"] == "Hufflepuff") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#e3bb7f";
    }
  } else {
    document.getElementById(`miniCard${i}`).style.backgroundColor = "#8079b6";
  }
}

function hoverUndone(i) {
  hoverUndoneColor(i);
  let svg = document.getElementById(`svg${i}`);
  if (svg) {
    let img = svg.querySelector("image");
    svg.setAttribute("width", 160);
    svg.setAttribute("height", 160);
    img.setAttribute("width", 160);
    document
      .getElementById(`polygon${i}`)
      .setAttribute("points", "80,0 160,68 128,160 32,160 0,68");
  }
}

function hoverUndoneColor(i) {
  if (allCharacters[i]["house"] !== "") {
    if (allCharacters[i]["house"] == "Gryffindor") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#A24335";
    } else if (allCharacters[i]["house"] == "Slytherin") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#1D5B54";
    } else if (allCharacters[i]["house"] == "Ravenclaw") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#1C477B";
    } else if (allCharacters[i]["house"] == "Hufflepuff") {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#C99C5A";
    }
  } else {
    document.getElementById(`miniCard${i}`).style.backgroundColor = "#6B63B5";
  }
}

function moreCharacters(){
  numberDisplayedResults = numberDisplayedResults + 20;
  renderCollection();
}


function search() {
  let searchTerm = document.getElementById("search").value;
  if (searchTerm.length > 2) {
    document.getElementById('button').classList.add('d-none');
    searchTerm = searchTerm.toLowerCase();
    document.getElementById("main").innerHTML = "";
    let countResults = 0;
    for (let i = 0; i < allCharacters.length; i++) {
      let characterResult = allCharacters[i]["name"];
      if (countResults < 10) {
         if (characterResult.toLowerCase().includes(searchTerm)) {
        document.getElementById("main").innerHTML += miniCardHtml(i);
        if (allCharacters[i]["alive"] == false) {
          document.getElementById(`h1Minicard${i}`).innerHTML += " &dagger;";
        }
        houseColorMiniCard(i);
        if (allCharacters[i]["image"] !== "") {
          document.getElementById(`miniCard${i}`).innerHTML +=
            imgMiniCardHtml(i);
        }
        wizardWitchMuggleSpeciesMiniCard(i);
        countResults++;
      }
      } else {
        break;
      }
     
    }
  } else {
    // Wenn die aktuelle Länge von searchTerm kleiner als 3 ist und die vorherige Länge größer oder gleich 3 war
    if (previousSearchLength >= 3) {
      renderCollection(); // renderCollection() aufrufen
      document.getElementById('button').classList.remove('d-none');
    }
  }
  previousSearchLength = searchTerm.length; // Speichere die aktuelle Länge von searchTerm für den nächsten Durchlauf
}