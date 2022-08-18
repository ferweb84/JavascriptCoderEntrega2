const boton= document.querySelector("#btn");
const contenedor= document.querySelector("#fetch");


//funcion obtener datos 
const obtenerDatos = async ()=>{
    try{
        let response=await fetch ("https://jsonplaceholder.typicode.com/users");
        let result= await response.json();
        result.forEach(persona=> {
            contenedor.innerHTML += `
            <div>
                 <h3>${persona.name}</h3>
                 <p>${persona.email}</p>
                 <p>Direccion: ${persona.address.street}</p>
            </div>
            `            
        });
    }
    catch (error){
        console.log(error);
    }
    
}    
boton.onclick =()=>{
    obtenerDatos();
}
//     const obtenerDatos = async ()=>{
//     fetch("../datos.json")
//         .then(response =>response.json())//el metodo json ya lo pasea 
//         .then(result => {
//             result.forEach (accionApple => {contenedor.innerHTML += `
//             <div>
//             <h3>${accionApple.accion}</h3>
//             </div>
//             `
//         })
//     })
//     .catch(error => console.log (error))
//     .finally(()=>{ //toastity que diga proceso terminado})
// }


// function toYQL(site){
//     return 'http://query.yahooapis.com/v1/public/yql?q=' +
//         encodeURIComponent('select * from html where url="' + site + '"') +
//         '&format=json&callback=?';
// }
// $.ajax({
//   dataType: "json",
//   url: toYQL("http://www.google.com/finance/option_chain?q=AAPL&output=json"),
//   success: function(response){
//       eval("var tmp=" + response.query.results.body);
//       console.log(tmp);
//   }