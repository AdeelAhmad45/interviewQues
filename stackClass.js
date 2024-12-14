var _items = Symbol()

class Stack {
    // #items;
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }

    clear(){
        this.items = [];
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.items.length == 0;
    }

    print(){
       console.log(this.items.toString());
       
    }

}

let obj = new Stack();


obj.push("A")
obj.push("B")
obj.push("C")
obj.pop()
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.isEmpty());
// obj.print()
// obj.clear()