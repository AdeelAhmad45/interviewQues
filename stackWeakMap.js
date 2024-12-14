    let _items = new WeakMap();

    class Stack{
        constructor(){
            _items.set(this, []);
        }
        push(element){
            var ref = _items.get(this);
            ref.push(element);
        }
        pop(){
            var ref = _items.get(this);
            return ref.pop();
        }
        peek(){
            var ref = _items.get(this);
            return ref[ref.length - 1];
        }
        clear(){
            var ref = _items.get(this);
            ref.length = 0;
        }
        size(){
            var ref = _items.get(this);
            return ref.length;
        }
        isEmpty(){
            var ref = _items.get(this);
            return ref.length == 0;
        }
        print(){
            var ref = _items.get(this);
            return ref.toString()
            
        }
       
    }

    let obj = new Stack();
    obj.push("A")
    obj.push("B")
    obj.push("C")
    
    obj.pop()
    
    console.log(obj.pop());
    console.log(obj.peek());
    console.log(obj.size());
    console.log(obj.isEmpty());
    console.log(obj.print());
    obj.clear()
    
    
    