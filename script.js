
export class LinkedList {
    constructor(value, array, head, last){
        this.value = value;
        this.head = new Node("first", null);
        this.last = this.head;
    }

    append(value){
        let oldLast = this.last;
        this.last = new Node (value, null);
        oldLast.nextNode = this.last;

    }

    prepend(value){
        Node(value, firstNode);
    }

    size(){
        let size = 0;
        let currentNode = this.head;
        console.log(currentNode);
        while (currentNode.getNextNode() !== null) {
            console.log(currentNode);
            size++;
            currentNode = currentNode.getNextNode();
        }
        return size;
    }

    head(){

    }

    tail(){

    }

    at(index){

    }

    pop(){
        this.array.pop(lastNode);
    }

    contains(value){

    }

    findIndex(value){

    }

    toString(){
        return "...";
    }
}

export class Node {

    constructor(value, nextNode){
        this.value = null;
        this.nextNode = null;
    }

    getNextNode(){
        return this.nextNode;
    }

}