function depthFirstSearch(rootNode, vertices, edges){
    let stack = [rootNode]
    let visited = [rootNode]
    while (stack.length != 0 ){
        let currentNode = stack.pop()
        if (!currentNode.discovered){
            currentNode.discovered = true
            let adjNodes = findAdjNodes(currentNode, vertices, edges)
            visited.push(...adjNodes)
            stack.push(...adjNodes)
    }

        
    }

    return visited

}

function findAdjNodes(node, vertices, edges){
    let adjNodeNames = edges.map(edge => {
       return edge.includes(node.name) && edge.filter(name => name !== node.name)[0]
    })

    return vertices.filter(vertex => adjNodeNames.includes(vertex.name) && vertex.discovered !== true)
    
}