"use strict";

var _carro = _interopRequireDefault(require("../img/carro.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 10%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'En el carro';
const p = document.getElementById("p1");
p1.innerHTML = "Sera por un par de d\xEDas y estoy seguro que nos tomaremos muchas fotos\ncon mi familia as\xED que no creo que haya problema si empaco mi mejor\nropa, zapatos, etc. <br><br>\nYa es hora de partir. El viaje es algo largo, entonces...";
const img = document.getElementById("img");
img.src = _carro.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = 'despierto/index.html';
a1.innerHTML = 'Me quedare despierto todo el camino';
li1.appendChild(a1);
list.appendChild(li1);
const li2 = document.createElement('li');
li2.className = 'list-group-item';
const a2 = document.createElement('a');
a2.href = 'dormir/index.html';
a2.innerHTML = 'Me dormire todo el camino';
li2.appendChild(a2);
list.appendChild(li2);