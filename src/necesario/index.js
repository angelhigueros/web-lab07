
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 10%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'En el carro'

const p = document.getElementById("p1");
p1.innerHTML = `Sera por un par de días y estoy seguro que nos tomaremos muchas fotos
con mi familia así que no creo que haya problema si empaco mi mejor
ropa, zapatos, etc. <br><br>
Ya es hora de partir. El viaje es algo largo, entonces...`;

import image from '../img/carro.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = 'despierto/index.html'
a1.innerHTML = 'Me quedare despierto todo el camino'
li1.appendChild(a1)
list.appendChild(li1)
 
const li2 = document.createElement('li')
li2.className = 'list-group-item'
const a2 = document.createElement('a')
a2.href = 'dormir/index.html'
a2.innerHTML = 'Me dormire todo el camino'
li2.appendChild(a2)
list.appendChild(li2)


