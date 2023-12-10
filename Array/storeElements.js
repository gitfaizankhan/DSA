function storeElements(number) {
    let arr = new Array(number);
    for(let i = 1; i <= number; i++) {
        arr[i-1] = i;
    }
    return arr;
}


let result = storeElements(15);
console.log(result);