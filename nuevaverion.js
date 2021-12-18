const valora = 1
const valorb = parseInt (prompt ("valor b"));
const valorc = parseInt (prompt ("valor c"));


let menos_b = valorb * -1; //menos b
let loDeAdentro = (valorb * valorb) - (4 * valora * valorc);
console.log(loDeAdentro)
let raizcuadrada = Math.sqrt (loDeAdentro);//RAIZ CUADRADA
let result_1= (menos_b + raizcuadrada) / (2 * valora);// primer resultado
let result_2= (menos_b - raizcuadrada) / (2 * valora);// primer resultado

document.write ("tu resultado x1=" + result_1);
document.write ("tu resultado x2="+ result_2);
