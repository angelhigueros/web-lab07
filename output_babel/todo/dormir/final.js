"use strict";

var _aburrido = _interopRequireDefault(require("../../img/aburrido.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 100%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Camino de regreso';
const img = document.getElementById("img");
img.src = _aburrido.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = '../../../index.html';
a1.innerHTML = 'Volver a comenzar';
li1.appendChild(a1);
list.appendChild(li1);