
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 20%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel'

const p = document.getElementById("p1");
p1.innerHTML = ` Por fin llegamos, que bueno que me dormi en el camino, no me imagino
como me sentiria si me hubiera quedado despierto.<br><br>
Hoy puedo ir a tres lugares, estoy tan emocionado<br><br>
Deberia ir a ...`;

import image from '../../img/hotel.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './nadar.html'
a1.innerHTML = 'Ir a la playa'
li1.appendChild(a1)
list.appendChild(li1)
 
const li2 = document.createElement('li')
li2.className = 'list-group-item'
const a2 = document.createElement('a')
a2.href = './nadar.html'
a2.innerHTML = 'Ir a la picina del hotel'
li2.appendChild(a2)
list.appendChild(li2)

const li3 = document.createElement('li')
li3.className = 'list-group-item'
const a3 = document.createElement('a')
a3.href = './nadar.html'
a3.innerHTML = 'Nadar en el rio'
li3.appendChild(a3)
list.appendChild(li3)


