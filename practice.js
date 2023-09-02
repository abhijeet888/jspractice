// function array(arr){
//     return arr[0]
// }

// var array = (arr) => {
//     return arr[0];
// }

// console.log(array([1,2,3,4]));

// let b = 16;
// const c = (i) =>{return i};
// a = 10;
// console.log("a:",a,"b:",b,"c:",c(12));
// var a;

function isPrime(n){
    if(n===1){
        return false;
    }

    for(let i =2 ;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }

    return n;
}

function noOfPrimes(n){
   let i = 2;
   let all_prime_no = []

    while(i<=n){ 
       if(isPrime(i)){
         all_prime_no.push(i);
       }
       i++;
    }

    return all_prime_no;
}

function sieve(n){
      let primeFlag = [];

       for(let k = 0;k<=n;k++){
           if(k===0 || k===1){
            primeFlag.push(false);
           }else{
            primeFlag.push(true);
           }
       }
   
       for(let i=2;i*i<=n;i++){
        if(primeFlag[i] === true){
             for(let j = i*i;j<=n;j = j+i){
                primeFlag[j] = false;
             }
          }
        }
          
     console.log("All primes between 1 and given no using sieve is:"); 
     let arr = []
     for(let i =0;i<=n;i++){
        if(primeFlag[i] === true){
            arr.push(i);
        }
    }
    console.log(arr); 

    
}

const p = Math.pow(10,8);

// let startTime = new Date();
// console.log("All primes between 1 and given no is:",noOfPrimes(p));
// let endTime = new Date();
// let timeElapsed = endTime - startTime;
// console.log("normal",timeElapsed);

startTime = new Date();
sieve(p);
endTime = new Date();
timeElapsed = endTime - startTime;
console.log("sieve",timeElapsed);






