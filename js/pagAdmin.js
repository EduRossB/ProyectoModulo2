import { Producto } from "./classProductos.js";
import {
  caracteresDescripcion,
  caracteresProducto,
  linkImagenValidacion,
  numerosPrecio,
  numerosStock
} from "./helpersAdmin.js";

let codigo = document.querySelector("#codigo");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let precio = document.querySelector("#precio");
let stock = document.querySelector("#stock");
let categoria = document.querySelector("#categoria");

// input editar productos 
let codigoE = document.querySelector("#codigoE");
let nombreProductoE = document.querySelector("#nombreProductoE");
let descripcionE = document.querySelector("#descripcionE");
let imagenE = document.querySelector("#imagenE");
let precioE = document.querySelector("#precioE");
let stockE = document.querySelector("#stockE");
let categoriaE = document.querySelector("#categoriaE");

let formProducto = document.getElementById("formProducto");
let btnAgregarProcucto = document.querySelector("#botonAgregarProducto");
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let nuevoProducto = true;
let contenedorInfoProducto = document.querySelector("#contenedorInfoProducto");

const modalProducto = new bootstrap.Modal(
  document.querySelector("#modalProductos")
);
const modalEditarProducto = new bootstrap.Modal(
  document.querySelector("#modalEditarProductos")
);
const modalInfo = new bootstrap.Modal(document.querySelector("#modalInfo"));

btnAgregarProcucto.addEventListener("click", AgregarProducto);
formProducto.addEventListener("submit", generarProductoNuevo);

nombreProducto.addEventListener("blur", () => {
  caracteresProducto(nombreProducto);
});
descripcion.addEventListener("blur", () => {
  caracteresDescripcion(descripcion);
});
imagen.addEventListener("blur", () => {
  linkImagenValidacion(imagen);
});
precio.addEventListener("blur", () => {
  numerosPrecio(precio);
});
stock.addEventListener("blur", () => {
  numerosStock(stock);
});

cargarInicial();

function cargarInicial() {
  if (listaProductos.length > 0) {
    listaProductos.forEach((itemProducto) => {
      crearObjetoEnHTML(itemProducto);
    });
  }
}



function AgregarProducto() {
  nuevoProducto = true;
  modalProducto.show();
  codigo.value = uuidv4();
}


function generarProductoNuevo(e) {
  e.preventDefault();
  if (nuevoProducto) {
    let nuevoProducto = new Producto(
      codigo.value,
      nombreProducto.value,
      descripcion.value,
      imagen.value,
      precio.value,
      categoria.value,
      stock.value,
    );
    listaProductos.push(nuevoProducto);
    generarProductoEnLocalStorage();
    crearObjetoEnHTML(nuevoProducto);
    modalProducto.hide();
    formProducto.reset();
    codigo.value = uuidv4();
  } else {
    actualizarProducto();
  }
}

function generarProductoEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

function crearObjetoEnHTML(Producto) {
  let contenedorProductos = document.querySelector("#contenedorProductos");
  contenedorProductos.innerHTML += `
  <tr>
  <th scope="row">${Producto.codigo}</th>
  <td class="tdTabla">${Producto.nombreProducto}</td>
  <td class="tdTabla">${Producto.descripcion}</td>
  <td class="tdTabla">${Producto.imagen}</td>
  <td class="tdTabla">${Producto.precio}</td>
  <td class="tdTabla">${Producto.stock}</td>
  <td class="tdTabla">${Producto.categoria}</td>
  <td>
    <button class="bg-dark mx-2">
      <i class="bi bi-trash text-danger" onclick="borrarProducto('${Producto.codigo}')"></i></button
    ><button class="bg-dark mx-2">
      <i class="bi bi-pencil-square text-warning" onclick="editarProducto('${Producto.codigo}')"></i>
    </button>
    <button class="bg-dark mx-2">
      <i class="bi bi-info-circle text-info" onclick="detalleProducto('${Producto.codigo}')"></i>
    </button>
    
  </td>
</tr>
  `;
}

window.borrarProducto = function (codigo) {
  Swal.fire({
    title: "Eliminar producto",
    text: "¿Desea eliminar este producto, no se podran recuperar los datos?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#FBC827",
    cancelButtonColor: "#1C1C1C",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaProductos = listaProductos.filter(
        (itemProducto) => itemProducto.codigo != codigo
      );
      listaProductos = copiaProductos;
      generarProductoEnLocalStorage();
      actualizarTabla();

      Swal.fire(
        "Producto eliminado",
        "El producto fue eliminado de la base de datos",
        "success"
      );
    }
  });
};

window.detalleProducto = function (codigoDetalle) {
  let detalleBuscado = listaProductos.find(
    (Producto) => Producto.codigo === codigoDetalle
  );
  modalInfo.show();
  contenedorInfoProducto.innerHTML = `<div class="container py-5 fuenteMontserrat rounded text-center bg-dark text-warning">
  <h4 class="display-5 fs-5 my-2">${detalleBuscado.nombreProducto}</h4>
  <p class="fw-bold my-2 text-secondary">Código: ${detalleBuscado.codigo}</p>
  <p class="my-2">${detalleBuscado.descripcion}</p>
  <img class="my-2" width="100px" src="${detalleBuscado.imagen}" alt="alt">
  <p class="my-2 fw-bold">Precio: $${detalleBuscado.precio}</p>
  <p class="my-2 fw-bold">Stock: ${detalleBuscado.stock}</p>
  <p class="my-2">Categoría: ${detalleBuscado.categoria}</p>
</div>`;
};

function actualizarTabla() {
  limpiarTabla();
  cargarInicial();
}

function limpiarTabla() {
  let contenedorProductos = document.querySelector("#contenedorProductos");
  contenedorProductos.innerHTML = "";
}

window.editarProducto = function (codigoBuscado) {
  nuevoProducto = false;
  let productoBuscado = listaProductos.find(
    (Producto) => Producto.codigo === codigoBuscado
  );
  modalEditarProducto.show();
  codigoE.value = productoBuscado.codigo;
  nombreProductoE.value = productoBuscado.nombreProducto;
  descripcionE.value = productoBuscado.descripcion;
  imagenE.value = productoBuscado.imagen;
  precioE.value = productoBuscado.precio;
  stockE.value = productoBuscado.stock;
  categoriaE.value = productoBuscado.categoria;

};

function actualizarProducto() {
  let posicionProductoBuscado = listaProductos.findIndex(
    (Producto) => codigo.value === Producto.codigo
  );
  listaProductos[posicionProductoBuscado].nombreProducto = nombreProducto.value;
  listaProductos[posicionProductoBuscado].descripcion = descripcion.value;
  listaProductos[posicionProductoBuscado].imagen = imagen.value;
  listaProductos[posicionProductoBuscado].precio = precio.value;
  listaProductos[posicionProductoBuscado].stock = stock.value;
  listaProductos[posicionProductoBuscado].categoria = categoria.value;
  generarProductoEnLocalStorage();
  actualizarTabla();
  Swal.fire(
    "Producto actualizado",
    "Los datos del producto fueron actualizados",
    "success"
  );
  limpiarFormulario();
  modalProducto.hide();

}
