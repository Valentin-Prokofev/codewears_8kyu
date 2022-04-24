// Complete the function which converts a binary number (given as a string) to a decimal number.

//Solution:
function binToDec(bin){
    let res = bin.split("").map(Number)
    let result = res.reduce(function(sum, current) {
        return sum * 2 + current;
    }, 0);
    console.log(result)
    return result
}