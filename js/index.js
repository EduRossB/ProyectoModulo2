 import {producto} from './classProductos'


// seccion productos del LocalStorage


// Seccion productos nuevos

const productosNuevos = [
  {
    id: uuidv4(),
    name: "iPhone 14 Pro",
    img: "https://memeandchill.com/wp-content/uploads/2022/09/iPhone-14-Pro-and-Pro-Max-.png",
    descripcion:
      "Nuevo Celular de la Gama Apple, el procesador mas veloz de todos y una camara con un sensor de 48 Megapíxeles",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Notebook ThinkPad E14 2da Gen",
    img: "https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E14_Gen2_20RA001CGE/lenovo_thinkpad_e14_teaser.jpg",
    descripcion:
      "Procesamiento Intel® Core™ i7 de 11va generación, Windows 10 y pantalla 14 pulgadas FHD (1920 x 1080)",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Celular Motorola G51",
    img: "https://player8.org/wp-content/uploads/2022/03/moto-g51-890x606.jpg",
    descripcion: "Procesador Snapdragon 480+ y un sistema Android 11",
    new: true,
  },
];


//productos nuevos 
const sectionProducts = document.getElementById("sectionProducts");


const displayProducts = () => {
  const displayProductos = productosNuevos.map(
    (producto) =>
      `<div class="row col-lg-4 justify-content-center">
        <div class="card cardsNuevosProductos bg-secondary  mt-3">
          <img src=${producto.img} class="card-img-top m-0" alt=${
        producto.name
      }>
          <div class=>
            <h5 class="card-title text-light">${producto.name}
            ${
              producto.new
                ? '<span class="badge rounded-pill text-bg-warning ">Nuevo</span>'
                : ""
            }
            </h5>
            <p class="card-text text-light">${producto.descripcion}</p>
          </div>
        </div>
      </div>`
  );
  sectionProducts.innerHTML = displayProductos;
  console.log(displayProductos);
};

displayProducts();

//DECLARACIÓN DE VARIABLES PARA LA BÚSQUEDA DE PRODUCTOS
const searchForm = document.getElementById('searchForm');
const searchProductInput = document.getElementById('searchProductInput');
const productSearch = document.getElementById('productSearch');

    searchForm.onsubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem('products')) || productsDefault;
    const term = searchProductInput.value;
    const filteredProducts = products.filter(product =>(
        product.nameProduct.toLowerCase().includes(term.toLowerCase())
        ));
        searchForm.reset();
        productSearch.classList.remove('d-none');
        Ocultar();
        createProduct(filteredProducts);
};