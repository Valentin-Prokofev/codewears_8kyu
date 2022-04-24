// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Solution:

function digitize(n) {
    const res = ("" + n).split("").map(Number).reverse()
    return res
}