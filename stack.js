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
              const poppedElement = this.array[i];
              this.array[i] = undefined;
              return poppedElement;
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
               return false;
            }
         };
         return true;
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
  const str = "{[}]";
  //->push({)->push([)->pop() -incorrect string
  const strone = ""
  //->push([)->push({)->push(()->pop()->pop()->pop()->push([)->pop() - string is correct
  const dict = {
        "{": "}",
        "[": "]",
        "(": ")"
  };
  const arraOfClosedBrackets = ["}","]",")"];
  let arr = strone.split("");
  const stackStr = new Stack(arr.length);
  const isStringValid = () => {
   if(arraOfClosedBrackets.includes(arr[0])){ return console.log("string is incorrect")}
  for(const key in arr){
     if(arraOfClosedBrackets.includes(arr[key])){
        if(dict[stackStr.pop()] !== arr[key]){
           return console.log("string is incorrect");
        };
     }else{
       stackStr.push(arr[key]);
     }
  };
  if(!stackStr.isEmpty()){
    return console.log("string is incorrect");
  }
  return console.log("String is Valid");
};
isStringValid();

})();