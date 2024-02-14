let currentCharacter;
let allCharacters;
let nextNumberOfArray = 0;


async function loadCharacter() {
  // Daten von API abrufen/als JSON/Charakter auswählen
  let url = "https://hp-api.onrender.com/api/characters";
  let response = await fetch(url);
  allCharacters = await response.json();
  renderCollection();
}
// alle Karten in der Übersicht anzeigen
function renderCollection() {
  for (let i = nextNumberOfArray; i < nextNumberOfArray + 20; i++) {
    document.getElementById("main").innerHTML += miniCardHtml(i);
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
      }
    } else {
      document.getElementById(`miniCard${i}`).style.backgroundColor = "#6B63B5";
    }
    if (allCharacters[i]["image"] !== "") {
      document.getElementById(`miniCard${i}`).innerHTML += imgMiniCardHtml(i);
    }

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
  nextNumberOfArray = nextNumberOfArray + 20;
}

function miniCardHtml(i) {
  return /*html*/ `
        <div id="miniCard${i}" class="miniCard" onclick="renderCharacterInfo(${i}), doNotClose(event)" onmouseover="hover(${i})" onmouseout="hoverUndone(${i})">
            <h1 id="h1Minicard${i}" class="h1Minicard">${allCharacters[i]["name"]}</h1>
        </div>
    `;
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

function hover(i) {
  hovercolor(i);
  let svg = document.getElementById(`svg${i}`);
  let img = svg.querySelector("image");
  svg.setAttribute("width", 180);
  svg.setAttribute("height", 180);
  img.setAttribute("width", 180);
  document
    .getElementById(`polygon${i}`)
    .setAttribute("points", "90,0 180,76 144,180 36,180 0,76");
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
  let img = svg.querySelector("image");
  svg.setAttribute("width", 160);
  svg.setAttribute("height", 160);
  img.setAttribute("width", 160);
  document
    .getElementById(`polygon${i}`)
    .setAttribute("points", "80,0 160,68 128,160 32,160 0,68");
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
