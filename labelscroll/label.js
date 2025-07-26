const l = document.getElementById("label");

const arrLabel = 
["Movies", "Live", "News", "Game Shows", "Computer Science", "Bodybuilding", 
"The Dark Knight Triology", "Game of Thrones", "Indian", "American", "Japanese",
"Artist", "Music", "NeoWave", "SynthWave", "Extras", "Recently Uploaded", "Dance Pop",
"Trailers", "History", "Podcasts", "Watched"
]

let n = 0;
addLabels(arrLabel);

function addLabels(arr){
    for(let i = 0 ;i<Math.floor(arrLabel.length/3);i++){
        const d = document.createElement("span");
        d.id = i;
        d.innerText = arrLabel[i];
        d.style.margin = "50px";
        d.style.backgroundColor = "red";
        l.appendChild(d);
    }

}

function onArrowClick(){
     n += 3;
     for(let i = n ;i<n+Math.floor(arrLabel.length/3);i++){
        const d = document.createElement("span");
        d.id = i;
        d.innerText = arrLabel[i];
        d.style.margin = "50px";
        d.style.backgroundColor = "red";
        l.appendChild(d);
    }
}