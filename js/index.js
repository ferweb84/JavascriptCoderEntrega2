// //LOGIN 

// const formularioUsuario = document.querySelector('#formularioUsuario')
// const nombreUsuario = document.querySelector('#nombre')
// const contraseniaFormulario = document.querySelector('#contrasenia')

// //variables
// let nombre;
// let contrasenia;

// //funcion 
// const acceso =()=>{
//     window.location.href="http://127.0.0.1:5500/index.html"
// }

// const ejecutarFormulario =()=>{
//     nombre=nombreFormulario.value;
//     contrasenia=contraseniaFormulario.value;
//     acceso();
// }

// formularioUsuario.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     ejecutarFormulario()
// })


//CONSTRUCTOR PARA CREAR PRODUCTO 
class Producto {
    constructor(id,nombre, precio,categoria,imagen){
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen=imagen;

    }
}
let listaProductos = [
    {id:1,nombre: "mate bitcoin", precio: 3000,categoria:"accesorio",imagen:""},
    {id:2,nombre: 'gorra', precio: 2500,categoria:' indumentaria',imagen:""},
    {id:3,nombre: 'agenda', precio: 1800,categoria:'papeleria',imagen:""},
    {id:4,nombre: 'computadora',precio: 80000,categoria:' informatica',imagen:""},
    {id:5,nombre: 'lapicera', precio: 700,categoria:' papeleria',imagen:""},
    {id:6,nombre: "mate ethereum'", precio: 3000,categoria:"accesorio",imagen:""},
    {id:7,nombre: "mate binance'", precio: 3000,categoria:"accesorio",imagen:""},

];

//FUNCION PARA GUARDAR LOS DATOS 
const guardarDatos= ()=> {
    let id= document.getElementById("id").value;
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let categoria = document.getElementById("categoria").value;
    let imagen= document.getElementById("imagen").value;
    let nuevoProd= new Producto (id,nombre, precio, categoria,imagen);

    listaProductos.push(nuevoProd);
    return nuevoProd;//en consola llamar a la funcion guardarDatos()
}

//crear e imprimir los productos 

// function agregarHtml(){
//     listaProductos.forEach((prod) =>{
//         let nodo= document.createElement("card");

//         cuotas=Math.round(prod.precio/12)
//         nodo.setAttribute("class","card m-3");
//         nodo.innerHTML= `<img src="${prod.imagen}" class="card-img-top" alt="card-grid-image"></img>
//         <h5 class="card-title">${prod.nombre}</h5>
//         <p class="card-text">${prod.categoria}</p>
//         <span>U$S<b>${prod.precio}</b><imag class="w-25" src=""</span> 
//         <button class="btn btn-danger button"> Agregar al carrito</button><br>
//         <p class="hola text-success text-card my-2">Hasta en 12 cuotas de usd ${cuotas}</p>
//         <p class="text-dark text-card my-2"><b><i class="fa-solid fa-truck-fast"></i>Ennvios a todo el pais><p/>
//         `
//         contenedor.appendChild(nodo);
//         boton= document.getElementById(`${prod.id}`)
//         boton.addEventListener("click",agregarAlCarrito)
//     })
// }
// agregarHtml();

// //FUNCION PARA AGREGAR AL CARRITO
// function addItemCarrito(newItem){
//     const alert= document.querySelector('.alert')

//     setTimeout(function(){
//         alert.classList.add('hide')},2000)
//         alert.classList.remove('hide');
// }

// const InputElemnt=tbody.getElementByClassName('input__elemento')
// for(let i=0; i < carrito.length; i++){
//     if (carrito[i].title.trim()===newItem.title.trim()){
//         carrito[i].cantidad ++;
//         const inputValue= InputElemnt[i]
//         inputValue.value++;
//         CarritoTotal()
//         return null;
//     }
// }
// carrito.push(newItem)

// renderCarrito()

function renderCarrito(){
    tbody.innerHTML=''
    carrito.map(item=>{
        const tr=document.createElement('tr')
        tr.classList.add('ItemCarrito')
        const Content= `
        <th scope="row">1</th>
            <td class="table__productos"><img src=${item.img} alt="><h6 class="title">${item.title}</h6></td>
            <td class="table__price"><p>${item.precio}</p>"></td>
            <td class="table__cantidad"><input type="numer" min="1" value=${item.cantidad}class="input__elemento">
            <button class="delete btn btn-danger">x</button>
            </td>
            
        `
        tr.innerHTML=Content; 
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener('click',removeItemCarrito)
        tr.querySelector(".input__elemento").addEventListener('change',sumaCantidad)
    })
    CarritoTotal()
}