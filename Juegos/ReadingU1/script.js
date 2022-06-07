const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
const preguntas = [


  
  {
    pregunta: "1. Peter Willson said that most countries are connected uo with undersea cables.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "2. Peter Willson said that many countries have unreliable mobile phone networks.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "3. Peter Willson said that recently bandwidth costs have risen dramatically.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "4. Jenny Lane said that Moore's predictions have been fairly accurate.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "5. Jenny Lane said that a typical chip can now hold 3 billion transistors.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "6. Jenny Lane siad that  both data storage capacity and power consumption have gone succeed.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "7. Sanjay Ravi said that fewer people are going to computer stores to buy software.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "T",
  },
  {
    pregunta: "8. Sanjay ravi said that SaaS will require ordinary users to have more powerful computers.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
  },
  {
    pregunta: "9. Sanjay ravi said that software development needs the support of a big corporation to succeed.",
    respuestas: {
      T: "",
      F: "",
     
    },
    respuestaCorrecta: "F",
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
