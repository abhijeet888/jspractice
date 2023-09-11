function openModal(){
    let t = document.getElementById("no-modal");
    t.style.display = "none";
    let g = document.getElementById("modal");
    g.style.display = "block";
}

function onModalClose(){
    let t = document.getElementById("no-modal");
    t.style.display = "block";
    let g = document.getElementById("modal");
    g.style.display = "none";
}