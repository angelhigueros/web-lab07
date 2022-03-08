"use strict";

var _alegre = _interopRequireDefault(require("../../img/alegre.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 100%';
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Felicidades!';
const img = document.getElementById("img");
img.src = _alegre.default;
const list = document.getElementById("list");
const li1 = document.createElement('li');
li1.className = 'list-group-item';
const a1 = document.createElement('a');
a1.href = '../../../index.html';
a1.innerHTML = 'Volver a comenzar';
li1.appendChild(a1);
list.appendChild(li1);