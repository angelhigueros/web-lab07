"use strict";

var _hotel = _interopRequireDefault(require("../../img/hotel.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 25%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel';
const p = document.getElementById("p1");
p1.innerHTML = "Por fin llegamos, aunque me siento muy cansado, debi dormirme en el\ncamino, fueron m\xE1s de 5 horas de camino. Adem\xE1s ayer me desvele todo la\nnoche, estoy que me muero. Pero bueno ya no puedo hacer nada m\xE1s, pondre\nmi mejor cara y disfrutare del viaje<br><br>\nHoy puedo... ir a ... tres lugares<br><br>\nEstoy algo cansado, pero no importa, a que lugar ir\xE9 primero...";
const img = document.getElementById("img");
img.src = _hotel.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = './cansado.html';
a1.innerHTML = 'Ir a la playa';
li1.appendChild(a1);
list.appendChild(li1);
const li2 = document.createElement('li');
li2.className = 'list-group-item';
const a2 = document.createElement('a');
a2.href = './cansado.html';
a2.innerHTML = 'Ir a la picina del hotel';
li2.appendChild(a2);
list.appendChild(li2);
const li3 = document.createElement('li');
li3.className = 'list-group-item';
const a3 = document.createElement('a');
a3.href = './cansado.html';
a3.innerHTML = 'Nadar en el rio';
li3.appendChild(a3);
list.appendChild(li3);