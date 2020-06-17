//create linked list class

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }


    insertFirst(item) {
        this.head = new _Node(item, this.head)
    };

    insertLast(item) {
        // if the head is null, it means the list is empty, insert the item at the beginning of the list
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(item, target) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        let prevNode = this.head;

        while (currNode.value !== target) {
            if (currNode.next === null) {
                return null;
            }
            else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        prevNode.next = new _Node(item, currNode)
    }

    insertAfter(item, target){
        if (!this.head) {
            return null;
        }
        let currNode = this.head;

        while (currNode.value !== target) {
            if (currNode.next == null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        currNode.next = new _Node(item, currNode.next)
    }

    insertAt(item, position) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;
        let prevNode = this.head;

        let index = 0;

        while (index < position) {
            if (currNode.next === null) {
                return null;
            }

            else {
                prevNode = currNode;
                currNode = currNode.next;
                index ++
            }
        }
        prevNode.next = new _Node(item, currNode)
    }

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

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found.');
            return;
        }
        prevNode.next = currNode.next;
    };
}


//write a function, main. Within function, using linked list class above,
//create linked list with name SLL
//add following items to list: Apollo, Boomer, Helo, Husker, Starbuck
//Add Tauhida to list //Apollo, Boomer, Helo, Husker, Starbuck, Tauhida
//Remove Husker from list //Apollo, Boomer, Helo, Starbuck, Tauhida
//implement function called insertBefore() in class that asserts a new node after a node containing key
//implement a function called insertAt() that inserts an item at a specific position in linked list
//Add Athena before Boomer using insertBefore() //Apollo, Athena, Boomer, Helo, Starbuck, Tauhida
//Add Hotdog after Helo using insertAfter() //Apollo, Athena, Boomer, Helo, Hotdog, Starbuck, Tauhida
//Insert Kat in 3rd position of list using insertAt() //Apollo, Athena, Kat, Boomer, Helo, Hotdog, Starbuck, Tauhida

function main() {
    const SLL = new LinkedList;

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 2);
    SLL.insertLast('Angela')
    return SLL;
};
let SLL_LinkedList = main()

//console.log(SLL_LinkedList)

//supplemental functions

//display returns linked list
function display(linkedList) {
    let items = [];

    if (linkedList.head === null) {
        return 'Linked list is empty.'
    }
    else {
        listItem = linkedList.head
        console.log(listItem)
    }
    while (listItem.next !== null) {
        console.log(listItem.value);
        listItem = listItem.next;
    }
    console.log(listItem.value)

}
//display(SLL_LinkedList)

//size returns size of linked list
function size(list) {
    if (!list.head) {
        return null;
    }
    let currNode = list.head;
    let count = 0;
    while ((currNode !== null) && (currNode.value !== null)) {
        count++
        currNode = currNode.next
    }
    return count;
}
size(SLL_LinkedList)
//console.log(size(SLL_LinkedList))

//isEmpty = finds if list is empty or not without using size function
function isEmpty(linkedList) {
    if (linkedList.head === null) {
        return 'Linked list is empty.'
    }
    else {
        return 'No, the linked list is not empty.'
    }
}
isEmpty(SLL_LinkedList)
//console.log(isEmpty(SLL_LinkedList))

//Find previous - finds node before item you're looking for.
function findPrevious(linkedList, item) {
    if (linkedList.head === null) {
        return 'List is empty; target item and previous node not found.'
    }
    let prevNode = linkedList.head;
    let currNode = linkedList.head;

    while (currNode.value !== item) {
        if (currNode.next === null) {
            return 'Item not found.'
        }
        prevNode = currNode;
        currNode = currNode.next;
    }
    return prevNode
}
findPrevious(SLL_LinkedList,"Athena")
//console.log(findPrevious(SLL_LinkedList, "Athena"))
//should log Apollo

//findLast - returns last node of linked list.
function findLast(linkedList) {
    let items = [];

    if (linkedList.head === null) {
        return 'Linked list is empty.'
    }
    else {
        listItem = linkedList.head
        console.log(listItem)
    }
    while (listItem.next !== null) {
        console.log(listItem.value);
        listItem = listItem.next;
    }
    return listItem;
}
//console.log(findLast(SLL_LinkedList))

