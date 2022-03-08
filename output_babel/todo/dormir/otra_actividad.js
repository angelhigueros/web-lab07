"use strict";

var _mountain = _interopRequireDefault(require("../../img/mountain.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Nadando';
const p = document.getElementById("p1");
p1.innerHTML = "Me encanta este lugar, la vista es asombroso desde aqu\xED arriba. Tratare\nde ir un poco m\xE1s alto para tomar mejores fotos.<br><br>\nEsto esta siendo m\xE1s dificil de lo que pense... me siento algo mareaado<br><br>\nYa casi ... un poco m\xE1s ... solo un pas... aaahh";
const img = document.getElementById("img");
img.src = _mountain.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = './final_alt.html';
a1.innerHTML = 'Continuar';
li1.appendChild(a1);
list.appendChild(li1);