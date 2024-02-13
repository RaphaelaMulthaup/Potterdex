// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

function renderCharacterInfo(i) {
  currentCharacter = allCharacters[i];
  document.getElementById("card").style = "display: block";
  document.getElementById("changeCard").style = "display: flex";
  document.getElementById("last").addEventListener("click", function () {
    lastCard(i);
  });
  document.getElementById("next").addEventListener("click", function () {
    nextCard(i);
  });
  nameAliveHouse();
  image();
  wizardWitchMuggle();
  hogwartsPatronus();
  wand();
  generalInformation();
  document.getElementById("body").classList.add("grayBody");
  document.getElementById("body").onclick = closeCard;
}

function nameAliveHouse() {
  document.getElementById("cardTop").innerHTML = /*html*/ `
    <h1 id="name"></h1>
    <h2 id="house"></h2>
    `;
  // Name
  document.getElementById("name").innerHTML = currentCharacter["name"];
  // tot?
  if (currentCharacter["alive"] == false) {
    document.getElementById("name").innerHTML += " &dagger;";
  }
  // Hogwartshaus mit Farbe
  document.getElementById("house").innerHTML = "";
  if (currentCharacter["house"] !== "") {
    document.getElementById("house").innerHTML = currentCharacter["house"];
    if (currentCharacter["house"] == "Gryffindor") {
      document.getElementById("cardTop").style.backgroundColor = "#A24335";
    } else if (currentCharacter["house"] == "Slytherin") {
      document.getElementById("cardTop").style.backgroundColor = "#1D5B54";
    } else if (currentCharacter["house"] == "Ravenclaw") {
      document.getElementById("cardTop").style.backgroundColor = "#1C477B";
    } else if (currentCharacter["house"] == "Hufflepuff") {
      document.getElementById("cardTop").style.backgroundColor = "#C99C5A";
    }
  }
}

function image() {
  // Bild

  if (currentCharacter["image"] !== "") {
    // document.getElementById('img').setAttribute('href', currentCharacter['image']);
    document.getElementById("cardTop").innerHTML += /*html*/ `
              <svg class="svgBigCard" height="200" width="200">
              <defs>
                <pattern
                  id="imagePattern"
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
                    width="200px"
                    href="${currentCharacter["image"]}"
                  />
                </pattern>
              </defs>
              <polygon
                points="100,0 200,85 160,200 40,200 0,85"
                fill="url(#imagePattern)"
                stroke="#242633"
                stroke-width="1"
              />
            </svg>
              `;
  }
}

function wizardWitchMuggle() {
  // Zaubere oder Hexe oder Muggel
  if (
    currentCharacter["wizard"] == true &&
    currentCharacter["gender"] == "male"
  ) {
    document.getElementById("wizOrMug").innerHTML = "wizard";
    ancestry();
  } else if (
    currentCharacter["wizard"] == true &&
    currentCharacter["gender"] == "female"
  ) {
    document.getElementById("wizOrMug").innerHTML = "witch";
    ancestry();
  } else if (currentCharacter["ancestry"] == "muggle") {
    document.getElementById("wizOrMug").innerHTML = "muggle";
  } else if (currentCharacter["species"] !== "humen") {
    document.getElementById(
      "wizOrMug"
    ).innerHTML = `${currentCharacter["species"]}`;
  }
}

// Abstammung
function ancestry() {
  document.getElementById("ancestry").innerHTML = "";

  if (
    currentCharacter["ancestry"] == "half-blood" ||
    "muggleborn" ||
    "pure-blood"
  ) {
    document.getElementById(
      "ancestry"
    ).innerHTML = `${currentCharacter["ancestry"]}`;
  }
}

