function setIthBit(n, i) {
    let result = n | (1 << (i-1));
    console.log(result);
}

setIthBit(24, 2);
