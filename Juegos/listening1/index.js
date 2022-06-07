conceptos = baseDeDatos.map((x) => x.concepto);
descripciones = baseDeDatos.map((x) => x.descripción);

for (let i = 0; i < 4; i++) {
  descripciones.sort(() => Math.random() - 0.5);
}

contenedor_de_tablero = document.getElementById("contenedor-de-tablero");

generarTableroDeJuego();

function generarTableroDeJuego() {
  let html = `
  <div style="display:flex;justify-content: space-around;align-items:center">
     <table class="table table-light table-striped" style="width:330px">
          <tbody>
     `;
  let i = 1;
  for (const concepto of conceptos) {
    html += `
          <tr>
               <td style="border: 1px solid white;">
                    ${i++}
               </td>
               <td style="border: 1px solid white;width:270px">
                    ${concepto}
               </td>
          </tr>
          `;
  }
  html += `
          </tbody>
     </table>
     `;

  html += `
     <table class="table table-light table-striped">
          <tbody>
     `;
  i = 0;
  for (const descripción of descripciones) {
    html += `
          <tr>
               <td style="border: 1px solid  white ">
                    <input type="number" id="input-${i}" min="1" max="${conceptos.length}">
               </td>
               <td style="border: 1px solid white" id="descripcion-${i}">
                    ${descripción}
               </td>
          </tr>
          `;
    i++;
  }
  html += `
               </tbody>
          </table>
     </div>
     `;
  contenedor_de_tablero.innerHTML = html;
}

function verificarInput(index) {
  let input = document.getElementById("input-" + index);
  let valor = input.value;
  let descripcion = document.getElementById("descripcion-" + index).innerText;
  let i = Number(valor) - 1;
  if (!valor) {
    input.style.background = "white";
    return false;
  }
  if (baseDeDatos[i].descripción == descripcion) {
    input.style.background = "green";
    return true;
  } else {
    input.style.background = "Red";
    return false;
  }
}

function verificarRespuestas() {
  let contador = 0;
  for (let i = 0; i < baseDeDatos.length; i++) {
    contador += verificarInput(i) ? 1 : 0;
  }
  let porcentaje = ((100 * contador) / baseDeDatos.length).toFixed(2)+ "%";
  document.getElementById("calificacion").innerHTML = porcentaje;
  document.getElementById("barra-acertada").style.width = porcentaje;
}