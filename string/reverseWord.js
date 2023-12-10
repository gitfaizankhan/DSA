function reverseWord(str) {
    let n = str.length;
    let result = "";
    for(let i = 0; i < n; i++){
        result = str[i]+result;
    }
    return result;
}

let result = reverseWord("faizan");
console.log(result);