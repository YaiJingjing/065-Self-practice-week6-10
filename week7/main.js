//1. append <p> under <div id="demo">
const pElement = document.createElement('p')
document.getElementById('demo').appendChild(pElement)
//1.5 add format='italic' attribute to <p>
pElement.setAttribute("format", "italic")
//2.try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
const t1 = document.createElement('i')
//2.2 add <i>Sample Italic Text</i> with innerText
const t2 = document.createElement('i')
//2.3 add <i>Sample Italic Text</i> with textContent
const t3 = document.createElement('i')
 
t1.innerHTML='Sameple Italic text '
t2.innerText='Sameple Italic text '
t3.textContent='Sameple Italic text'
 
pElement.appendChild(t1)
pElement.appendChild(t2)
pElement.appendChild(t3)