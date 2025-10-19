const form = document.querySelector('form')
const user = document.getElementById('user')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirm-password')
const message = document.querySelector('form p')
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPass.value.trim() === "") {
    message.style.color = "red";
    message.textContent = "missing some values, please try again!";
    return;
  }
 
  if (password.value !== confirmPass.value) {
    message.style.color = "red";
    message.textContent = "password and comfirm do not match , check again";
    return;
  }
  message.style.color = "green";
  message.textContent = "you data completed";
  console.log("submitted");
 
});