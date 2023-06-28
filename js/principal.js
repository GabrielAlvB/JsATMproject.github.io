var bienvenida=document.querySelector('#bienvenida');
let user = localStorage.getItem("user");
let saldo = localStorage.getItem("saldo");
bienvenida.textContent="Bienvenid@ "+ user;