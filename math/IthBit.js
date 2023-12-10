
function iThBit(n, i) {
    let result = n & (1 << (i-1));
    console.log(result);
}

iThBit(20, 3)