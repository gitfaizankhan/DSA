function rotate(arr,n){

    for(let i = n-1; i > 0; i--) {
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}

let result = rotate([9, 8, 7, 6, 4, 2, 1, 3], 8);
console.log(result);