let Graph = {}


let visited = {};

let nodes = [];

for(const keys in Graph){
   nodes.push(keys);
}

for(const keys in nodes){
    visited[nodes[keys]] = false;
}

function dfs(Graph){
    for(let i =0;i<nodes.length;i++){
        if(visited[nodes[i]]===false){
            visited[nodes[i]] = true;
            explore(Graph,nodes[i]);
        }
    }
}

function explore(Graph,node){
    let nbr = Graph[node];
    for(let i=0;i<nbr.length;i++){
       if(visited[nbr[i]]===false){
        visited[nbr[i]] = true;
        explore(Graph,nbr[i]);
       }
    }
}



