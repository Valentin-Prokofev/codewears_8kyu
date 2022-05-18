// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
//
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// solution:

function stringClean(s){
    debugger
    // Function will return the cleaned string
    let strArr = s.split('')
    console.log(strArr)
    let newArr = []
    for (let i = 0; i < strArr.length; i++) {
        if(typeof(strArr[i]) !== "number"
            && strArr[i] !== "1"
            && strArr[i] !== "2"
            && strArr[i] !== "3"
            && strArr[i] !== "4"
            && strArr[i] !== "5"
            && strArr[i] !== "6"
            && strArr[i] !== "7"
            && strArr[i] !== "8"
            && strArr[i] !== "9"
            && strArr[i] !== "0"
        ) {
            newArr.push(strArr[i])
        }
    }
    console.log(newArr)
    console.log(newArr.join(""))
    return newArr.join("")
}

console.log(stringClean("! !"))

//else solution:

function stringClean(s){
    return s.replace(/\d/g, "");
}

function stringClean(s){
    return s.replace(/[0-9]/g, '');
}

function stringClean(s){
    while(s.indexOf(0) >= 0) {s = s.replace(0, '')}
    while(s.indexOf(1) >= 0) {s = s.replace(1, '')}
    while(s.indexOf(2) >= 0)  {s = s.replace(2, '')}
    while(s.indexOf(3) >= 0)  {s = s.replace(3, '')}
    while(s.indexOf(4) >= 0)  {s = s.replace(4, '')}
    while(s.indexOf(5) >= 0)  {s = s.replace(5, '')}
    while (s.indexOf(6) >= 0)  {s = s.replace(6, '')}
    while (s.indexOf(7) >= 0)  {s = s.replace(7, '')}
    while (s.indexOf(8) >= 0)  {s = s.replace(8, '')}
    while (s.indexOf(9) >= 0)  {s = s.replace(9, '')}
    return s
}