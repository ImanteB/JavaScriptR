
// Krepšininkų uždavinys
//let krepsininkai = [23, 9, 11, 57, 69];
//let tritaskiai = [2, 5, 6, 1, 2];
//1.vidutinsi krepšininko ūgį? ats.:202.2
let ugiai = [211, 195, 199, 215, 191];
let sum = 0;
for (let i=0; i < ugiai.length; i++){
  sum = sum +ugiai[i];
}
let average = sum/ugiai.length;
console.log(average);

//2.Raskite kiek krepšininkų yra didesnių už vidutinį ūgį? ats.:2
let count=0;
for (let i=0; i < ugiai.length; i++){
  if(ugiai[i] > average){
  count++;
  }
}
console.log(count);
//3. Raskite aukščiausio krepšininko dvitaškių skaičių? ats.: 14
//1 var.
let ugis = [211, 195, 199, 215, 191];
let dvitaskiai = [15, 20, 98, 14, 48];

let maxUgis = ugis[0];
let dvitaskiaiOfMaxUgis = 0;

for (let i = 1; i < ugis.length; i++) {
  if (ugis[i] > maxUgis) {
    maxUgis = ugis[i];
    dvitaskiaiOfMaxUgis = i;
  }
}
console.log(dvitaskiai[dvitaskiaiOfMaxUgis]);

// 2, var Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 14
let ugiai = [211, 195, 199, 215, 191];
const max = Math.max(...ugiai);
const index = ugiai.indexOf(max);
let dvitaskiai = [15, 20, 98, 14, 48];
console.log('aukščiausio krepšininko dvitaškių skaičius = '+dvitaskiai[index])

//3 var.
let tallest = Math.max(...ugiai);
const tallestCount = dvitaskiai[ugiai.indexOf(tallest)];
console.log(tallestCount);




//4. Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ats.:2 ir 69
let krepsininkai = [23, 9, 11, 57, 69];
let tritaskiai = [2, 5, 6, 1, 2];
let ugiai = [211, 195, 199, 215, 191];
const min = Math.min(...ugiai);
const index = ugiai.indexOf(min);
console.log('žemiausio krepšininko tritaškių skaičius = '+tritaskiai[index]+ ''+'ir marškinėlių nr = '+krepsininkai[index])


//2 variantas
const min = Math.min(...ugiai);
const index = ugiai.indexOf(min);
console.log('žemiausio krepšininko tritaškių skaičius = '+ tritaskiai[index]+' '+'ir marškinėlių nr = '+krepsininkai[index])

