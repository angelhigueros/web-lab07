
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 60%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel'

const p = document.getElementById("p1");
p1.innerHTML = `La pase muy bien a donde fui, tome buenas fotos de paisaje y me diverti
mucho.<br><br>
Noy hay tiempo que perder, estoy pensando en no almorzar y hacer otra
actividad pero no estoy seguro<br><br>
Deberia ir a ...`;


import image from '../../img/hotel.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './otra_actividad.html'
a1.innerHTML = 'Ir a otra actividad'
li1.appendChild(a1)
list.appendChild(li1)
 
const li2 = document.createElement('li')
li2.className = 'list-group-item'
const a2 = document.createElement('a')
a2.href = './almorzar.html'
a2.innerHTML = 'Ir a almorzar'
li2.appendChild(a2)
list.appendChild(li2)



