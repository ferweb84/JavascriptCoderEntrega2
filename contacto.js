const validarCampos = ()=> {
    let from_name = document.getElementById("from_name").value;
    let from_nameError = document.getElementById("from_nameError");
    let telefono = document.getElementById("telefono").value;
    let telefonoError = document.getElementById("telefonoError");
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let comentario = document.getElementById("comentario").value;
    let comentarioError = document.getElementById("comentarioError");

    //trim para sacarle los espacios del medio 
    if (from_name.trim() == ""){
        from_nameError.innerHTML ="Falta completar el campo Nombre!";
        from_nameError.className="text-danger";
        return false;
        //se coloca un return false por las dudas que tengamos el campo vacio "nombre", asi lo detiene ahi 
    }else{
        from_nameError.innerHTML ="";
        //se coloca para el caso que este completo correctamente no me aparezca el error
    }
    
    if (telefono.trim() == ""){
        telefonoError.innerHTML ="Falta completar el campo Telefono!";
        telefonoError.className="text-danger";
        return false;
    }else{
        telefonoError.innerHTML ="";
    }

    if (email.trim() == ""){
        emailError.innerHTML ="Falta completar el campo Email!";
        emailError.className="text-danger";
        return false;
    }else{
        emailError.innerHTML ="";
    }
    
    if (password.trim() == ""){
        passwordError.innerHTML ="Falta completar el campo Password!";
        passwordError.className="text-danger";
        return false;
    }else{
        passwordError.innerHTML ="";
    }
    if (comentario.trim() == ""){
        comentarioError.innerText ="Falta completar el campo Comentario!";
        comentarioError.className="text-danger";
        return false;
    }else{
        comentario.innerText ="";
    }


    //llamamos a funcion guardar datos
    guadarDatos(from_name, telefono, email, password,comentario);

    //llamamos a funcion recuperar datos / informacion de todos los datos que guardamos en la localStorage
    const datosUsuario=recuperarDatos();
    document.getElementById("resultado").innerHTML=`<p>Nombre:${datosUsuario.from_nameUsuario}<br> Telefono: ${datosUsuario.telefonoUsuario}<br> Email: ${datosUsuario.emailUsuario}<br>Password: ${datosUsuario.passwordUsuario}<br>Comentario: ${datosUsuario.comentarioUsuario}</p>`;
    document.getElementById("resultado").className="bg-light fs-4";

}
//objeto Guardamos los datos
const guadarDatos =(from_name, telefono, email, password,comentario)=> {
    const datos = {from_nameUsuario:from_name, telefonoUsuario: telefono, emailUsuario: email, passwordUsuario:password, comentarioUsuario:comentario}
    localStorage.setItem("datosUsuario", JSON.stringify(datos));
}
// objeto recuperamos los datos, proceso inverso al anterior
const recuperarDatos =()=>{
    return JSON.parse(localStorage.getItem("datosUsuario"));
}


document.getElementById("btnEnviar").onclick = validarCampos;





const btnEmailjs = document.getElementById('buttonEmailjs');

document.getElementById('form').addEventListener('submit', function(event) {
   event.preventDefault();

   btnEmailjs.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_8amglno';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btnEmailjs.value = 'Enviar Email';
      alert('Enviado!');
    }, (err) => {
      btnEmailjs.value = 'Enviar Email';
      alert(JSON.stringify(err));
    });
});