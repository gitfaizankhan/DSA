class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(element) {
        let newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if(this.top == null) {
            return 'Stack Underflow';
        }
        let poppedNode = this.top;
        this.top = this.top.next;
        return poppedNode.data;
    }

    peek() {
        if(this.top == null) {
            return 'Stack is empty'
        }
        return this.top.data;
    }

    isEmpty() {
        return this.top == null;
    }
}

let stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());