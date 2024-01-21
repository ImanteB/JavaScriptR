/*Trikampis (Tema: funkcijos)
Užduotis buvo spręsta 2024-01-10.
Naudojant šios užduoties formatą, išsirinkti kitą figūrą ir apskaičiuoti jos plotą, atlikti būtinus patikrinimus ir pateikti atsakymą (3 funkcijos).
STACIAKAMPIS (Tema: funkcijos)
1. Parašykite funkciją, kuri apskaičiuoja staciakampio plotą, kai duotos dvi staciakampio kraštinės.
2. Parašykite funkciją, kuri patikrina, ar iš duotų staciakampiu kraštinių galima sudaryti staciakampi.
3. Parašykite funkciją, kuri atspausdina atsakymą tokiu formatu:
"Staciakampis, kurio kraštinės a = 1, b = 1  plotas yra: 1"
ARBA
"Staciakampis, kurio kraštinės a = 1, b = 9 neegzistuoja.
Duota:
Kraštinių a, b, c ilgiai, surašyti į masyvą. ploto formulė A = a*b */

//1.
let a = [2, 2, 3, 4, -1];
let b = [2, 2, 0, 5, 7];
let area;

let calculateRectangleArea = (a,b) => a*b;

//2.3
let isPossibleToFormRectangle =(a,b) => ((a>0 && b>0)?"possible":"not possible");


a.forEach((currentA, index) => {
    let currentB = b[index];
    let area = calculateRectangleArea(currentA, currentB);
    let possibility = isPossibleToFormRectangle(currentA, currentB);

    console.log(`Rectangle, witch a=${currentA}, b = ${currentB}  area = ${area}, means, that: ${possibility}`)
});
