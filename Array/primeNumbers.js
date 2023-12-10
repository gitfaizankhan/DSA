function primeNumbers(n) {
    let arr = new Array(n);
    let count = 0;
    let element = 2;

    while(count < n) {
        let flag = true;
        for(let i = 2; i < Math.floor(element/2); i++) {
            if(element%i == 0) {
                flag = false;
                break;
            }
        }

        if(flag) {
            arr[count] = element;
            count++;
        }
        element++;
     }
     return arr;
}

let result = primeNumbers(8);
console.log(result);