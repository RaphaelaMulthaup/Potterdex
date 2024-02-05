function renderCharacterInfo(i) {
  currentCharacter = allCharacters[i];
  document.getElementById('card').style = ('display: block')
    nameAliveHouse();
    image();
    wizardWitchMuggle();
    hogwartsPatronus();
    wand();
    generalInformation();
    document.getElementById('body').onclick = closeCard();
  }

  function nameAliveHouse() {
    // Name
    document.getElementById("name").innerHTML = currentCharacter["name"];
    // tot?
    if (currentCharacter["alive"] == false) {
      document.getElementById("name").innerHTML += " &dagger;";
    }
    // Hogwartshaus mit Farbe
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
      document.getElementById("wizOrMug").innerHTML = `${currentCharacter["species"]}`;
    }
  }
  
  // Abstammung
  function ancestry() {
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
  
  function hogwartsPatronus(){
      // Hogwarts SchülerIn oder Mitarbeitender
    if (currentCharacter["hogwartsStudent"]) {
      document.getElementById("hogwartsStudent").innerHTML = "hogwarts student";
    }
    if (currentCharacter["hogwartsStaff"]) {
      document.getElementById("hogwartsStaff").innerHTML = "hogwarts staff";
    }
    // Patronus
    if (currentCharacter["patronus"] !== "") {
      document.getElementById("tableWizard").innerHTML += /*html*/ `
          <tr>
              <td>patronus</td>
              <td>${currentCharacter["patronus"]}</td>
          </tr>
          `;
    }
  }
  
  function wand(){
        //Zauberstab
    if (currentCharacter["wand"]["wood"] !== "") {
      document.getElementById("tableWand").innerHTML += /*html*/ `
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
  
  function generalInformation(){
        // allgemeine Informationen
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

  function closeCard(){
    document.getElementById('card').style = ('display: none');
    document.getElementById('body').removeAttribute('onclick');
  }

  function doNotClose(event){
    event.stopPropagation();
  }