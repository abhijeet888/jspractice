let hexSelected = false;
let simpleSelected = true

function onClickMe(){
    console.log("Clicked Button")
    if(hexSelected){
        hexGenerator();
    }else{
        simpleColorGenerator();
    }
}

function onClickHex(){
        hexSelected = true;
        simpleSelected = false;
        hexGenerator();
}

function onClickSimple(){
         simpleSelected = true;
         hexSelected = false;
}

function hexGenerator(){
    const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hexno = "#";


    for(let i=0;i<6;i++){
       hexno += hex[Math.floor(Math.random()*10)];
    }
    
    const t = document.getElementById("body");
    const l = document.getElementById("color-label");
    l.innerText = hexno;
    t.style.backgroundColor = hexno;
}

function simpleColorGenerator(){
    const colors = ["blue", "black", "brown", "yellow", "green", "red"];
    
    const t = document.getElementById("body");
    const l = document.getElementById("color-label");
    l.innerText = colors[Math.floor(Math.floor(Math.random()*10)/2)].toUpperCase();
    t.style.backgroundColor = colors[Math.floor(Math.floor(Math.random()*10)/2)];

}