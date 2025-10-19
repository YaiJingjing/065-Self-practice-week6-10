 const addButton = document.getElementById('add')
 addButton.addEventListener('click',() =>{
    const box =document.getElementById("box");
    box.classList.add("bordered")
 }
)
const revButton = document.getElementById('remove')
 revButton.addEventListener('click',() =>{
    const box =document.getElementById("box");
    box.classList.remove("bordered")
 }
)

const togButton = document.getElementById('toggle')
 togButton.addEventListener('click',() =>{
    const box =document.getElementById("box");
    box.classList.toggle("bordered")
 }
)

// const buttons = document.getElementsByTagName("button")
// Array.from(buttons).forEach((button) =>
// button.addEventListener("click",() => {

// }))