//Mystery program - analyze without running. 
//What is this problem trying to solve? I think it's trying to remove dupes.
//What is its time complexity? O(n) - linear, passes over once, comparing each to last?
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) { 
                newNode.next = newNode.next.next; //if value after next is = to current, new node points to val after that, so skipping?
            }
            else { //if no redundant values, continue normally
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

//Reverse a list - time complexity sould be linear, O(n).
//All pointers should point backward.
function reverseList (linkList) {
    // Traverse the list keeping track of where we were/are
    let currNode = linkList.head;
    let prevNode;
    let tempNode;
  
    // iterate while we have a current node
    while ( currNode ) {
  
        // Store the next node
        tempNode = currNode.next;
  
        // Set current node's next node to the previous node
        // If first node, this is null
        currNode.next = prevNode;
  
        // Set our previous node to be the current node
        prevNode = currNode;

        // set current node to the stored node that was originally next
        currNode = tempNode;
      }
    linkList.head = prevNode;
    return linkList;
  }
  
  //console.log(reverseList(SLL_LinkedList))

  //Third from end
  function thirdFromEnd(linkedList) {
      let startNode = linkedList.head
      if (startNode === null || startNode.next === null || startNode.next.next === null) {
          return 'List must have a minimum of 3 items.'
      }
      let endNode = startNode.next.next;

      /*while (endNode.next !== null) {
          startNode = startNode.next;
          endNode = endNode.next;
      }*/
      return endNode;
  }
 //console.log(thirdFromEnd(SLL_LinkedList))
 //should return Kat out of Apollo(head), Athena (next), Kat (next, next)

 //middle of a list (don't use size function divided by two, and don't add a length property to linked list class)
 const middle = list => {
    let fastPoint = list.head;
    let slowPoint = list.head;
    while ((fastPoint.next !== null) && (fastPoint.next.next !== null)) {
      fastPoint = fastPoint.next.next;
      slowPoint = slowPoint.next;
    }
    return slowPoint;
  };

  //console.log(middle(SLL_LinkedList))

  //cycle in a list
 //write an algorithm to find whether a linked list has a cycle (i.e. whether a node in list has its 
 //next value pointing to earlier node in list)
 //for this exercise, create a linked list with the name, CycleList
 //Be sure to insert nodes in list so it has a cycle
 //then test program with cycleList function

 const CycleList = new LinkedList();
 CycleList.insertFirst('Angela');
 CycleList.insertLast('Michelle')
 CycleList.insertLast('Bumgarner')
 CycleList.insertFirst('Mrs.')
 CycleList.insertFirst('Exhausted')
 CycleList.insertFirst('An')
//console.log(CycleList)

const cycleList = (linkedList) => {
    if (linkedList.head === null) {
        return false
    }
    let fastTrack = linkedList.head.next;
    let slowTrack = linkedList.head;

    while(fastTrack !== null && fastTrack.next !== null && slowTrack !== null) {
        if (fastTrack.value === slowTrack.value) {
            return true
        }

        fastTrack = fastTrack.next.next;
        slowTrack = slowTrack.next;

        console.log('fastTrack:', fastTrack)
        console.log('slowTrack:', slowTrack)
    }
    return false
}
//console.log(cycleList(CycleList));

//Sorting a list
//Write an algorithm that will sort a given linked list.
//For example, given a list such as 3->2->5->7->1
//output will be: 1->2->3->5->7
//Do not use another list or any other data structure such as an array to store the data.

main = () => {
    let SSL = new LinkedList();
    SSL.insertFirst(3);
    SSL.insertLast(2);
    SSL.insertLast(5);
    SSL.insertLast(7);
    SSL.insertLast(1);
    return SSL
  }
  
  
  sortList = (list) => {
    // Only one item in list
    if (list.head === null) {
      return list.head
    }
  
    let prevNode = list.head;
    let currNode = list.head.next;
  
    while ( currNode != null ) {
      
      if (list.head.value > currNode.value) {
        prevNode.next = currNode.next;
        currNode.next = list.head;
        list.head = currNode;
  
        prevNode = list.head;
        currNode = list.head.next; 
      }     
  
      prevNode = currNode;
      currNode = currNode.next; 
    }
    return list
  }
  
  let newList = main();
  console.log(sortList(newList));