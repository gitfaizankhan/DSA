function nthThimePresent(arr) {
    let n = arr.lenght;
    let result = 0;
    for(let i = 0; i < n; i++) {
        result = result & arr[i];
    }
    console.log(result);
    let d = result % 3;
    console.log(d);
}

nthThimePresent([2,2, 3,2,7,7,8,7,8,8]);