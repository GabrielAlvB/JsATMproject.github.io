var personas = [
    { nombre: "Juan", contraseña: "123" },
    { nombre: "Maria", contraseña: "1234" },
    { nombre: "Pedro", contraseña: "12345" }
  ];

function login(form){
    let succesful=true;
    for(let i=0; i< personas.length;i++){
        if (form.User.value==personas[i].nombre && 
            form.Pass.value==personas[i].contraseña) {
            location= "principal.html";
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