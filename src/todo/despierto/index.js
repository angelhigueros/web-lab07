
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 25%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel'

const p = document.getElementById("p1");
p1.innerHTML = `Por fin llegamos, aunque me siento muy cansado, debi dormirme en el
camino, fueron más de 5 horas de camino. Además ayer me desvele todo la
noche, estoy que me muero. Pero bueno ya no puedo hacer nada más, pondre
mi mejor cara y disfrutare del viaje<br><br>
Hoy puedo... ir a ... tres lugares<br><br>
Estoy algo cansado, pero no importa, a que lugar iré primero...`;

import image from '../../img/hotel.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './cansado.html'
a1.innerHTML = 'Ir a la playa'
li1.appendChild(a1)
list.appendChild(li1)

const li2 = document.createElement('li')
li2.className = 'list-group-item'
const a2 = document.createElement('a')
a2.href = './cansado.html'
a2.innerHTML = 'Ir a la picina del hotel'
li2.appendChild(a2)
list.appendChild(li2)

const li3 = document.createElement('li')
li3.className = 'list-group-item'
const a3 = document.createElement('a')
a3.href = './cansado.html'
a3.innerHTML = 'Nadar en el rio'
li3.appendChild(a3)
list.appendChild(li3)

