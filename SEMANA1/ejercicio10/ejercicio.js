const precioProducto = parseFloat(prompt("Ingrese el precio del producto: "));
const precioConDescuento = precioProducto * 0.9;

console.log(`El precio final con descuento es: ${precioConDescuento.toFixed(2)}`);
const numero = parseFloat(prompt("Ingrese un número: "));
const valorAbsoluto = Math.abs(numero);

console.log(`El valor absoluto de ${numero} es: ${valorAbsoluto}`);
