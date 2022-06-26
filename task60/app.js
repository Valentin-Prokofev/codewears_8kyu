function strong(n) {
    // let arr = String(n)
    let y = String(n)
    let x = [...`${n}`]
    console.log(x, y)
    let res = Array.from(String(n), (c) => {
        let x = 1;
        for (let i = 1; i <= c; i++) {
            x = x * i
        }
        return x
    }).reduce((acc, x) => {
        return acc + x
    }, 0)
    if (res !== n) {
        return "Not Strong !!"
    } else {
        return "STRONG!!!!"
    }
}

console.log(strong(123))