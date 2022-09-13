


// seccion productos del LocalStorage

class Producto{
constructor(codigo,nombreProducto,descripcion,imagen,precio,categoria){
this.codigo = codigo
        this.nombreProducto = nombreProducto
        this.descripcion = descripcion
        this.imagen = imagen
        this.precio = precio
        this.categoria = categoria
}
}

// Seccion productos nuevos

const productos = [
  {
    id: uuidv4(),
    name: "iPhone 14 Pro",
    img: "https://memeandchill.com/wp-content/uploads/2022/09/iPhone-14-Pro-and-Pro-Max-.png",
    descripcion: "Nuevo Celular de la Gama Apple, el procesador mas veloz de todos y una camara con un sensor de 48 Megapíxeles",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Notebook ThinkPad E14 2da Gen",
    img: "https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E14_Gen2_20RA001CGE/lenovo_thinkpad_e14_teaser.jpg",
    descripcion: "Procesamiento Intel® Core™ i7 de 11va generación, Windows 10 y pantalla 14 pulgadas FHD (1920 x 1080)",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Celular Motorola G51",
    img: "https://player8.org/wp-content/uploads/2022/03/moto-g51-890x606.jpg",
    descripcion: "Procesador Snapdragon 480+ y un sistema Android 11",
    new: true,
  }
];

const sectionProducts = document.getElementById("sectionProducts");

const displayProducts = () => {
  const displayProductos = productos.map(
    (producto) =>
      `<div class="row col-lg-4 justify-content-center">
        <div class="card cardsNuevosProductos bg-secondary  mt-3">
          <img src=${producto.img} class="card-img-top m-0" alt=${producto.name}>
          <div class=>
            <h5 class="card-title text-light">${producto.name}
            ${producto.new ? '<span class="badge rounded-pill text-bg-warning ">Nuevo</span>' : ''}
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

const botonBusqueda = document.querySelector("#botonBusqueda");
const boton = document.querySelector("#boton");
const resultado = document.querySelector("#resultado");

const filtrar = ()=> {
  // console.log(botonBusqueda.value);
  resultado.innerHTML = "";


  const texto = botonBusqueda.value.tolowerCase();

  for (let producto of productos){
    let nombre = producto.name.tolowerCase();
    if(nombre.indexOf() !== -1){
resultado.innerHTML += `
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">${producto.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${producto.descripcion}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
    }
  }
  if(resultado.innerHTML === ""){
resultado.innerHTML +=
`
<li>Producto no encontrado</li>
`
  }
}
boton.addEventListener("click", filtrar);

