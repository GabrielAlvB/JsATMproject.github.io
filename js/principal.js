var bienvenida=document.querySelector('#bienvenida');
let user = localStorage.getItem("user");

bienvenida.textContent="Bienvenido "+ user;