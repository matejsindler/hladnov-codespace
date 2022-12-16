
let had = [document.querySelector('.had')]

function pohniHadem(dolu, doprava) {
  const hadiHlava = had[0]
  console.log("Had je na " + hadiHlava.id);

  let radek = parseInt(hadiHlava.id.split(":")[0]);
  let sloupec = parseInt(hadiHlava.id.split(":")[1]);
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);

  const cil = document.getElementById(idCil);

  had.unshift(cil)

  cil.classList.add("had");

  if (cil.classList.contains ("zradlo")) {
    console.log("Had bude zrat");
    cil.classList.remove("zradlo");
    const pol1 = Math.floor(Math.random() *5 + 1)
    const pol2 = Math.floor(Math.random() *5 + 1)
    const idzradlo = pol1 + ":" + pol2
    console.log(pol1 + ":" + pol2)

    const zradloid



  }else{
    const polenenihadem = had.pop();
    polenenihadem.classList.remove("had")
  }

  const jidlo = document.getElementById(".zradlo");
  

}

function pohyb(udalost) {
  if (udalost.which === 37) {
    console.log("Hade, jdi doleva pls");
    pohniHadem(0, -1);
  }
  if (udalost.which === 38) {
    console.log("Hade, jdi nahoru pls");
    pohniHadem(-1, 0);
  }
  if (udalost.which === 39) {
    console.log("Hade, jdi doprava pls");
    pohniHadem(0, 1);
  }
  if (udalost.which === 40) {
    console.log("Hade, jdi dolů pls");
    pohniHadem(1, 0);
  }
}



document.addEventListener("keydown", pohyb);
