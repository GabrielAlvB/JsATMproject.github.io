var personas = [
    { nombre: "Juan", contraseña: "123" },
    { nombre: "Maria", contraseña: "1234" },
    { nombre: "Pedro", contraseña: "12345" }
  ];

  localStorage.setItem("list",JSON.stringify(personas));
  

var bienvenida=document.querySelector('#bienvenida');



function login(form){
    let succesful=true;
    lst=JSON.parse(localStorage.getItem("list"));
    for(let i=0; i< lst.length;i++){
        if (form.User.value==lst[i].nombre && 
            form.Pass.value==lst[i].contraseña) {
            location= "principal.html";
            
            bienvenida=document.querySelector('#bienvenida');
            console.log(bienvenida.textContent);
            bienvenida.textContent="Bienvenido a tu cuenta"+lst[i].nombre;
            console.log(bienvenida.textContent);
            window.location="principal.html"
            succesful=true;
            break;
        } else {
            succesful=false;
            console.log("false");
        }    
    }
    if(succesful===false){
        alert("Usuario o contraseña incorrectos");
    }

}