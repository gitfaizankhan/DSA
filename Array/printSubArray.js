function subArray(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {

        for(let j = i; j < n; j++) {
            let result = ""
            for(let k = i; k <= j; k++) {
                result = result +" "+ arr[k]
            }
            console.log(result); 
        }
    }
}

subArray([1,2,3,4,5]);