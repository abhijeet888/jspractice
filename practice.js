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


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function createCounter(init, delta){
    return function count(){
        init = init +delta;
        return init;
    }
}

let c1 = createCounter(5,5);
let c2 = createCounter(4,4);

console.log(c1());
console.log(c2());
console.log(c1());
console.log(c2());

const arr = [1,1,2,3,4,5,6,7,8,8,6,6,7,7,7,10,10];

function removeDuplicate(arr){
    let dic = {};
    
    for(let i =0;i<arr.length;i++){
        if(dic[arr[i]] === undefined){
            dic[arr[i]] = [1,arr[i]];
        }else{
            dic[arr[i]] = [-1,arr[i]];
        }
    }
    let noDuplicate = [];
    for(keys in dic){
        if(dic[keys][0] === -1){
            noDuplicate.push(dic[keys][1]);
        }
    }
    
    return noDuplicate;
}

console.log(removeDuplicate(arr));


const arr1 = [4, 1, 9, 10, 15, 22, 5, 14,7];
//ans - [1,9,15,5]
function removeEvenIntegers(arr1){
    let noEvenInt = [];
    
    for(let i = 0;i<arr1.length;i++){
        if(arr1[i]%2 !== 0){
            noEvenInt.push(arr1[i]);
        }
    }
    return noEvenInt;
}

console.log(removeEvenIntegers(arr1));

let x = {};
let y = {name:"abhi"};
let z = {name:"arun"};
x[y] = {name:"p"};
x[z] = {name:"z"};
console.log(x[z]);


console.log(0===false)

//works for array and object
function callByRefrence(obj){
    obj.name = "arun";

}

const varObj = {name:"abhi"};

console.log("Before Pass by refrence");
console.log(varObj);
callByRefrence(varObj);
console.log("After Call by reference");
console.log(varObj);

function callByValue(x){
    x = x * x;
    
    return x;

}

const t = 10;

console.log("Before Pass by refrence");
console.log(t);

console.log("After Call by reference");
console.log(callByValue(t));


function arrCallByRef(l){
      l[5] = 9;
}

const arr5 = [1,2,3,4,5];

console.log("Array by reference");
console.log(arr5);
arrCallByRef(arr5);
console.log("After Array by reference");
console.log(arr5);





