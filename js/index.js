const productos = [
  {
    id: uuidv4(),
    name: "Notebook HP",
    img: "https://images.start.com.ar/26N51LT-3.jpg",
    descripcion: "La notebook más potente",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Samsung S20",
    img: "https://images.samsung.com/mx/smartphones/galaxy-s20/models/images/galaxy-s20_models_360_kv_s.jpg",
    descripcion: "El mejor celular de la gama alta de samsung",
    new: false,
  },
];

const sectionProducts = document.getElementById("sectionProducts");

const displayProducts = () => {
  const displayProductos = productos.map(
    (producto) =>
      `<div>
        <div class="card cardsNuevosProductos bg-secondary">
          <img src=${producto.img} class="card-img-top" alt=${producto.name}>
          <div class="card-body ">
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
