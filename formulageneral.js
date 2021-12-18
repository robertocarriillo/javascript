const valora = 1
const valorb = parseInt (prompt ("valor b"));
const valorc = parseInt (prompt ("valor c"));


let multiplicacionNeg = valorb * -1; //menos b
console.log(multiplicacionNeg)
let elevacionCuadrad = valorb * valorb;// b cuadrada
console.log(elevacionCuadrad) 
let multiplicaciona = 4 * valora;
console.log(multiplicaciona)
let multiplicacionc= multiplicaciona * valorc; //4 ac
console.log (multiplicacionc)
let multipliDiv= valora * 2;// 2a
console.log (multipliDiv)
let restadentroRaiz = elevacionCuadrad - multiplicacionc;
console.log(restadentroRaiz)
let raizcuadrada = Math.sqrt (restadentroRaiz);
console.log(raizcuadrada)
let sumax1 = elevacionCuadrad + raizcuadrada;
let division1 = sumax1 / multipliDiv;
let sumax2 = elevacionCuadrad - raizcuadrada;
let division2 = sumax2 / multipliDiv;

document.write ("tu resultado x1=" + division1);
document.write ("tu resultado x2="+ division2);