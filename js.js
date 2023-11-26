// mostrando Tempestade
// Recupera o elemento do botão e o armazena em uma variável
var btnT = document.getElementById('T');

// Recupera o elemento de destino e o armazena em uma variável
var infoHoroiT = document.getElementById('info-Horoi-T');

// Adiciona um ouvinte de evento de clique ao botão
btnT.addEventListener('click', function() {
  // Alterna a exibição do elemento de destino
  if (infoHoroiT.style.display === 'none') {
    infoHoroiT.style.display = 'block';
  } else {
    infoHoroiT.style.display = 'none';
  }
});


// mostrando Wolverine
// Recupera o elemento do botão e o armazena em uma variável
var btnW = document.getElementById('W');

// Recupera o elemento de destino e o armazena em uma variável
var infoHoroiW = document.getElementById('info-Horoi-W');

// Adiciona um ouvinte de evento de clique ao botão
btnW.addEventListener('click', function() {
  // Alterna a exibição do elemento de destino
  if (infoHoroiW.style.display === 'none') {
    infoHoroiW.style.display = 'block';
  } else {
    infoHoroiW.style.display = 'none';
  }
});

// mostrando Magneto
// Recupera o elemento do botão e o armazena em uma variável
var btnM = document.getElementById('M');

// Recupera o elemento de destino e o armazena em uma variável
var infoHoroiM = document.getElementById('info-Horoi-M');

// Adiciona um ouvinte de evento de clique ao botão
btnM.addEventListener('click', function() {
  // Alterna a exibição do elemento de destino
  if (infoHoroiM.style.display === 'none') {
    infoHoroiM.style.display = 'block';
  } else {
    infoHoroiM.style.display = 'none';
  }
});

// mostrando Xavier
// Recupera o elemento do botão e o armazena em uma variável
var btnX = document.getElementById('X');

// Recupera o elemento de destino e o armazena em uma variável
var infoHoroiX = document.getElementById('info-Horoi-X');

// Adiciona um ouvinte de evento de clique ao botão
btnX.addEventListener('click', function() {
  // Alterna a exibição do elemento de destino
  if (infoHoroiX.style.display === 'none') {
    infoHoroiX.style.display = 'block';
  } else {
    infoHoroiX.style.display = 'none';
  }
});





const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");

inputQuestion.addEventListener("keypress", (e) => {
  if (inputQuestion.value && e.key === "Enter") SendQuestion();
});

const OPENAI_API_KEY = "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";

function SendQuestion() {
  var sQuestion = inputQuestion.value;

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPENAI_API_KEY,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: sQuestion,
      max_tokens: 2048, // tamanho da resposta
      temperature: 0.5, // criatividade na resposta
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (result.value) result.value += "\n";

      if (json.error?.message) {
        result.value += `Error: ${json.error.message}`;
      } else if (json.choices?.[0].text) {
        var text = json.choices[0].text || "Sem resposta";

        result.value += "Chat GPT: " + text;
      }

      result.scrollTop = result.scrollHeight;
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      inputQuestion.value = "";
      inputQuestion.disabled = false;
      inputQuestion.focus();
    });

  if (result.value) result.value += "\n\n\n";

  result.value += `Eu: ${sQuestion}`;
  inputQuestion.value = "Carregando...";
  inputQuestion.disabled = true;

  result.scrollTop = result.scrollHeight;
}

















// const T = document.getElementById('T')
// const W = document.getElementById('W')
// const M = document.getElementById('M')
// const X = document.getElementById('X')

// function mostrar (){
//   if
// }