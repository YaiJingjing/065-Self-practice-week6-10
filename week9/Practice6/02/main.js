const inputEle = document.getElementById('keyInput')
const keyLog = document.getElementById('keyLog')
 
inputEle.addEventListener('keydown', (event) =>{
    const p = document.createElement('p')
    if(event.key === 'Enter'){
        p.textContent  = "You pressed: Enter "
        p.style.color = "blue"
    } else {
        p.textContent = `You pressed: ${event.key}`
    }
    keyLog.appendChild(p)
})