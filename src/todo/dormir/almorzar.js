
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Hotel'

const p = document.getElementById("p1");
p1.innerHTML = `Que buena es la comida que sirven en este restaurante. Bueno ahora que
ya tengo energía puedo ir a otro lugar. Antes de salir de mi casa
empaque un folleto con las acitividades.<br><br>
Mi mochila deberia estar aquí... o aquí... o talvez esta por aquí...<br><br>
No puede ser, perdì mi mochila, hay tenia mis mejores cosas, noooo<br><br>
Ahora estoy triste, ya no se si quiero continuar con el viaje`;

import image from '../../img/hotel.jpg'

const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './final_alt_2.html'
a1.innerHTML = 'Terminar el viaje'
li1.appendChild(a1)
list.appendChild(li1)

const li2 = document.createElement('li')
li2.className = 'list-group-item'
const a2 = document.createElement('a')
a2.href = './final.html'
a2.innerHTML = 'Continuar con el viaje'
li2.appendChild(a2)
list.appendChild(li2)


