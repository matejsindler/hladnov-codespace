let had = [document.querySelector(".had")]

const noveTlacitko = document.getElementById("tlacitko")
noveTlacitko.addEventListener("click", zmenaMrizsky)

function zmenaMrizsky() {
  const mrizka = document.getElementById("plocha");

  for (const element of mrizka.querySelectorAll("br, .pole")) {
    element.remove()
  }
  const puvodniMezera = document.createElement("br");
  mrizka.append(puvodniMezera)

  const poleVelikost = document.getElementById("velikost");
  const velikost = parseInt(poleVelikost.value);
  console.log("Měním mřížku na velikost " + velikost)
  for (let noveX = 1; noveX <= velikost; noveX++) {
    for (let noveY = 1; noveY <= velikost; noveY++) {
      const novyDiv = document.createElement("div");
      novyDiv.classList.add("pole");
      novyDiv.id = noveX + ":" + noveY
      mrizka.append(novyDiv);
      console.log("Přidám div s id" + novyDiv.id)
      mrizka.append(" ");
    }
    const noveBr = document.createElement("br");
    mrizka.append(noveBr);
  }
}



function pohniHadem(dolu, doprava) {
  const hadiHlava = had[0]
  console.log("Had je na " + hadiHlava.id);

  let radek = parseInt(hadiHlava.id.split(":")[0]);
  let sloupec = parseInt(hadiHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cilovePolicko = document.getElementById(idCil);

  had.unshift(cilovePolicko);

  cilovePolicko.classList.add("had");

  if (cilovePolicko.classList.contains("zradlo")) {
    console.log("Had bude žrát");
    cilovePolicko.classList.remove("zradlo");
  } else {
    const polickoKterePrestavaBytHadem = had.pop();
    polickoKterePrestavaBytHadem.classList.remove("had");
  }
}

let posledniKlavesa = 0;
function autopohyb(udalost) {
  const jeToPrvniKlavesa = (posledniKlavesa === 0);
  posledniKlavesa = udalost.which;
  if (jeToPrvniKlavesa) {
    pohyb()
    setInterval(pohyb, 300);
  }
  console.log("Posledni klavesa je " + posledniKlavesa);
}

function pohyb() {
  if (posledniKlavesa === 37) {
    console.log("Hade, jdi doleva pls");
    pohniHadem(0, -1);
  }
  if (posledniKlavesa === 38) {
    console.log("Hade, jdi nahoru pls");
    pohniHadem(-1, 0);
  }
  if (posledniKlavesa === 39) {
    console.log("Hade, jdi doprava pls");
    pohniHadem(0, 1);
  }
  if (posledniKlavesa === 40) {
    console.log("Hade, jdi dolů pls");
    pohniHadem(1, 0);
  }
}






document.addEventListener("keydown", autopohyb);
