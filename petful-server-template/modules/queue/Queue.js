class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.front = null;
    this.end = null;
  }

  enqueue(data) {
      // Add some data to the queue.
      const node = new _Node(data);

      if (this.front === null) {
          this.front = node;
      }

      if (this.end) {
          this.end.next = node;
      }
      //make the new node the end item on the queue
      this.end = node;
  }

  dequeue() {
      //if the queue is empty, there is nothing to return
     if (this.front === null) {
         return;
     }
     const node = this.front;
     this.front = this.front.next;
      //if this is the end item in the queue
     if (node === this.end) {
         this.end = null;
     }
     return node.value;
  }

  show() {
    // Return the next item in the queue.
    return this.front.value;
  }

  all() {
    let node = this.first;
    const arr = [];
     while (node) {
         arr.push(node.value);
         node = node.next;
     }
   return arr;
  }
}
    

// let test = new Queue(); 
//console.log('initial size: ', test.size());
//console.log('initially empty: ', test.isEmpty());
// test.enqueue(1);
// test.enqueue(2);
// test.enqueue(3);
// console.log(test.end)
//console.log('size: ', test.size());
//console.log('next element to be removed is: ', test.peek());
//console.log(test.all());
//console.log(test.size());


module.exports = Queue
 