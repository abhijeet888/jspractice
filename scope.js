

function findMath(y){
return function random(){
if(Math.random() > 0.5){
   var x = y;
}else{
   var x = y+10;
}
console.log(x);
}
}
let r = findMath(10);
r();