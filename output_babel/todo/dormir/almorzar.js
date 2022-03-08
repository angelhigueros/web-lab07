"use strict";

var _hotel = _interopRequireDefault(require("../../img/hotel.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel';
const p = document.getElementById("p1");
p1.innerHTML = "Que buena es la comida que sirven en este restaurante. Bueno ahora que\nya tengo energ\xEDa puedo ir a otro lugar. Antes de salir de mi casa\nempaque un folleto con las acitividades.<br><br>\nMi mochila deberia estar aqu\xED... o aqu\xED... o talvez esta por aqu\xED...<br><br>\nNo puede ser, perd\xEC mi mochila, hay tenia mis mejores cosas, noooo<br><br>\nAhora estoy triste, ya no se si quiero continuar con el viaje";
const img = document.getElementById("img");
img.src = _hotel.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = './final_alt_2.html';
a1.innerHTML = 'Terminar el viaje';
li1.appendChild(a1);
list.appendChild(li1);
const li2 = document.createElement('li');
li2.className = 'list-group-item';
const a2 = document.createElement('a');
a2.href = './final.html';
a2.innerHTML = 'Continuar con el viaje';
li2.appendChild(a2);
list.appendChild(li2);