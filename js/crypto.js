class Crypto{
    constructor(ticker,tengoInvertido,precioDeCompra,precioDeCompraUsdt, cantidadMoneda, valorMercadoUsdt, precioCriptomoneda, gananciaPerdidaPorcenaje){
        this.ticker=ticker;
        this.tengoInvertido=tengoInvertido;
        this.precioDeCompra=precioDeCompra;
        this.precioDeCompraUsdt=precioDeCompraUsdt;
        this.cantidadMoneda=cantidadMoneda;
        this.valorMercadoUsdt=valorMercadoUsdt;
        this.precioCriptomoneda=precioCriptomoneda;
        this.gananciaPerdidaPorcenaje=gananciaPerdidaPorcenaje;
    }
}

let crypto = [
    {ticker:"Bitcoin",tengoInvertido: 600,precioDeCompra: 30000,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78},
    {ticker:"Ethereum",tengoInvertido: 546,precioDeCompra: 2220,precioDeCompraUsdt: 546,cantidadMoneda:0.2461,valorMercadoUsdt:405.34,precioCriptomoneda:1646,gananciaPerdidaPorcenaje:-25.85},
    {ticker:"Binance",tengoInvertido: 600,precioDeCompra: 2220,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78},
    {ticker:"Shiba",tengoInvertido: 600,precioDeCompra: 30000,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78},
    {ticker:"Cake",tengoInvertido: 600,precioDeCompra: 30000,precioDeCompraUsdt: 600,cantidadMoneda:0.02,valorMercadoUsdt:457.34,precioCriptomoneda:22866.98,gananciaPerdidaPorcenaje:-23.78}
]

let tabla= document.querySelector("#tabla");

tabla.innerHTML += `
<tr>
    <td>${crypto.ticker}</td>
    <td>${crypto.tengoInvertido > 0 ? "Si": "No"}</td> 
    <td>${crypto.precioDeCompra}</td>
    <td>${crypto.precioDeCompraUsdt}</td>
    <td>${crypto.cantidadMoneda}</td>
    <td>${crypto.valorMercadoUsdt}</td>
    <td>${crypto.precioCriptomoneda}</td>
    <td>${crypto.gananciaPerdidaPorcenaje}</td>
</tr>
`
let carritoCrypto = JSON.parse(localStorage.getItem("carritoCrypto")) || [];

crypto.forEach(crypto => { imprimirDatos(crypto)})

function imprimirDatos({ticker,tengoInvertido,precioDeCompra,precioDeCompraUsdt,cantidadMoneda,valorMercadoUsdt,precioCriptomoneda,gananciaPerdidaPorcenaje}){
    tabla.innerHTML += `
    <tr>        
        <td> ${ticker}</td>
        <td> ${tengoInvertido > 0 ? "Si": "No"}</td>
        <td> ${precioDeCompra}</td>
        <td> ${precioDeCompraUsdt}</td>
        <td> ${crypto.cantidadMoneda}</td>
        <td> ${valorMercadoUsdt}</td>
        <td> ${precioCriptomoneda}</td>
        <td> ${gananciaPerdidaPorcenaje}</td>
    </tr>
    `
}





// const usuario={
//     nombre: "guillermo Dominguez",
//     edad:21
// }
// const registroUsuario = usuario.edad >=18 && new Date()
// console.log(registroUsuario)


function agregaCrypto (){
    let ticker= prompt("ticker")
    let tengoInvertido= prompt("tengoInvertido") == "si" ? true : false
    let precioDeCompra= prompt("precioDeCompra")
    let precioDeCompraUsdt= prompt("precioDeCompraUsdt")
    let cantidadMoneda= prompt("canditdadMoneda")
    let valorMercadoUsdt= prompt("valorMercadoUsdt")
    let precioCriptomoneda= prompt("precioCriptomoneda")
    let gananciaPerdidaPorcenaje=prompt ("gananciaPerdidaPorcentaje")

    let cryptoNueva = new Crypto (ticker,tengoInvertido,precioDeCompra,precioDeCompraUsdt, cantidadMoneda, valorMercadoUsdt, precioCriptomoneda, gananciaPerdidaPorcenaje);
    carritoCrypto.push(cryptoNueva)
    
    localStorage.setItem("carritoCrypto", JSON.stringify(carritoCrypto))
}


// let nums = [5,55,5555,55555,5555,5555];//math.max()
// console.log(Math.max(...nums))


// //FUNCION PARA SUMAR 
// function suma (...numeros){
//     let resultado = 0 
//     for (let i of numeros){
//         resultado+= i;
//     }
// }

// suma(2,5,5)
// suma(12,15,15,5153)


// function suma (...numeros){
//     return numeros.reduce((acc, n) => acc + n, 0)
    
// }

// suma(2,5,5)
// suma(12,15,15,5153)