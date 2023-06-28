var personas = [
    { nombre: "Juan", contraseña: "123" },
    { nombre: "Maria", contraseña: "1234" },
    { nombre: "Pedro", contraseña: "12345" }
  ];

localStorage.setItem("list",JSON.stringify(personas));
lst=JSON.parse(localStorage.getItem("list"));





function login(form){
    let succesful=true;
    
    for(let i=0; i< lst.length;i++){
        if (form.User.value==lst[i].nombre && 
            form.Pass.value==lst[i].contraseña) {
            
            localStorage.setItem("user", lst[i].nombre);
            
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