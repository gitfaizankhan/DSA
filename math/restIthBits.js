function restIthBit(n, i) {
    let resutl = n & (~(1 << (i-1)));
    console.log(resutl);
}


restIthBit(86, 5);