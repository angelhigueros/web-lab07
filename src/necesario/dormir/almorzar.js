
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel'

const p = document.getElementById("p1");
p1.innerHTML = `Que buena es la comida que sirven en este restaurante. Bueno ahora que
ya tengo energía puedo ir a otro lugar. Antes de salir de mi casa
empaque un folleto con las acitividades.<br><br>
Perdi mi mochila pero al menos no tenia nada importante en ella. Las
cosas importantes las tiene mi familia así que esta bien<br><br>
Bueno a continuar con mi viaje, siiii`;


import image from '../../img/hotel.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './final.html'
a1.innerHTML = 'Continuar con el viaje'
li1.appendChild(a1)
list.appendChild(li1)

