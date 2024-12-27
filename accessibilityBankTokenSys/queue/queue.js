export class Queue {
    collection = [];

    enQueue(el){
        this.collection.push(el)
    }
    deQueue(){
        return this.collection.shift()
    }
    size(){
        return this.collection.length;
    }
}


