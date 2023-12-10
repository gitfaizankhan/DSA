function immediateSmaller(arr, n){
    let stack = []
    for(let i = 0; i < n; i++) {
        if(i < n-1 && arr[i] > arr[i+1]){
            stack.push(arr[i+1]);
        } else {
            stack.push(-1);
        }
    }
    return stack;
}

const result = immediateSmaller([4, 2, 1, 5, 3], 5);
console.log(result);