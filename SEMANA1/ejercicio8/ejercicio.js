const precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
const precioFinal = precioProducto * 1.19;

console.log(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);
