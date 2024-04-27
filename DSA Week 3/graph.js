


class Graph{
    constructor(){
        this.adjacency = {}
    }
    addVertex(vertex){
        if(!this.adjacency[vertex]){
            this.adjacency[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacency[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacency[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacency[vertex1].add(vertex2)
        this.adjacency[vertex2].add(vertex1)
        return this
    }

    hasEdge(vertex1,vertex2){
        return this.adjacency[vertex1].has(vertex2) && this.adjacency[vertex2].has(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjacency[vertex1].delete(vertex2)
        this.adjacency[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacency[vertex]){
            return 
        }
        for(let adjacentVertex of this.adjacency[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacency[vertex]
    }
    // bfs(start){
    //     let queue = [start];
    //     let visited = {start:true};
    //     let result = [];
    //     while(queue.length){
    //         let vertex = queue.shift();
    //         result.push(vertex);
    //         this.adjacency[vertex].forEach(neighbor=>{
    //             if(!visited[neighbor]){
    //                 queue.push(neighbor)
    //                 visited[neighbor] = true;
    //             }
    //         })
    //     }
    //     return result
    // }

    bfs(start){
        let queue = [start];
        let visited = {};
        let result =  [];
    
        visited[start]= true;
        while(queue.length){
            let vertex = queue.shift();
            result.push(vertex);
            this.adjacency[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor]= true
                }
            });
        }
        return result
    }

    dfs(start){
        let stack = [start];
        let visited = {};
        let result =  [];
    
        visited[start]= true;
        while(stack.length){
            let vertex = stack.pop();
            result.push(vertex);
            this.adjacency[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    stack.push(neighbor);
                    visited[neighbor]= true
                }
            });
        }
        return result
    }

    display(){
        for(let vertex in this.adjacency){
            console.log(vertex+"->"+[...this.adjacency[vertex]]);
        }
    }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("V")
graph.addVertex("B")
graph.addEdge("A","B")
graph.addEdge("V","V") 
// graph.removeEdge("V","V")
// graph.removeVertex("V","V")
console.log(graph.dfs('A'));
console.log(graph.bfs('A'));
graph.display()

