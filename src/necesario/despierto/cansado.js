
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 50%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'En el carro'

const p = document.getElementById("p1");
p1.innerHTML = ` Es hermoso aquí, que bueno que elegí hacer esto primero. Nadare lo más
lejor que pueda, romere mi anterior record.<br><br>
Si lo logre ... ahora ... debo ... volver <br><br>
Debo... vol ... ver
`
import image from '../../img/nadar.jpg'
const img = document.getElementById("img");
img.src = image


const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = 'final.html'
a1.innerHTML = 'Continuar'
li1.appendChild(a1)
list.appendChild(li1)
 