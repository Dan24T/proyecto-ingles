const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
const preguntas = [


  {
    pregunta: "1. Most smart phones can use GPS technology.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "2. Antonia could alert people with mobiles that they are near her shop.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "3. Geomarketing can give consumers useful local information.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "4. Antonia is planning to open a chain of pizza restaurants.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "5. A user's location can be calculated to the nearest 60 meters.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "6. Antonia thinks the system would be suitable for her business.",
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
