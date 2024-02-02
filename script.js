let currentCharacter;
let allCharacters;

async function loadCharacter() {
  // Daten von API abrufen/als JSON/Charakter auswählen
  let url = "https://hp-api.onrender.com/api/characters";
  let response = await fetch(url);
  allCharacters = await response.json();
  currentCharacter = allCharacters[0];
  renderCollection();
}
// alle Karten in den Übersicht anzeigen
function renderCollection() {
  for (let i = 0; i < allCharacters.length; i++) {
    document.getElementById("body").innerHTML += miniCardHtml(i);
    if (allCharacters[i]["alive"] == false) {
      document.getElementById(`h1Minicard${i}`).innerHTML += " &dagger;";
    }
    // Hogwartshaus mit Farbe
    if (allCharacters[i]["house"] !== "") {
      if (allCharacters[i]["house"] == "Gryffindor") {
        document.getElementById(`miniCard${i}`).style.backgroundColor =
          "#A24335";
      } else if (allCharacters[i]["house"] == "Slytherin") {
        document.getElementById(`miniCard${i}`).style.backgroundColor =
          "#1D5B54";
      } else if (allCharacters[i]["house"] == "Ravenclaw") {
        document.getElementById(`miniCard${i}`).style.backgroundColor =
          "#1C477B";
      } else if (allCharacters[i]["house"] == "Hufflepuff") {
        document.getElementById(`miniCard${i}`).style.backgroundColor =
          "#C99C5A";
      } else {
        document.getElementById(`miniCard${i}`).style.backgroundColor =
          "#6B63B5";
      }
    }
  }
}

function miniCardHtml(i) {
  return /*html*/ `
        <div id="miniCard${i}" class="miniCard">
            <h1 id="h1Minicard${i}">${allCharacters[i]["name"]}</h1>
            <svg height="160" width="160">
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
                <polygon
                    points="80,0 160,68 128,160 32,160 0,68" 
                    fill="url(#imagePattern${i})"
                    stroke="#242633"
                    stroke-width="1"
                />
            </svg>
        </div>
    `;
}
