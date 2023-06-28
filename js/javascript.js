var personas = [
    { nombre: "Juan", contraseña: "123", saldo: 20000 },
    { nombre: "Maria", contraseña: "1234", saldo: 30000 },
    { nombre: "Pedro", contraseña: "12345", saldo: 15000 }
  ];

localStorage.setItem("list",JSON.stringify(personas));
lst=JSON.parse(localStorage.getItem("list"));





function login(form){
    let succesful=true;
    
    for(let i=0; i< lst.length;i++){
        if (form.User.value==lst[i].nombre && 
            form.Pass.value==lst[i].contraseña) {
            
            localStorage.setItem("user", lst[i].nombre);
            localStorage.setItem("saldo", lst[i].saldo);
            
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