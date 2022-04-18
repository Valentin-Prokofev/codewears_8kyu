console.log(1)
// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

//Solution:

function sameCase(a, b) {
    if (a !== String(a) || b !== String(b) || !(a.match(/[a-z]/i)) || !(b.match(/[a-z]/i))) {
        return -1
    } else if ((a === a.toUpperCase() && b === b.toUpperCase()) || (b === b.toUpperCase() && a === a.toUpperCase())
    || ((a !== a.toUpperCase() && b !== b.toUpperCase()) || (b !== b.toUpperCase() && a !== a.toUpperCase())) ){
        return 1
    } else {
        return 0
    }
}