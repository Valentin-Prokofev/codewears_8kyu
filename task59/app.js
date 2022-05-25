function encode(str, n) {
    const key = String(n)

    let res = Array.from(str, (c, i) => {
       return c.charCodeAt(0) - 96 + Number(key[i % key.length])
    })

    return res
}


console.log(encode("yo", 54))