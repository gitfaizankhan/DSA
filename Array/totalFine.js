function totalFine(n, date, car, fine) {
    let i;
    let sum = 0;
    if(date % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }

    for(i; i < n; i += 2) {
        console.log(i);
        sum += fine[i];
    }
    return sum;
}

let result = totalFine(3, 7, [2222, 2223, 2224], [200, 300, 400]);
console.log(result);