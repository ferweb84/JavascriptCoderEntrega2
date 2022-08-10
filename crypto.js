const contenedorCryptoModal = document.getElementsByClassName('modal-contenedorCrypto')[0]
const botonAbrir = document.getElementById('boton-carriCrypto')
const botonCerrar = document.getElementById('carriCryptoCerrar')
const modalCarriCrypto = document.getElementsByClassName('modal-carriCrypto')[0]

let stockCryptos = [
    {img:"./img/logobitcoin.png",ticker:"bitcoin",tengoInvertido: 546,precioDeCompra: 2220,precioDeCompraUsdt: 546},
    {img:"./img/logobitcoin.png",ticker:"Binance",tengoInvertido: 600,precioDeCompra: 2220,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78},
    {img:"./img/logobitcoin.png",ticker:"Shiba",tengoInvertido: 600,precioDeCompra: 30000,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78},
    {img: "./img/buzoB.jpg",ticker:"Cake",tengoInvertido: 600,precioDeCompra: 30000,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78}
]


botonAbrir.addEventListener('click', ()=>{
    contenedorCryptoModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorCryptoModal.classList.toggle('modal-active')
})

contenedorCryptoModal.addEventListener('click', (event) =>{
    contenedorCryptoModal.classList.toggle('modal-active')

})
modalCarriCrypto.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})