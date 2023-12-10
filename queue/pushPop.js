function push(arr, n) {
    let queue = [];
    for(let i = 0; i < n; i++) {
        queue.push(arr[i]);
    }
    return queue;
}

function pop(queue) {
    let length = queue.length;
    let result = "";
    for(let i = 0; i < length; i++) {
        result += queue.shift() +" ";
    }
    console.log(result.trim());
}

const queue = push([1,2,3,4,5], 5);
pop(queue);