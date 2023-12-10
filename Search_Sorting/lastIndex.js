function lastIndex(s) {
    let n = s.length-1;
    for(let i = n; i >= 0; i--) {
        if(s[i] == 1) {
            return i;
        }
    }
    return -1;
}

let result = lastIndex("0101101100");
console.log(result);