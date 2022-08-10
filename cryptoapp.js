const contenedorCryptos = document.getElementById('contenedorCrypto-cryptos')

const contenedorCarriCrypto = document.getElementById('carriCrypto-contenedorCrypto')

const botonVaciar = document.getElementById('vaciar-carriCrypto')

const contadorCarriCrypto = document.getElementById('contadorCarriCrypto')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carriCrypto = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carriCrypto')){
        carriCrypto = JSON.parse(localStorage.getItem('carriCrypto'))
        actualizarCarriCrypto()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carriCrypto.length = 0
    actualizarCarriCrypto()
})



//inyecto html
stockCryptos.forEach((crypto) => {
    const div = document.createElement('div')
    div.classList.add('crypto')
    div.innerHTML = `
    <img src=${crypto.img} alt= ""></img>
    <h3>Ticker(nombre):${crypto.ticker}</h3>
    <p class="tengoInvertido">${crypto.tengoInvertido}</p>
    <p class="precioCryptoDeCompra">Precio:$ ${crypto.precioCryptoDeCompra}</p>
    <p class="precioCryptoDeCompraUsdt">Precio:$ ${crypto.precioCryptoDeCompraUsdt}</p>
    <button id="agregar${crypto.id}" class="boton-agregar">Comprar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorCryptos.appendChild(div)

    //inserto el html en el DOM
    const boton = document.getElementById(`agregar${crypto.id}`)

    boton.addEventListener('click', () =>  {agregarAlCarriCrypto(crypto.id)
    })
})

const agregarAlCarriCrypto =(crypId)=>{
    const existe = carriCrypto.some (cryp => cryp.id  === crypId) 
    if (existe){
        const cryp = carriCrypto.map (cryp => {
        if (cryp.id === crypId){cryp.cantidad++
    }
})
}else{
    const item = stockCryptos.find((cryp) => cryp.id === crypId)
    carriCrypto.push(item)
    }
    actualizarCarriCrypto()
}

const eliminarDelCarriCrypto = (crypId) => {
    const item = carriCrypto.find((cryp) => cryp.id === crypId)

    const indice = carriCrypto.indexOf(item) 

    carriCrypto.splice(indice, 1) 
    actualizarCarriCrypto() 
    console.log(carriCrypto)
}

const actualizarCarriCrypto = () => {
    contenedorCarriCrypto.innerHTML = "" 
    carrito.forEach((cryp) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarriCrypto')
        div.innerHTML = `
        <p>${cryp.ticker}</p>
        <p>Precio:$${cryp.precio}</p>
        <p>Cantidad: <span id="cantidad">${cryp.cantidad}</span></p>
        <button onclick="eliminarDelCarriCrypto(${cryp.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarriCrypto.appendChild(div)
        
        localStorage.setItem('carriCrypto', JSON.stringify(carriCrypto))

    })
    //SEPTIMO PASO
    contadorCarriCrypto.innerText = carriCrypto.length 
    
    console.log(carriCrypto)
    precioTotal.innerText = carriCrypto.reduce((acc, cryp) => acc + cryp.cantidad * cryp.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}
