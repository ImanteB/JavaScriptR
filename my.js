// 1. Task
/**
* Calculates the area of a rectangle.
* @param {number} length - The length of the rectangle.
* @param {number} width - The width of the rectangle.
* @returns {number} The area of the rectangle. before example: 2, 3 after example: 6
*/
// Hints to help solve the task:
// 1. The area of a rectangle is calculated by multiplying its length and width.
// 2. Create a function that takes the length and width as parameters.
// 3. Use the formula `area = length * width` to calculate the area.
// 4. Return the calculated area.

function rectangle (length, width){
    let area = length*width
    return area
}
let calc = rectangle (2,3)
console.log(calc)

