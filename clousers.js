function createCounter(n){
    return function counter(){
        return ++n;
    }
}

let c = createCounter(10);
console.log(c());
console.log(c());
console.log(c());

function* gen(i){
    let count = 0;
    while(i!==0){
        i--;
        count++;
        yield count;
    }
}

const gent = gen(10);
console.log(gent.next());
console.log(gent.next());