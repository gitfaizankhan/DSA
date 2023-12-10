function maxElement(arr) {
    let n = arr.length;
    var max = arr[0];
    for(let i = 1; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [5,4,7,2,6];
let result = maxElement(arr);
console.log(result);