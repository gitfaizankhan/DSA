// In an array, every number present twice except one number. find that numbers in o(N);

function numberNotTwice(arr) {
    let n = arr.length;
    let result = 0;
    for(let i = 0; i < n; i++) {
        result ^= arr[i];
    }
    console.log(result);
}

numberNotTwice([2,3,4,1,2,1,3,6,4]);