function firstRepeated(A) {
    let myMap = new Map();
    for (let i = 0; i < A.length; i++) {
        if (myMap.has(A[i])) {
            let temp = myMap.get(A[i]);
            temp.push(i);
            myMap.set(A[i], temp);
        } else {
            myMap.set(A[i], [i]); // Initialize temp as an array
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (myMap.get(A[i]).length > 1) { // Check if the length of temp is greater than 1
            return A[i];
        }
    }
    return -1;
}

let A = [10, 5, 3, 4, 3, 5, 6];
let result = firstRepeated(A);
console.log(result);
