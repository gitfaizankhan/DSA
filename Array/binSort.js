function binSort(A, N) {
    let zero = 0;

    for(let i = 0; i < N; i++) {
        if(A[i] === 0) {
            zero++;
        }
    }

    for(let i = 0; i < zero; i++) {
        A[i] = 0;
    }

    for(let i = zero; i < N; i++) {
        A[i] = 1;
    }
    return A;
}

let result = binSort([1, 0, 1, 1, 1, 1, 1, 0, 0, 0], 10);
console.log(result);