class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    addNode(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    display() {
        let curr = this.head;
        let result = "";
        while(curr) {
            result += curr.data +" ";
            curr = curr.next;
        }
        console.log(result.trim());
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        let temp;
        while(curr){
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        this.head = prev;
    }
}

let list = new LinkedList();

// add node data
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);

// display node data
list.display();

// reverse node
list.reverse();

//  display node data
list.display();