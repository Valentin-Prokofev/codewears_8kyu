// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//My Solution
function makeNegative(num) {
    let res
    if (Math.sign(num) < 0) {
        res = num
    }else {
        res = +("-" + num.toString())
    }
    return res
}

//Else Solutions:

function makeNegative(num) {
    return -Math.abs(num);
}

function makeNegative(num) {
    return num < 0 ? num : -num;
}