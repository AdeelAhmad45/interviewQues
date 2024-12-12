class Queue {
    constructor(){
        this.items = [];
    }

    shift(element){
        this.items.unshift(element)
    }

    pop(){
        return this.items.shift()
    }

    peek(){
        return this.items[0]
    }

    size(){
        return this.items.length
    }
    item(){
        console.log(this.items);
        
    }
}

const obj = new Queue();

obj.shift("A")
obj.shift("B")
obj.shift("C")
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.size());
obj.item()