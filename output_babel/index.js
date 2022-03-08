"use strict";

var _casa = _interopRequireDefault(require("../src/img/casa.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 5%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hogar';
const p = document.getElementById("p1");
p1.innerHTML = "Normalmente cuando viajamos con mi familia planificamos todo unas\nsemanas antes, pero este viaje ser\xE1n m\xE1s espontaneo. Ayer mi padre al\nregresar de trabajar nos dijo que empacaramos lo necesario para salir un\npar de d\xEDas de vacaciones. <br><br>\nBueno es hora de empezar con la aventura, el destino sera Izabal por 3\nd\xEDas, deberia...";
const img = document.getElementById("img");
img.src = _casa.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = 'necesario/index.html';
a1.innerHTML = 'Empacar lo necesario';
li1.appendChild(a1);
list.appendChild(li1);
const li2 = document.createElement('li');
li2.className = 'list-group-item';
const a2 = document.createElement('a');
a2.href = 'todo/index.html';
a2.innerHTML = 'Empacar mis mejores cosas';
li2.appendChild(a2);
list.appendChild(li2);