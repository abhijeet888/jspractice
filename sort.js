let id = 0;
const a = document.getElementById("sort");
const arr = [];
for(let i =0;i<8;i++){
    const value  = document.getElementById(i);
    arr.push(parseInt(value.innerHTML));
}
console.log(arr);
function bubbleSort(){
    for(let i = 0;i<arr.length;i++){
        for(let k = i+1;k<arr.length;k++ ){
            let b = document.getElementById(i);
            let c = document.getElementById(k);
            if(arr[i]>arr[k]){
              let temp = arr[k];
              arr[k] = arr[i];
              arr[i] = temp;
            }
            b.innerHTML = arr[i];
            c.innerHTML = arr[k];
        }
        console.log("K ends here:",arr);
    }
    console.log("Bubble sort",arr);
}

function add(){
       let i = document.getElementById("inputvalue");
       if(i.value){

       }else{
        alert("Please enter a value and the click on plus sign");
       }
}

function subtract(){

}



// function appendClass(){
//     let t = document.getElementsByClassName("array");
//     t.appendClass("array")
// }
//bubbleSort([19,855,10000,15,-1]);