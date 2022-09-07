import { Producto } from "./classProductos.js";
import {caracteresDescripcion, caracteresProducto} from "./helpersAdmin.js";

let codigo = document.querySelector("#codigo");
let nombreProducto = document.querySelector("#nombreProducto");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let precio = document.querySelector("#precio");
let categoria = document.querySelector("#categoria");
let formProducto = document.querySelector("#formProducto");
let btnAgregarProcucto = document.querySelector("#botonAgregarProducto");
let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let nuevoProducto = true;

const modalProducto = new bootstrap.Modal(
  document.querySelector("#modalProductos")
);

nombreProducto.addEventListener("blur", ()=>{caracteresProducto(nombreProducto)})
descripcion.addEventListener("blur", ()=>{caracteresDescripcion(descripcion)})


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
  limpiarFormulario();
  modalProducto.show();
  codigo.value = uuidv4();
}

function limpiarFormulario() {
  formProducto.reset();
}

btnAgregarProcucto.addEventListener("click", AgregarProducto);

function generarProductoNuevo(e) {
  e.preventDefault();
  if (nuevoProducto) {
    let nuevoProducto = new Producto(
      codigo.value,
      nombreProducto.value,
      descripcion.value,
      imagen.value,
      precio.value,
      categoria.value
    );
    listaProductos.push(nuevoProducto);
    generarProductoEnLocalStorage();
    crearObjetoEnHTML(nuevoProducto);
    limpiarFormulario();
    codigo.value = uuidv4();
  } else {
    actualizarProducto()
  }
}

formProducto.addEventListener("submit", generarProductoNuevo);

function generarProductoEnLocalStorage() {
  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}

function crearObjetoEnHTML(Producto) {
  let contenedorProductos = document.querySelector("#contenedorProductos");
  contenedorProductos.innerHTML += `
  <tr>
  <th scope="row">${Producto.codigo}</th>
  <td>${Producto.nombreProducto}</td>
  <td>${Producto.descripcion}</td>
  <td>${Producto.imagen}</td>
  <td>${Producto.precio}</td>
  <td>${Producto.categoria}</td>
  <td>
    <button class="bg-dark mx-2">
      <i class="bi bi-trash text-danger" onclick="borrarProducto('${Producto.codigo}')"></i></button
    ><button class="bg-dark mx-2">
      <i class="bi bi-pencil-square text-warning" onclick="editarProducto('${Producto.codigo}')"></i>
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
    console.log(result);
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
  modalProducto.show();
  codigo.value = productoBuscado.codigo;
  nombreProducto.value = productoBuscado.nombreProducto;
  descripcion.value = productoBuscado.descripcion;
  imagen.value = productoBuscado.imagen;
  precio.value = productoBuscado.precio;
  categoria.value = productoBuscado.categoria;
};

function actualizarProducto() {
  let posicionProductoBuscado = listaProductos.findIndex(
    (Producto) => codigo.value === Producto.codigo
  );
  listaProductos[posicionProductoBuscado].nombreProducto = nombreProducto.value;
  listaProductos[posicionProductoBuscado].descripcion = descripcion.value;
  listaProductos[posicionProductoBuscado].imagen = imagen.value;
  listaProductos[posicionProductoBuscado].precio = precio.value;
  listaProductos[posicionProductoBuscado].categoria = categoria.value;
  generarProductoEnLocalStorage();
  actualizarTabla();
  Swal.fire(
    "Producto actualizado",
    "Los datos del producto fueron actualizados",
    "success"
  );
  modalProducto.hide();
  limpiarFormulario();
}
