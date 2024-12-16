    class Stack {
        #items;
        constructor(val){
            this.#items = [];
            while (val > 0) {
                let value = val % 2
                this.push(value)
                val = Math.floor(val/2)
            }
        }
        push(value) {
            this.#items.push(value)
        }
        pop(){
            return this.#items.pop()
        }
        peek(){
            return this.#items[this.#items.length =1]
        }
        size(){
            return this.#items.length;
        }
        clear(){
            this.#items = [];
        }
        print(){
            console.log(this.#items.reverse().join(''));
        }
    }

    let obj = new Stack(5); 
    obj.print()  
    
    let obj2 = new Stack(10); 
    obj2.print() 