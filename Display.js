//First, need to create a class for the nodes itself
class SLLNode {
  constructor(val) {
    this.value = val; //this will hold the new nodes value
    this.next = null; //pointer: this points to the next node, initially set to null
  }
}

//Second, need to create a class for the list itself
class SLL {
  constructor() {
    //starting with an empty list, so do not include any node value in the constructor to start
    this.head = null; //pointer: this points to the first node(head), set it to null to start
  }
  //***ensure all methods are listed below WITHIN this class (SLL)

  // 1) Add Front
  // ^Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
  addFront(value) {
    //given a value, pass in to the addFront method
    var newNode = new SLLNode(value); //this creates a new instance of the SLLNode method, initialized to newNode
    newNode.next = this.head; // this connects the new node to the list, as it's new head
    this.head = newNode; //set the newNode to the head
    return this;
  }

  // 2) Remove Front
  // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

  removeFront() {
    //***add an edge case, since we start with an empty list
    if (this.head == null) {
      return this.head; // should return the lists head as null - (SLL {head:null});
    }
    var removedNode = this.head; //initialize a var for the removedNode and set it to the head
    this.head = removedNode.next; //setting the new head to the node next to the removedNode
    removedNode.next = null; //this makes sure the removedNode is not pointing to anything, specifically the next node in line
    return this.head;
  }

  // 3) Front
  //return only the VALUE at the front of the list, not the entire list
  front() {
    //add edge case, if list is empty to begin with
    if (this.head == null) {
      return null;
    }
    return this.head.value;
    //OR, you can use a ternary operator:
    //return this.head == null ? null: this.head.value //this is saying 'if the head is null, return null, otherwise set this value as the head
  }

  //***DISPLAY***: Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!
  display() {
    var newString = ""; //initialize an empty new string that we want to hold the new values in
    //Edge case: empty list to start (same as edge cases in front() and removeFront())
    //if the head of this list is empty/null, return the newString:
    if (this.head == null) {
      //return newString;
      //a 2nd option for return:
      return "List is empty"; //since list is empty, no nead to return newString, instead you can return a string signaling that the current list is empty
    }
    //initialize the newString to be equal to and add value of the head, since we have at least one node to start at with the head
    newString += this.head.value;
    //initialize new var 'runner' that will represent each new node going down the list(using .next)
    var runner = this.head.next;
    //create while loop to account for each node until you reach the end, which would be null as .next would point to null
    //this is saying, loop through the list as long as runner is not null (i.e. node exists)
    while (runner != null) {
      //newString += runner.value
      //adding "," to seperate each node in the list by a comma upon return
      newString += "," + runner.value; //this is saying, for each value in the list dictated by the runner, add to the newString
      //reset the runner to be equal to the next node in the list
      runner = runner.next; //goes until the next node is null (end of the list, no more nodes)
    }
    return newString;
  }
}

SLL1 = new SLL();
SLL1.addFront(18); //=> Node { data: 18, next: null }
console.log(SLL1); //return new list
SLL1.addFront(5); //=> Node { data: 5, next: Node { data: 18, next: null } }
console.log(SLL1);
SLL1.addFront(73); //=> Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
console.log(SLL1);
console.log(SLL1.head.next); //this will print the 2nd node in the list

SLL1.removeFront();
console.log(SLL1);

SLL1.front(); //=> 18
SLL1.removeFront(); //=> null
SLL1.front(); //=> null
console.log(SSL1);

//***DISPLAY */
SLL1.addFront(76); //=> Node { data: 76, next: null }
console.log(SLL1.display()); //this returns a new string of one node
SLL1.addFront(2); //=> Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()); //=> "2, 76" - this returns a string of 2 new nodes
SLL1.addFront(11.41); //=> Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1.display()); //=> "11.41, 2, 76" - this returns all new nodes in the newString var
