//Linked lists work by storing a series of nodes.
//Each node consists of a value and a pointer to the next node in the sequence.
//This type of linked list = singly linked list
//doubly linked list = nodes contain a pointer to previous node AND next node

//implementation of generic node class

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

//node class is named with an underscore
//underscore indicates node class is private class that should not be accessible by anyone else other than
//the linked list class

//any time the linked list class wants to create a new node, it reates an instance of the node class
//node class's constructor accepts a variable value that holds data
//each node also has a next variable that servers as a pointer to next node

//build a linked list

class LinkedList {
    constructor() {
        this.head = null;
    }
}
//linked list has a "head" to indicate beginning of list
//head always contains first node
//in this case, we start wtih an empty list, represented by null

//Insertion
//there can be 3 different implementations of the insert operation in a list
//an item can be inserted:
////at beginning of list (insertFirst)
////at end of list (insertLast)
////anywhere in list, between two nodes (insert, insertAt)

//insert at beginning of list can be achieved by following steps:
////create a new node item
////point the head to that new node

/*
insertFirst(item) {
    this.head = new _Node(item, this.head);
}
*/


//Inserting at the end of list is more complex; steps:
////create new node item
////check to see if list is empty
//////if is: insert new item as only item in list
////start at beginning of list and move through list until reach end of list
////set end node's next pointer to new node
////new node's next pointer is null (indicating that the new node is now the last node on list)

/*
insertLast(item) {
    if(this.head === null) {
        this.insertFirst(item);
    }
    else {
        let tempNode = this.head;
        while(tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
    }
}
*/

//insertFirst = O(1)  since length doesn't matter, it gets inserted first

//insertLast = O(n) since it requires iterating over all the nodes individually in sequence until reach end

//Retrieval
//straightforward, just traverse list, compare value stored in each node with value searching for
//when item is found, return node
//retrieval (find) operation:

/*
find(item) {
    //start at head
    let currNode = this.head;

    //if list is empty
    if(!this.head) {
        return null;
    }

    //check for item
    while (currNode.value !== item) {

        //return null if it's at end of list, and item is not on list
        if (currNode.next === null) {
            return null;
        }
        else {
            //otherwise, keep looking
            currNode = currNode.next
        }
    }
    //found it
    return currNode;
}

*/

//Removal
//When deleting an item, 3 cases:
////delete from beginning of list
////delete from end of list
////delete node between 2 other nodes


//if you delete first item in a list (head) you need to change the head to indicate new first item in list

//if deleting node between 2 others:
////you  find the node before the node-to-be-removed and update its next pointer to skip over removed node

/* 
remove(item){
    //if list empty
    if(!this.head) {
        return null;
    }

    //if node to be removed is head (first node), make the next node the head
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }

    //start at head
    let currNode = this.head;

    //keep track of previous
    let previousNode = this.head;

    whle ((currNode !== null) && (currNode.value !== item)) {

        //save the previous node
        previousNode = currNode;
        currNode = currNode.next;
    }

    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.nexft = currNode.next;
}


Best case performacne is O(1)
average and worst: O(n) due to finding node you want to remove

*/


//cache locality
//why arrays are more often used than linked lists:
////theory is that if you access some data, the likelihood is that you want to access nearby data too
//when CPU tries to access data it loads it directly from RAM (memory access relatively slow)
//to speed things up, CPU manufacturers started introducing small memory caches into processor itself
//when process accesses data from memory, it also loads some of the data stored nearby into the caches
//works well for arrays since stored in contiguous memory, from where a big chunk of array gets loaded
//into caches, gives fast access to values

//linked lists however are spread throughout memory, so it's unlikely that subsequent nodes will get loaded
//into caches => performance penalty since CPU will have to load far more data from the RAM