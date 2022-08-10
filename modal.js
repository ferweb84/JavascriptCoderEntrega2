const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


let stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", cantidad: 1, desc: "Buzo gris algodon", precio: 1200, talle: "L", img: "./img/buzoB.jpg"},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1100, talle: "L", img: './img/buzoB2.jpg'},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, talle: "M", img: './img/buzoB3.jpg'},
    {id: 4, nombre: "Buzo 4", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1400, talle: "M", img: './img/buzoB2.jpg'},
    {id: 5, nombre: "Buzo 5", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1200, talle: "S", img: './img/buzoB2.jpg'},
    {id: 6, nombre: "Buzo 6", tipo: "buzo", cantidad: 1, desc: "Un buzo que re va con vos", precio: 1500, talle: "S", img: './img/buzoB3.jpg'},
    {id: 7, nombre: "Remera 1", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "L", img: './img/remeraa.webp'},
    {id: 8, nombre: "Remera 2", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "L", img: './img/remeraa.webp'},
    {id: 9, nombre: "Remera 3", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 500, talle: "M", img: './img/remeramooneda.webp'},
    {id: 10, nombre: "Remera 4", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, talle: "M", img: './img/remeramooneda.webp'},
    {id: 11, nombre: "Remera 5", tipo: "remera", cantidad: 1,desc: "Una remera que re va con vos", precio: 700, talle: "S", img: './img/remeramooneda.webp'},
    {id: 12, nombre: "Remera 6", tipo: "remera", cantidad: 1, desc: "Una remera que re va con vos", precio: 700, talle: "S", img: './img/remeramooneda.webp'},

]



botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})