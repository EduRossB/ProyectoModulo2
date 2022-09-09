const productos = [
  {
    id: uuidv4(),
    name: "IPhone 14 Pro",
    img: "https://memeandchill.com/wp-content/uploads/2022/09/iPhone-14-Pro-and-Pro-Max-.png",
    descripcion: "",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Notebook ThinkPad E14 2da Gen",
    img: "https://www.notebookcheck.org/fileadmin/Notebooks/Lenovo/ThinkPad_E14_Gen2_20RA001CGE/lenovo_thinkpad_e14_teaser.jpg",
    descripcion: "",
    new: true,
  },
  {
    id: uuidv4(),
    name: "Celular Motorola G51",
    img: "https://player8.org/wp-content/uploads/2022/03/moto-g51-890x606.jpg",
    descripcion: "",
    new: true,
  }
];

const sectionProducts = document.getElementById("sectionProducts");

const displayProducts = () => {
  const displayProductos = productos.map(
    (producto) =>
      `<div>
        <div class="card cardsNuevosProductos bg-secondary">
          <img src=${producto.img} class="card-img-top" alt=${producto.name}>
          <div class="card-back">
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



