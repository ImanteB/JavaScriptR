//CREAT a function that checks if the argument is an integer or a string. Rturn "int" if it's integer and "str" if it is's a string.
//1 var.
function intOrString(x) {
    if (Number.isInteger(x)) {
        return "int";
    } else {
        return "str";
    }
}
let x = 8;
console.log(intOrString(x));

//2var.
function isNumberOrString(value) {
    if (typeof value === 'number')
      console.log('int');
    else if(typeof value ==='string'){
      console.log('string');
    }
    else console.log('other data type')
  }
  isNumberOrString();




//fix the code si that i declared in the if statment is a separate variable
//than i declared in the first line of the function.
//be certain not to use the var keyword anywhere in your Code.
//example: function checkScope(){
//function checkScope(){
// var  i ="function scope";
// if (true){
//  i = "block scope";
// console.log("Block scope i is:", i);
// }
// console.log("Function scope i is:", i);
// return i;
//}
function checkScope() {
    let i = "function scope";
  
    if (true) {
      let i = "block scope";
      console.log("Block scope i is:", i);
    }
  
    console.log("Function scope i is:", i);
    return i;
  }




//rewrite the function assigned to the variable magic whitch returns a new Date() to use arrow 
//function syntax. also, make sure nothitg is definde using the keyword var.
//example:
var magic = function(){
    return new Date();
};

const magic = () => new Date();
console.log(magic());