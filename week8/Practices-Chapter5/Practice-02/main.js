
const buttons = document.getElementsByTagName("button")
const box = document.getElementById('box')
Array.from(buttons).forEach(element => {
    const color = element.dataset.color
    element.addEventListener("click", () => {
        box.style.background = color
    })
});
 
