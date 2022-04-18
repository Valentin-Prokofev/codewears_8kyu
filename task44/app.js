//Write a method, that will get an integer array as parameter and will process every number from this array.
//
// Return a new array with processing every number of the input-array like this:
//
// If the number has an integer square root, take this, otherwise square the number.
// Solution:

console.log(1)

function squareOrSquareRoot(array) {
    let res = array.map(el => {
        return Number.isInteger(Math.sqrt(el))
            ? Math.sqrt(el)
            : el ** 2
    })
    return res;
}

let arr = [1, 2, 3, 4, 5]
squareOrSquareRoot(arr)
console.log(squareOrSquareRoot(arr))
