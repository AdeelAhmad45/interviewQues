function Queue(){
    let items = []
    this.shift = function(element){
        
        items.unshift(element)
    }   
    this.pop = function(){
        return items.shift()
    }
    this.peek = function(){
        return items[0];
    }
    this.size = function(){
        return items.length
    }
    this.clear = function(){
        return items = []
    }
}

let obj = new Queue();
obj.shift('A')
obj.shift('B')
obj.shift('C')
obj.shift('D')

console.log(obj.pop());
console.log(obj.peek());
console.log(obj.size());
console.log(obj.clear());

