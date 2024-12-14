var _items = Symbol()

class Stack {

    constructor(){
        this[_items] = []
    }
    push(element){
        this[_items].push(element)
    }
    pop(){
        return this[_items].pop()
    }
    peek(){
        return this[_items][this[_items].length - 1]
    }

    clear(){
        this[_items] = [];
    }

    size(){
        return this[_items].length
    }

    isEmpty(){
        return this[_items].length == 0;
    }

    print(){
       console.log(this[_items].toString());
       
    }

}

let obj = new Stack();

obj.push("A")
obj.push("B")
obj.push("C")
obj.clear()
obj.pop()
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.isEmpty());
console.log(obj.size());
obj.print()