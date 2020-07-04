export class GraphNode {
  constructor(val) {
    this.val = val;
    this.edges = new Set();
  }
}

export class Graph {
  constructor() {
    //this.adjacencyList = new Map();
    this.nodes = new Map();
  }

  addNode(data) {
    if (!this.nodes.has(data)) {
      this.nodes.set(data, new GraphNode(data));
    }
  }

  addEdges(parentNode, nodeToConnect) {
    if (this.nodes.has(parentNode) && this.nodes.has(nodeToConnect)) {
      const parNode = this.nodes.get(parentNode);
      parNode.edges.add(nodeToConnect);

      const nodeToConn = this.nodes.get(nodeToConnect);
      nodeToConn.edges.add(parentNode);
    }
  }

  removeEdge(parentNode, connectingNode) {
    if (this.nodes.has(parentNode) && this.nodes.has(connectingNode)) {
      this.nodes.get(parentNode).edges.delete(connectingNode);
      this.nodes.get(connectingNode).edges.delete(parentNode);
    }
  }

  removeNode(node) {
    if (this.nodes.has(node)) {
      this.nodes.get(node).edges.forEach((n) => {
        this.removeEdge(node, n);
      });

      this.nodes.delete(node);
    }
  }

  prinGraph() {
    this.nodes.forEach((node) => {
      console.log(`${node.val} => ${[...node.edges].join(' | ')}`);
    });
  }
}

// const graph = new Graph();

// graph.addNode('A');
// graph.addNode('B');
// graph.addNode('C');
// graph.addEdges('A', 'B');
// graph.addEdges('B', 'C');
// graph.addEdges('A', 'C');

// graph.prinGraph();
