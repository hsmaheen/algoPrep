export class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(data) {
    if (!this.adjacencyList.has(data)) {
      this.adjacencyList.set(data, new Set());
    }
  }

  addEdge(originNode, nodeToConnect) {
    this.adjacencyList.get(originNode).add(nodeToConnect);
    this.adjacencyList.get(nodeToConnect).add(originNode);
  }

  removeEdge(originNode, nodeToRemove) {
    const originConns = this.adjacencyList.get(originNode);
    originConns.delete(nodeToRemove);

    const nodeToRemoveConns = this.adjacencyList.get(nodeToRemove);
    nodeToRemoveConns.delete(originNode);
  }

  removeNode(node) {
    const edges = this.adjacencyList.get(node);
    for (let edge of edges) {
      this.removeEdge(node, edge);
    }

    this.adjacencyList.delete(node);
  }

  printDFS(node) {
    const visitedNodes = new Map();
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function dfs(node) {
      if (!adjacencyList.has(node)) {
        return;
      }

      visitedNodes.set(node, "VISITING");
      result.push(node);
      for (const key of adjacencyList.get(node)) {
        if (!visitedNodes.has(key)) dfs(key);
      }
      visitedNodes.set(node, "VISITED");
    })(node);

    return result;
  }

  depthFirstSearch(node, target) {
    const visitedNodes = new Map();
    const adjacencyList = this.adjacencyList;

    return (function dfs(node, target) {
      if (!adjacencyList.has(node)) {
        return false;
      }

      if (node === target) {
        return true;
      }

      visitedNodes.set(node, "VISITING");
      for (const key of adjacencyList.get(node)) {
        if (!visitedNodes.has(key)) {
          if (dfs(key, target) === true) {
            return true;
          }
        }
      }
      visitedNodes.set(node, "VISITED");
      return false;
    })(node, target);
  }
}
