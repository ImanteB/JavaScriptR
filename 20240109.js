//DAUGYBOS LENTELĖ
//1 VAR.
for (let i = 1; i<=10; i++){
    for(let j = 1; j<=10; j++){
      console.log(i+'*'+j);
    }
  }

  //2.VAR
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      console.log(i + "*" + j+ "=" + i * j);
    }
  }

  //FUNKCIJOS//
  //4. Write a function (return) to compute the sum of the digits in an integer.  
//Input an integer: 25
//The sum is 7  
//1var.
function sumOfDigits(integer) {
    const digits = String(integer);
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
    return sum;
  }
  const inputInteger = 25;
  const result = sumOfDigits(inputInteger);
  console.log(`The sum of the digits in ${inputInteger} is ${result}`);

//2 var.

function sum(num){
    return num.toString().split("").reduce((sum,digit) =>sum +parseInt(digit),0);
    console.log(sum(25));
}



//6. Write a function (return) to calculate the area of a triangle. 
//Input Side-1: 10  
//Input Side-2: 15  
//Input Side-3: 20  
//The area of the triangle is 72.6184377413890
function calculateTriangleArea (side1,side2,side3){
    let p=(side1+side2+side3)/2
    let area = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3))
    return area
}
console.log(calculateTriangleArea(10,15,20))