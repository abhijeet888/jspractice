(function() {
  class Element {
       constructor(data){
           this.data = data;
       };
  };

  class Stack {
       constructor(size){
          this.size = size;
          this.array = Array.from({length: this.size});
       };
       
       push(value){
           let element = new Element(value);
           if(this.array[this.array.length-1]){ return console.log("Overflow of stack");}
           for(let i=0; i< this.size;i++){
              if(!this.array[i]){
                this.array[i] = element.data;
                return;
              };
           };
       };

       pop(){
        if(!this.array[0]){ return console.log("Underflow of stack");}
        for(let i=this.size-1;i>=0;i--){
           if(this.array[i]){
              this.array[i] = undefined;
              return;
           }
        };
       };

       top(){
        for(let i=this.size-1;i>=0;i--){
            if(this.array[i]){
               return console.log(this.array[i]);
            }
         };
         return console.log("Stack is empty");
       }; 

       isEmpty(){
        for(let i=this.size-1;i>=0;i--){
            if(this.array[i]){
               return console.log("Is Stack Empty:",false);
            }
         };
         return console.log("Is Stack Empty:",true);
       };

       isFull(){
         return this.array[this.size-1] ? console.log("Is Full:",true) : console.log("Is Full:",false);
       };

       print(){
        console.log(this.array);
       }
  };

  const stack = new Stack(5);
  stack.print();
  stack.push(4);
  stack.push(5);
  stack.push(3);
  stack.push(2);
  stack.push(1);
  stack.isEmpty();
  stack.isFull();
  stack.print();
  stack.push(6);
  stack.pop();
  stack.isFull();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.print();
  stack.pop();
  stack.isEmpty();
})()