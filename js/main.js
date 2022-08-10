let btnCarrito = document.querySelector("#cart");
let carrito = document.querySelector(".cart-modal-overlay");
let cerrarCarrito = document.querySelector("#close-btn");
let arrayCarrito = []

class Producto{
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

let listaProductos = [
    {id:1,nombre: "mate bitcoin",imagen:"./assets/img/mate bitcoin.jpg",precio:3000},
    {id:2,nombre: 'gorra',imagen:"./assets/img/remeraMinotauro.jpg",precio:1856},
    {id:3,nombre: 'agenda',imagen:"./assets/img/remeraMinotauro.jpg",precio:1452},
    {id:4,nombre: 'computadora',imagen:"../assets/img/remeraMinotauro.jpg",precio:5651},
    {id:5,nombre: 'lapicera',imagen:"../assets/img/remeraMinotauro.jpg",precio:1651},
    {id:6,nombre: "mate ethereum",imagen:"./assets/img/mate bitcoin.jpg",precio:785},
    {id:7,nombre: "mate binance",imagen:"./assets/img/mate bitcoin.jpg",precio:1452},

];


const llamarProductos =()=> {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(listaProductos);
        },3000);
    })
}

let contenedor=document.querySelector("#cart");
let boton=document.querySelector("#botonProductos");

const mostrarProductos=(array)=>{
    array.forEach(producto => {
        contenedor.innerHTML +=`
        <div>
             <h3>${producto.title } </h3>
             <img>${producto.image}</img>
             <button>${producto.add-to-cart}</button>
             <span>${producto.price}</span>
        </div>
        `        
    })
}


boton.onclick=()=> {
    llamarProductos()
    .then(productos =>{
        mostrarProductos(productos)
    })
    .catch(error => contenedor.innerHTML =error);
    console.log("este codigo viene al final de todo");

let elementoNuevo= document.createElement("h2");
elementoNuevo.setAttribute("id","caracteristicas");
elementoNuevo.innerHTML="caracteristicas";
console.log (elementoNuevo)

//abrir y cerrar el carrito
function abriCerrarCarrito() {
    if(carrito.classList.contains("open")) {
        carrito.classList.remove("open");
    } else {
        carrito.classList.add("open");
    }
}
btnCarrito.addEventListener("click", abriCerrarCarrito);
cerrarCarrito.addEventListener("click", abriCerrarCarrito);

//agregar elementos al carrito
let botonesComprar = document.querySelectorAll(".add-to-cart");
console.log(botonesComprar);
for(let i=0; i < botonesComprar.length; i++) {
    let boton = botonesComprar[i];
    boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e) {
    let boton = e.target;
    let padre = boton.parentElement;
    let prodId = padre.getAttribute("id");
    let prodNombre = padre.querySelector("h3").innerText;
    let precio = padre.querySelector(".product-price").innerText;
    let imagen = padre.querySelector(".product-image").src;

    let prodNuevo = new Producto(prodId, prodNombre, imagen, precio);
    arrayCarrito.push(prodNuevo);

    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));

    agregarElemCarrito(prodNuevo);

}


function agregarElemCarrito(producto){
    let contenedorCarrito = document.querySelector(".product-rows");
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    console.log(carritoStorage);
    contenedorCarrito.innerHTML += `
        <div class='product-row' id='${producto.id}'>
            <img class='cart-image' src='${producto.imagen}' />
            <span>${producto.nombre}</span>
            <span>${producto.precio}</span>
            <button class='remove-btn'>X</button>
        </div>
    `
    cartQuantity();
}
    

//funcion para la cantidad de elementos que tiene el carrito 
function cartQuantity() {
    let cantidad = document.querySelector(".cart-quantity");
    cantidad.innerText = arrayCarrito.length;
}

//FUNCION PARA GUARDAR LOS DATOS 
// const guardarDatos= ()=> {
//     let id= document.getElementById("id").value;
//     let nombre = document.getElementById("nombre").value;
//     let categoria = document.getElementById("categoria").value;
//     let imagen=document.getElementById("imagen").value;
//     let precio = document.getElementById("precio").value;

//     let nuevoProd= new Producto (id,nombre, categoria,imagen,precio);
//     listaProductos.push(nuevoProd);
//     return nuevoProd;
// }
//crear e imprimir los productos 
//Corregiiiir
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
//         boton.addEventListener("click",agregarCarrito)
//     })
// }
// agregarHtml();

