function Stack()
        {
            let items = [ ];
            this.push = function(element) {
                
                // console.log(element);
                items.push(element);
            }
            this.pop  = function(){
                         return items.pop();
             }
            this.peek = function() {
             return items[items.length-1];
            }
            this.clear = function() {
              items.length = 0; // or items = [ ];
            }
            this.isEmpty = function(){
             return  items.length ==0;
             }
            this.size = function() {
               return items.length;
            }
            this.print = function() {
              console.log(items.toString())
            }
        }
        let obj = new Stack();
        obj.push("A");
        obj.push("B");               // items [A, B]
        obj.pop()  
        // obj.clear()
        console.log(obj.pop());
               