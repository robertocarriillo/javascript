const ladoa = parseInt (prompt ("Ingrese lado A"));
 const ladob = parseInt (prompt ("Ingrese lado B"));
let multiplicara =ladoa * ladoa;
console.log(multiplicara);
let multiplicarb =ladob* ladob;
console.log(multiplicarb);
let sumac = multiplicara + multiplicarb;
console.log(sumac);
const raizcuadrada= Math.sqrt (sumac);
document.write ("tu resultado es = " + raizcuadrada);