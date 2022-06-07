const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
const preguntas = [


  
  {
    pregunta: "The Barclaycard Business contactless payment system is already being used in London.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "Contactless payment system carry a greater fraud risk that online shopping.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "It seems likely that mobiles will be increasingly used for making payments.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "Major retailers are worried about the competition from mobile-optimised sites.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "green";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "you have succeeded " +
    respuestasCorrectas +
    " questions out of a total of " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
