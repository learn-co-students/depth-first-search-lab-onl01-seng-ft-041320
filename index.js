function depthFirstSearch (rootNode, vertices, edges) {
    const arrayExploredVertices = [];
    const stack = [];
    stack.push(rootNode);
    while (stack.length > 0) {
        let currentVertex = stack.pop();
        if (currentVertex.discovered === null) {
            currentVertex.discovered = true;
            findAdjacentVertices(currentVertex, vertices, edges).forEach(vertex => stack.push(vertex));
            arrayExploredVertices.push(currentVertex);
        }
    }
    return arrayExploredVertices
}
function findAdjacentVertices (vertex, vertices, edges) {
    let resultsArray = [];

    edges.forEach(vertexNamePair => {
        if (vertexNamePair[0] === vertex.name) {
            resultsArray.push(vertexNamePair[1]);
        }
    });

    edges.forEach(vertexNamePair => {
        if (vertexNamePair[1] === vertex.name) {
            resultsArray.push(vertexNamePair[0]);
        }
    });

    return resultsArray.map(vertexName => {
        return vertices.find(vertex => {
            return vertex.name === vertexName;
        });
    });
}