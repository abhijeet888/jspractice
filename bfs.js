//BFS algo for both tree and graphs

//Implementation of Graph
let Graph = {};
function graph(node,connectedNodes){
    if(Graph[node] === undefined){
        Graph[node] = connectedNodes;
    }
}
function addEdge(node,connectTo){
    if(Graph[node] !== undefined){
        Graph[node].push(connectTo);
        Graph[connectTo].push(node);
     }else{
        console.log("Node does not exsist");
     }
}
function removeEdge(node,removeEdgeTo){
    if(Graph[node] !== undefined){
        for(let i=0;i<Graph[node].length;i++){
            if(Graph[node][i] ===  removeEdgeTo){
                Graph[node] =  Graph[node].filter((value)=>{return value != removeEdgeTo});
            }
        }
        for(let i=0;i<Graph[removeEdgeTo].length;i++){
            if(Graph[removeEdgeTo][i] ===  node){
                Graph[removeEdgeTo] =  Graph[removeEdgeTo].filter((value)=>{return value != node});
            }
        }
     }else{
        console.log("Node does not exsist");
     }   
}
graph(0,[1,2]);
graph(1,[0,2,3]);
graph(2,[0,1,4]);
graph(3,[1,4]);
graph(4,[3,2]);
console.log(Graph);



// function bfs(n){


//     for(){
         
//     }

// }