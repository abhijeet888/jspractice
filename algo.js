function towerOfHanoi(from,to,aux,n){
         if(n===0){
            return;
         }
          
         towerOfHanoi(from,aux,to,n-1);
         console.log("Transfer",n, "rings from ",from,"to",to);
         towerOfHanoi(aux,to,from,n-1);


}

//towerOfHanoi("A","C","B",3);

function createCounter(init, delta){
    return function count(){
        init = init + delta;
        return init;
    }
}

let c1 = createCounter(10,5);
let c2 = createCounter(5,2);

console.log(c1());
console.log(c2());
console.log(c1());
console.log(c2());

//question 2

function getPrivateCounter() {
    // Your code here
    let count = 0;

    function increment(){
        count++;
    }

    function getCount(){
        return count;
    }
    
    return {
        increment,
        getCount
    }

  }
  
  const counter = getPrivateCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Should log 2

//q3

  function createCache(n) {
    // Your code here
    let dic = {};
     return function cache(n){
            if(dic[n] === undefined){
               dic[n] = expensiveComputation(n);
            }
            return dic[n];
            
     }
  }
  
  const cache = createCache();
  function expensiveComputation(n) {
    console.log(`Computing ${n}`);
    return n * 2;
  }
  
  console.log(cache(5)); // Should log "Computing 5" and return 10
  console.log(cache(5)); // Should return 10 (cached result)
  console.log(cache(10)); // Should log "Computing 10" and return 20
  console.log(cache(10)); // Should return 20 (cached result)
  
  
