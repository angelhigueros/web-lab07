const progressBar = document.getElementById("progress-bar");
progressBar.style = "width: 40%";

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = "Nadando";

const p = document.getElementById("p1");
p1.innerHTML = `Es hermoso aquí, que bueno que elegí hacer esto primero. Nadare lo más
lejor que pueda, romere mi anterior record.<br><br>
Toda via tengo más energía, deberia hacer otra vuelta más<br><br>
Me gustaria hacer otra pero tambien hay otras cosas que me gustaria
hacer, por ahora regresare al hotel a descansar un poco y despues vere
que puedo hacer`;

import image from "../../img/nadar.jpg"

const img = document.getElementById("img");
img.src = image

const list = document.getElementById("list");

const li1 = document.createElement("li");
li1.className = "list-group-item";
const a1 = document.createElement("a");
a1.href = "./hotel.html";
a1.innerHTML = "Continuar";
li1.appendChild(a1);
list.appendChild(li1);

