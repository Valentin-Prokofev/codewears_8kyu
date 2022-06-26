function vertMirror(string) {  //"lVHt\nJVhv\nCSbg\nyeCt"

    return string.split("\n")
        .map(line=>line.split("").reverse().join(""))
        .join("\n")
}

// console.log(vertMirror("lVHt\nJVhv\nCSbg\nyeCt"));

//
function horMirror(string) {
    return string.split("\n")
        .reverse()
        .join("\n")
}

console.log(horMirror("lVHt\nJVhv\nCSbg\nyeCt"));

