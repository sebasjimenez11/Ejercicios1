const precio = parseFloat(prompt("Ingrese el precio del electrodoméstico: "));
const meses = parseInt(prompt("Ingrese el plazo en meses: "));
const precioCredito = precio * Math.pow(1.05, meses);
const cuotaMensual = precioCredito / meses;

console.log(`El precio total a crédito es: ${precioCredito.toFixed(2)}`);
console.log(`La cuota mensual será: ${cuotaMensual.toFixed(2)}`);
