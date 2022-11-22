const productos = [
    { id: 1, nombre: "iphone SE 64 GB", precio: 560, img: "./Imagenes/iPhoneSE64GB.png"},
    { id: 2, nombre: "iPhone 11 128 GB", precio: 765, img: "./Imagenes/iPhone11GB128.png"},
    { id: 3, nombre: "iPhone 12 256 GB", precio: 1030, img: "./Imagenes/iphone12GB256.png"},
    { id: 4, nombre: "iPhone 13 PRO MAX 256 GB", precio: 1450, img:"./Imagenes/iphone13pro256gb.png" }
]

let carrito = []

const productosLS = JSON.parse(localStorage.getItem("productosElegidos"))

if (productosLS !== null) {
    carrito = productosLS
}

const listas = document.querySelector(".ListasDePrecios")
const modalContainer = document.querySelector(".modal-body")
const precioTotal = document.querySelector("#precioTotal")
const vaciarCarrito = document.querySelector("#vaciarCarrito")

productos.forEach(
    (producto) => {

        let div_prod = document.createElement("div")
        div_prod.classList.add("cards__listas")

        div_prod.innerHTML = `
            <div class="imgContainer">
                <img class="img" src="${producto.img}" alt="">
            </div>
            <div class="descProd">
                <h3 class="titulos__listas">${producto.nombre}</h3>
                <h4 class="titulos__listas">U$S ${producto.precio}</h4>
                <button type="button" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `
        listas.append(div_prod);
        
    }
)

const agregarAlCarrito = (id) => {

    let producto = productos.find((x) => x.id == id);

    carrito.push(producto)
    
    enviarAlCarrito ()

    totalProductos ()

    localStorage.setItem("productosElegidos", JSON.stringify(carrito));
}

const enviarAlCarrito = () => {
    modalContainer.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.className = "productosModal"
        div.innerHTML = `
            <p>${producto.nombre}</p>
            <p>U$S ${producto.precio}</p>
        `
    modalContainer.append(div)
    
    })
}

let totalProductos = () => {
    let costo_total = 0

    carrito.forEach ((producto) => {
        costo_total += producto.precio
    })

    precioTotal.innerText = costo_total
}

const btnVaciarCarrito = document.querySelector("#vaciarCarrito")

// Cree esta funcion para vaciar el carrito pero una vez que la uso despues no puedo volver a agregar productos y tira un error

// btnVaciarCarrito.addEventListener(`click`, () => {
//     carrito.length = 0
//     localStorage.setItem("productosElegidos", JSON.stringify("productosElegidos"))
//     modalContainer.innerHTML = ""
// })



