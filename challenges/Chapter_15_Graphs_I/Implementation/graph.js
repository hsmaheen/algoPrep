export class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(data) {
    if (!this.adjacencyList.has(data)) {
      this.adjacencyList.set(data, []);
    }
  }

  addEdge(originNode, nodeToConnect) {
    this.adjacencyList.get(originNode).push(nodeToConnect);
    this.adjacencyList.get(nodeToConnect).push(originNode);
  }

  removeEdge(originNode, nodeToRemove) {
    const nodeA = this.adjacencyList.get(originNode);
    nodeA.filter((n) => n !== nodeToRemove);

    this.adjacencyList.set(
      originNode,
      nodeA.filter((n) => n !== nodeToRemove)
    );

    const nodeB = this.adjacencyList.get(nodeToRemove);
    this.adjacencyList.set(
      nodeToRemove,
      nodeB.filter((n) => n !== originNode)
    );
  }

  removeNode(node) {
    const edges = this.adjacencyList.get(node);
    for (let edge of edges) {
      this.removeEdge(node, edge);
    }

    this.adjacencyList.delete(node);
  }
}
