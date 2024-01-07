let arr = [];
//stack
arr.push();
arr.pop();

//queue
arr.unshift();
arr.push();


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
graph(1,[2,4,5]);
graph(2,[1,3,4]);
graph(3,[2,4]);
graph(4,[1,2,3]);
graph(5,[1]);
graph(6,[7]);
graph(7,[6,8]);
graph(8,[7]);
console.log(Graph);
// addEdge(2,5);
// console.log("After adding edge",Graph);
// removeEdge(2,5);
// console.log("After removing edge",Graph);

let nodes = []
for(const keys in Graph){
     nodes.push(keys);
}

let visited = {};

for(let i=0;i<nodes.length;i++){
    visited[nodes[i]] = false;
 }

let Tree = {};
 for(const keys in Graph){
    Tree[keys] = [];
 }

let Parent = {};
for(const keys in Graph){
    Parent[keys] = "" ;
 }

 let Childrens = {};
 for(const keys in Graph){
    Childrens[keys] = [] ;
  }


let noOfConnectedComponents = 0;
let connectedComponet = {};

let levelOfNode = {};

let level = 0;

for(const keys in Graph){
   levelOfNode[keys] = level;
}

let prePostNo = {}

for(const keys in Graph){
    prePostNo[keys] = [];
 }

let time=0;

let familyMinLevel = {};


let backEdgeFromNode = {};
backEdge=[]

for(const keys in nodes){
    backEdgeFromNode[nodes[keys]] = [];
}


function explore(Graph,node,compCount,level){
    let nbr = Graph[node];
    if(connectedComponet[compCount] === undefined){
        connectedComponet[compCount]= {};
        connectedComponet[compCount][node] = nbr
    }else{
        connectedComponet[compCount][node] = nbr;
    }
    levelOfNode[node] = level;
    level++;
    familyMinLevel[node] = levelOfNode[node];
    let a = true;
    for(let i=0;i<nbr.length;i++){
        if(visited[nbr[i]]===false){
            Tree[node].push(nbr[i]);
            Parent[nbr[i]] = parseInt(node);
            Childrens[node].push(nbr[i]);
            visited[nbr[i]] = true;
            time++;
            prePostNo[nbr[i]].push(time);
            explore(Graph,nbr[i],compCount,level);
            familyMinLevel[node] = Math.min(familyMinLevel[node],familyMinLevel[nbr[i]]);
            if(familyMinLevel[nbr[i]] >= levelOfNode[node]){
               a = false;
            }
            time++;
            prePostNo[nbr[i]].push(time);
        }else{
            // console.log("node",node,"nbr",nbr[i],levelOfNode[nbr[i]],levelOfNode[node]-1);
            if(levelOfNode[nbr[i]] < levelOfNode[node]-1 ){
            familyMinLevel[node] = Math.min(familyMinLevel[node],familyMinLevel[nbr[i]]);
            backEdgeFromNode[node].push(nbr[i]);
            backEdge.push([node,nbr[i]]);
            }
        }
    }
    if(a){
        console.log("Graph remains connected for:",node);
    }
};


function dfs(Graph,nodes){
    
    for(let i=0;i<nodes.length;i++){
       if(visited[nodes[i]] === false){
        noOfConnectedComponents++;
        visited[nodes[i]] = true;
        level = 0;
        time++;
        prePostNo[nodes[i]].push(time);
        explore(Graph,nodes[i],noOfConnectedComponents,level);
        if(Childrens[nodes[i]].length === 1){
            console.log("Graph remains connected for:",parseInt(nodes[i]));
        }
        time++
        prePostNo[nodes[i]].push(time);
       }
    }
    for(let keys in visited){
        if(visited[keys] === false){
            console.log("Not visited",keys)
        }
    }
    console.log("Visited Array",visited)
}


// console.log("Nodes:",nodes)
//console.log(Tree);
// console.log(Parent);
// console.log(noOfConnectedComponents);
dfs(Graph,nodes);
// console.log(noOfConnectedComponents);
// console.log(connectedComponet);
// console.log(levelOfNode);
// console.log(prePostNo);
console.log(backEdgeFromNode);
console.log(backEdge);
console.log(Tree);
console.log("Childrens",Childrens);
// console.log(Parent);


