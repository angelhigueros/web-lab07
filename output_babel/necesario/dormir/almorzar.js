"use strict";

var _hotel = _interopRequireDefault(require("../../img/hotel.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel';
const p = document.getElementById("p1");
p1.innerHTML = "Que buena es la comida que sirven en este restaurante. Bueno ahora que\nya tengo energ\xEDa puedo ir a otro lugar. Antes de salir de mi casa\nempaque un folleto con las acitividades.<br><br>\nPerdi mi mochila pero al menos no tenia nada importante en ella. Las\ncosas importantes las tiene mi familia as\xED que esta bien<br><br>\nBueno a continuar con mi viaje, siiii";
const img = document.getElementById("img");
img.src = _hotel.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = './final.html';
a1.innerHTML = 'Continuar con el viaje';
li1.appendChild(a1);
list.appendChild(li1);