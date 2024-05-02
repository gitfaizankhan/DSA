class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null; // Renamed from 'top'
    }

    push(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    isEmpty() {
        return this.head === null; // Fixed condition
    }

    peek() {
        if (!this.isEmpty()) {
            return this.head.data;
        } else {
            return "Stack is empty";
        }
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        let data = this.head.data;
        this.head = this.head.next;
        return data;
    }
}

let stack = new LinkedListStack();
stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.isEmpty()); // Output: false
console.log(stack.peek());    // Output: 15 (top element)
console.log(stack.pop());     // Output: 15 (removed element)
