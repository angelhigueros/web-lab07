"use strict";

var _nadar = _interopRequireDefault(require("../../img/nadar.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 50%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Nadando';
const p = document.getElementById("p1");
p1.innerHTML = " Es hermoso aqu\xED, que bueno que eleg\xED hacer esto primero. Nadare lo m\xE1s\nlejor que pueda, romere mi anterior record.<br><br>\nSi lo logre ... ahora ... debo ... volver<br><br>\nDebo... vol ... ver";
const img = document.getElementById("img");
img.src = _nadar.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = './final.html';
a1.innerHTML = 'Continuar';
li1.appendChild(a1);
list.appendChild(li1);