function hogwartsPatronus() {
  // Hogwarts SchülerIn oder Mitarbeitender
  document.getElementById("hogwartsStudentStaff").innerHTML = "";
  if (currentCharacter["hogwartsStudent"]) {
    document.getElementById("hogwartsStudentStaff").innerHTML =
      "hogwarts student";
  }
  if (currentCharacter["hogwartsStaff"]) {
    document.getElementById("hogwartsStudentStaff").innerHTML =
      "hogwarts staff";
  }
  // Patronus
  document.getElementById("tableWizard").innerHTML = "";
  if (currentCharacter["patronus"] !== "") {
    document.getElementById("tableWizard").innerHTML = /*html*/ `
          <tr>
              <td>patronus</td>
              <td>${currentCharacter["patronus"]}</td>
          </tr>
          `;
  }
}

function wand() {
  //Zauberstab
  document.getElementById("tableWand").innerHTML = "";

  if (currentCharacter["wand"]["wood"] !== "") {
    document.getElementById("tableWand").innerHTML = /*html*/ `
          <tr>
              <td style="color:black; font-weight:600">wand</td>
          </tr>
          <tr>
              <td>wood</td>
              <td>${currentCharacter["wand"]["wood"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["wand"]["core"] !== "") {
    document.getElementById("tableWand").innerHTML += /*html*/ `
          <tr>
              <td>core</td>
              <td>${currentCharacter["wand"]["core"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["wand"]["length"] !== null) {
    document.getElementById("tableWand").innerHTML += /*html*/ `
          <tr>
              <td>length</td>
              <td>${currentCharacter["wand"]["length"]} inches</td>
          </tr>
          `;
  }
}

function generalInformation() {
  // allgemeine Informationen
  document.getElementById("generalInformation").innerHTML = "";
  if (currentCharacter["dateOfBirth"] !== null) {
    document.getElementById("generalInformation").innerHTML += /*html*/ `
          <tr>
              <td>date of birth</td>
              <td>${currentCharacter["dateOfBirth"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["hairColour"] !== "") {
    document.getElementById("generalInformation").innerHTML += /*html*/ `
          <tr>
              <td>hair colour</td>
              <td>${currentCharacter["hairColour"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["eyeColour"] !== "") {
    document.getElementById("generalInformation").innerHTML += /*html*/ `
          <tr>
              <td>eye colour</td>
              <td>${currentCharacter["eyeColour"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["gender"] !== "") {
    document.getElementById("generalInformation").innerHTML += /*html*/ `
          <tr>
              <td>gender</td>
              <td>${currentCharacter["gender"]}</td>
          </tr>
          `;
  }
  if (currentCharacter["actor"] !== "") {
    document.getElementById("generalInformation").innerHTML += /*html*/ `
          <tr>
              <td>actor</td>
              <td>${currentCharacter["actor"]}</td>
          </tr>
          `;
  }
}

function lastCard(i) {
  i--;
  if (i == -1) {
    i = allCharacters.length;
    i--;
  }
  renderCharacterInfo(i);
}

function nextCard(i) {
  i++;
  if (i == allCharacters.length) {
    i = 0;
  }
  renderCharacterInfo(i);
}

function closeCard() {
  document.getElementById("card").style = "display: none";
  document.getElementById("changeCard").style = "display: none";
  document.getElementById("body").removeAttribute("onclick");
  document.getElementById("body").classList.remove("grayBody");
}

function doNotClose(event) {
  event.stopPropagation();
}

function changeMenuCardToMagicalInformations(){
  document.getElementById('cardMagicalInformations').classList.remove('d-none');
  document.getElementById('cardGeneralInformations').classList.add('d-none');
  document.getElementById('menuItemMagical').classList.remove('grayMenu');
  document.getElementById('menuItemGeneral').classList.add('grayMenu');
}

function changeMenuCardToGeneralInformations(){
  document.getElementById('cardGeneralInformations').classList.remove('d-none');
  document.getElementById('cardMagicalInformations').classList.add('d-none');
  document.getElementById('menuItemGeneral').classList.remove('grayMenu');
  document.getElementById('menuItemMagical').classList.add('grayMenu');
}

