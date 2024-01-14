// const c = document.getElementById("count");
let count = 0;

// function onIncrease(){
//   count++;
//   c.innerHTML = count;
// }

// function onDecrease(){
//   count--;
//    c.innerHTML = count;
// }

// function onReset(){
//   count = 0;
//   c.innerHTML = 0;
// }

const b = document.querySelectorAll(".btn");
const value = document.querySelector("#count");

b.forEach(function (btn){
  btn.addEventListener("click", function (e){
    const styles = e.currentTarget.classList;

    if(styles.contains("decrease")){
       count--;
    }else if(styles.contains("increase")){
       count++
    }else{
       count = 0;
    }
    
    if(count>0){
      value.style.color = "green";
    } 
    if(count<0){
      value.style.color = "red";
    }
    if(count==0){
      value.style.color = "#222";
    }

    value.textContent = count;
  })
})
