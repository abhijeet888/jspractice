let id = 0;
const arr = [];

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
       const i = document.getElementById("inputvalue");
       if(i.value){
          const j = document.getElementById("list");
          const t = document.createElement("div");
          t.className = "array"
          t.id = id;
          t.innerHTML = i.value;
          j.append(t);
          arr.push(parseInt(t.innerHTML));
          i.value = 0;
          id++;
          console.log(arr);
       }else{
        alert("Please enter a value and then click on plus sign");
       }
}

function subtract(){
    id--;
    const j = document.getElementById("list");
    j.removeChild(document.getElementById(id));
    arr.pop();
}



// function appendClass(){
//     let t = document.getElementsByClassName("array");
//     t.appendClass("array")
// }
//bubbleSort([19,855,10000,15,-1]);