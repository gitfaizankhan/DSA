class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head;
function display(head) {
    let curr = head;
    let result = "";
    while(curr) {
        result += curr.data+" ";
        curr = curr.next;
    }
    console.log(result.trim());
}

function push(data) {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);

display(head);