function main(){
   hop(3);
   pickFlower();
   turnLandR("right");
   hop(2)
   plantFlower();
   turnLandR("left");
   hop(1);
}

function pickFlower(){
   console.log("Pick Flower");
}

function plantFlower(){
   console.log("Plant Flower");
}

function hop(n){
   if(n===0){
    console.log("Hopping done");
    return ;
   }
   
   console.log("Hop",n);
   n--;
   hop(n);
}

function turnLandR(turn){
  console.log("Turn"+turn);
}

main();

