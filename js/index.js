let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
// console.log('Productos', listaProductos);

//Función listar productos
const displayProducts = (productos, section) => {
  const displayProductos = productos.map(
    (producto) =>
      `<div class="row col-lg-4 justify-content-center">
        <div class="card cardsNuevosProductos mt-3 p-0">
        <div class="imagenCard">
          <img src=${producto.imagen} class="card-img-top m-0" alt=${
        producto.nombreProducto
      }> 
      </div>
          <div class= "infoProducto bg-secondary">
            <h5 class="card-title text-light">${producto.nombreProducto}
            ${
              producto.new
                ? '<span class="badge rounded-pill text-bg-warning ">Nuevo</span>'
                : ""
            }
            </h5>
            <p class="card-text text-light">${producto.descripcion.substring(0, 30)}...
            <button type="button" class="btn btn-link bg-transparent outline-none" id="verMas">Ver mas</button>
            </p>
            <p class="card-text text-light">${producto.precio}</p>
            <button type="button" class="btn btn-secondary" id="botonCarrito">Comprar<i class="fas fa-shopping-cart"></i></button>
          </div>
        </div>
      </div>`
  );
  section.innerHTML = displayProductos;
  // console.log(displayProductos);
};

// seccion productos del LocalStorage
const sectionProductsAdmin = document.getElementById("productosLocalStorage");
displayProducts(listaProductos, sectionProductsAdmin);

// Seccion productos nuevos

const productosNuevos = [
  {
    codigo: uuidv4(),
    nombreProducto: "iPhone 14 Pro",
    imagen: "https://memeandchill.com/wp-content/uploads/2022/09/iPhone-14-Pro-and-Pro-Max-.png",
    descripcion:
      "Nuevo Celular de la Gama Apple, el procesador mas veloz de todos y una camara con un sensor de 48 Megapíxeles",
    new: true,
    precio: "Precio: $640.000"
  },
  {
    codigo: uuidv4(),
    nombreProducto: "Notebook ThinkPad E14 2da Gen",
    imagen: "https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E14_Gen2_20RA001CGE/lenovo_thinkpad_e14_teaser.jpg",
    descripcion:
      "Procesamiento Intel® Core™ i7, Windows 10 y pantalla 14 pulgadas FHD (1920 x 1080)",
    new: true,
    precio: "Precio: $849.999"
  },
  {
    codigo: uuidv4(),
    nombreProducto: "Celular Motorola G51",
    imagen: "https://player8.org/wp-content/uploads/2022/03/moto-g51-890x606.jpg",
    descripcion: "Procesador Snapdragon 480+ y un sistema Android 11",
    new: true,
    precio: "Precio: $470.999"
  },
];


//productos nuevos 
const sectionProducts = document.getElementById("sectionProducts");


displayProducts(productosNuevos, sectionProducts);

//DECLARACIÓN DE VARIABLES PARA LA BÚSQUEDA DE PRODUCTOS
const searchForm = document.getElementById('searchForm');
const searchProductInput = document.getElementById('searchProductInput');
const productSearch = document.getElementById('productSearch');

    searchForm.onsubmit = (e) => {
    e.preventDefault();
    const term = searchProductInput.value;
    const productos = listaProductos.concat(productosNuevos)
    const filteredProducts = productos.filter(producto =>(
        producto.nombreProducto.toLowerCase().includes(term.toLowerCase())
        ));
        searchForm.reset();
        productSearch.classList.remove('d-none');
        displayProducts(filteredProducts, sectionProducts);
        sectionProducts.scrollIntoView()
};