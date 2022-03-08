
const progressBar = document.getElementById("progress-bar");
progressBar.style = 'width: 80%'

const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = 'Escalando'

const p = document.getElementById("p1");
p1.innerHTML = ` Me encanta este lugar, la vista es asombroso desde aquí arriba. Tratare
de ir un poco más alto para tomar mejores fotos.<br><br>
Esto esta siendo más dificil de lo que pense... me siento algo mareaado<br><br>
Ya casi ... un poco más ... solo un pas... aaahh`;

import image from '../../img/mountain.jpg'
const img = document.getElementById("img");
img.src = image



const list = document.getElementById("list");

const li1 = document.createElement('li')
li1.className = 'list-group-item'
const a1 = document.createElement('a')
a1.href = './final_alt.html'
a1.innerHTML = 'Continuar'
li1.appendChild(a1)
list.appendChild(li1)
 


