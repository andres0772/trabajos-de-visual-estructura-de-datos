var tienda = [];

const agregarProducto = (nombre, precio, cantidad) => {
  tienda.push({ nombre, precio, cantidad });
}

const actualizarCantidad = (nombre, cantidad) => {
  var producto = tienda.find((p) => p.nombre === nombre);//se utiliza el  find para que recorra la lista en busca del nombre del producto
  if (producto) producto.cantidad = cantidad;
}

const mostrarProductos = () => {
  console.log("Lista de productos:");
  tienda.forEach((producto, indice) => {
    console.log(`#${indice + 1} - ${producto.nombre} precio $${producto.precio} cantidad = ${producto.cantidad}`);
  });
}

// Ejemplo de su uso
agregarProducto("Camisa", 20, 10);
agregarProducto("Pantalones", 30, 5);
agregarProducto("Zapatos", 50, 8);
agregarProducto("gorro", 15, 5);

mostrarProductos();
//actualizacion de nuevos productos que se agregen
actualizarCantidad("Camisa", 15);//se agrega el nombre del producto y la cantidad que hay
actualizarCantidad("Pantalones", 10);
actualizarCantidad("Zapatos", 8);
actualizarCantidad("gorro", 4, );
mostrarProductos();