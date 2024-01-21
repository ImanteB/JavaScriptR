//Trikampio kraštinės (atskirai) surašytos į masyvą.
function calculateTriangleArea(side1, side2, side3) {
    let p = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    return area;
}

let a = [1, 6, 8, 7, 9];
let b = [1, 6, 5, 7, 4];
let c = [1, 2, 5, 4, 7];

for (let i = 0; i < a.length; i++) {
    let area = calculateTriangleArea(a[i], b[i], c[i]);
    console.log(`Triangle ${i + 1}: Area = ${area}`);
}

//papildymas reikia parašyti funciją. ar iš duotų trikampio kraštinių galima sudaryti trikampį
function isPosibleToCalcTriangle(a, b, c) {
    let posibleOrNot;
    if (b + c > a && a + c > b && a + b > c) {
        posibleOrNot = "posible";
    } else {
        posibleOrNot = "not posible";
    }
    return posibleOrNot;
}
console.log(isPosibleToCalcTriangle(10, 20, 15))

//trumpinimas
function isPosibleToCalcTriangle(a, b, c) {
    return (b + c > a && a + c > b && a + b > c);
}

let a = 16, b = 8, c = 20;
console.log((b + c > a && a + c > b && a + b > c))


//Panaudoti sukurtą funciją isPosibleToCalcTriangle, akd patikrintų ir atspausdintų: - trikampio sudaryti negalima; - `Triangle ${i + 1}: Area = ${area}`
// Trikampio kraštinės (atskirai) surašytos į masyvą.
// Turime 5 trikmapius.
// Trikampio kraštinės (atskirai) surašytos į masyvą.
// Turime 5 trikmapius.
let borderOne = [5, 6, 8, 7, 9]; 
let borderTwo = [8, 6, 5, -7, 4]; 
let borderThree = [10, -2, 5, 4, 7]
let area;
function calcTriangleArea(borderOne, borderTwo, borderThree){
    let p = (borderOne + borderTwo + borderThree)/2;
    return Math.sqrt(p * (p - borderOne) * (p - borderTwo) * (p - borderThree));
}
function isTrue(a,b,c){
    return (b + c > a && a + c > b && a + b > c);
}

for (let i = 0; i < borderOne.length; i++) {
    let isPossible = isTrue(borderOne[i], borderTwo[i], borderThree[i]);
    if (isPossible){
        area = calcTriangleArea(borderOne[i], borderTwo[i], borderThree[i]);
        console.log(`Triangle ${i + 1}: Area = ${area}`);
    } else {
        console.log('Impossible to create a triangle.');
    }
}


//Parašykite funkciją, kuri atspausdina atsakymą tokiu formatu:
//"Trikampis, kurio kraštinės a = 1, b = 1 ir c = 1, plotas yra: 1"
//"Trikampis, kurio kraštinės a = 1, b = 9 ir c = 1, neegzistuoja.


function printTriangleInfo(a,b,c,area){
    if(area){
    console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, plotas yra: ${area}`); }
    else {console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, neegzistuoja.`);}
  }
  let a=3, b=5, c=16, plotas = 38;
  printTriangleInfo(a,b,c,plotas);
  

  ///____________VISAS KODAS PILNAS PABAIGTAS TEISINGAS__________________________:
  //Trikampio kraštinės (atskirai) surašytos į masyvą.
function calculateTriangleArea(side1, side2, side3) {
    let p = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    return area;
}

let a = [1, 6, 8, 7, 9];
let b = [1, 6, 5, 7, 4];
let c = [1, 2, 5, 4, 7];

for (let i = 0; i < a.length; i++) {
    let area = calculateTriangleArea(a[i], b[i], c[i]);
    console.log(`Triangle ${i + 1}: Area = ${area}`);
}

//papildymas reikia parašyti funciją. ar iš duotų trikampio kraštinių galima sudaryti trikampį
function isPosibleToCalcTriangle(a, b, c) {
    let posibleOrNot;
    if (b + c > a && a + c > b && a + b > c) {
        posibleOrNot = "posible";
    } else {
        posibleOrNot = "not posible";
    }
    return posibleOrNot;
}
console.log(isPosibleToCalcTriangle(10, 20, 15))

//trumpinimas
function isPosibleToCalcTriangle(a, b, c) {
    return (b + c > a && a + c > b && a + b > c);
}

let a = 16, b = 8, c = 20;
console.log((b + c > a && a + c > b && a + b > c))


//Panaudoti sukurtą funciją isPosibleToCalcTriangle, akd patikrintų ir atspausdintų: - trikampio sudaryti negalima; - `Triangle ${i + 1}: Area = ${area}`
// Trikampio kraštinės (atskirai) surašytos į masyvą.
// Turime 5 trikmapius.
// Trikampio kraštinės (atskirai) surašytos į masyvą.
// Turime 5 trikmapius.
let borderOne = [5, 6, 8, 7, 9]; 
let borderTwo = [8, 6, 5, -7, 4]; 
let borderThree = [10, -2, 5, 4, 7]
let area;
function calcTriangleArea(borderOne, borderTwo, borderThree){
    let p = (borderOne + borderTwo + borderThree)/2;
    return Math.sqrt(p * (p - borderOne) * (p - borderTwo) * (p - borderThree));
}
function isTrue(a,b,c){
    return (b + c > a && a + c > b && a + b > c);
}

for (let i = 0; i < borderOne.length; i++) {
    let isPossible = isTrue(borderOne[i], borderTwo[i], borderThree[i]);
    if (isPossible){
        area = calcTriangleArea(borderOne[i], borderTwo[i], borderThree[i]);
        console.log(`Triangle ${i + 1}: Area = ${area}`);
    } else {
        console.log('Impossible to create a triangle.');
    }
}


//Parašykite funkciją, kuri atspausdina atsakymą tokiu formatu:
//"Trikampis, kurio kraštinės a = 1, b = 1 ir c = 1, plotas yra: 1"
//"Trikampis, kurio kraštinės a = 1, b = 9 ir c = 1, neegzistuoja.


function printTriangleInfo(a,b,c,area){
    if(area){
    console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, plotas yra: ${area}`); }
    else {console.log(`Trikampis, kurio kraštinės a = ${a}, b = ${b} ir c = ${c}, neegzistuoja.`);}
  }
  let a=3, b=5, c=16, plotas = 38;
  printTriangleInfo(a,b,c,plotas);