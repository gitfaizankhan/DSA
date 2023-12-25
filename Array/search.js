var search = function(arr, N, X) {
    
    for(let i = 0; i < N; i++) {
        if(arr[i] === X) {
            return i;
        }
    }
    return -1;
}

let result = search([1,2,3,4,5], 5, 3);
console.log(result);