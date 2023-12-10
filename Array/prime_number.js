function prime_number(n) {
    let number = 2;
    let arr = [n];
    let count = 0;

    while(count < n) {
        let flag = true;
        for(let i = 2; i < Math.floor(number/2); i++) {
            if(number % i == 0) {
                flag = false;
                break;
            }
        }

        if(flag == true) {
            arr[count] = number;
            count = count+1;
        } 
        number = number+1;
    }
    return arr;
}

let result = prime_number(5);
console.log(result);