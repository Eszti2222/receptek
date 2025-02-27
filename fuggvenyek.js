/*let artElem = document.getElementById("art");
let txt = "";
for (let index = 0; index < tojasLista.length; index++) {
  txt += `<div class="tojas">
                    <h2>${tojasLista[index].nev}</h2>
                    <p>${tojasLista[index].szin}</p>
                    <p>${tojasLista[index].meret}</p>
                    <img src="${tojasLista[index].kepEleresiUt}">
                </div>`;
}
console.log(txt);
artElem.innerHTML = txt */

export function receptekMegjelenit(lista) {
  let elem = document.querySelector("article");
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += `<section>
                <h5>${lista[index].nev}</h5>
                <p>${lista[index].nehezseg}</p>
                <p>${lista[index].ido}</p>
                <p>${lista[index].cal}</p>
                <img src="${lista[index].kepEleresiUt}">
                <button class="gomb" id="${index}" >Nyomj meg!</button>
            </section>`;
  }
  elem.innerHTML = txt;
  gombNyomKiir(lista);
}
function gombNyomKiir(lista) {
  /* megfogjuk a gombokat
    rátesszük az eseménykezelét - ciklussal*/
  let gombok = document.getElementsByClassName("gomb");
  console.log(gombok);
  for (let index = 0; index < gombok.length; index++) {
    gombok[index].addEventListener("click",   function(event) {
        console.log(lista[event.target.id]);
      }
    );
  }
}

