const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_8amglno';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Email';
      Swal.fire({
        position: 'center',
        icon: 'success',
        color: "rgb(190, 68, 20)",
        title: 'Se envio Correctamente!',
        footer: "Nos contactaremos a la brevedad",
        showConfirmButton: false,
        timer: 2000
      })
    }, (err) => {
      btn.value = 'Enviar Email';
      alert(JSON.stringify(err));
    });
});
function limpiarFormulario(){
  document.getElementById('form').reset();
  
}