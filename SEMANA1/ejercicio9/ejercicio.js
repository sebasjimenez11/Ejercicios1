const precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
const precioConDescuento = precioProducto * 0.9;

console.log(`El precio final con descuento es: ${precioConDescuento.toFixed(2)}`);
