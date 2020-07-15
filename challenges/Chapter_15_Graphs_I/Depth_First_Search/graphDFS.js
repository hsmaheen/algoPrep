import { Graph, GraphNode } from '../Implementation/graph';

function dfsNode(node, target, memo, graph) {
  memo.set(node.val, 'VISITING');
  if (node.val === target) {
    return true;
  }

  for (const edgeNode of node.edges.values()) {
    if (
      !memo.has(edgeNode) ||
      (memo.get(edgeNode) !== 'VISITED' && memo.get(edgeNode) !== 'VISITING')
    ) {
      const edgeNodeObj = graph.nodes.get(edgeNode);
      if (dfsNode(edgeNodeObj, target, memo, graph)) {
        return true;
      }
    }
  }

  memo.set(node.val, 'VISITED');
  return false;
}

export function graphDFS(graph, target) {
  const memo = new Map();
  for (const node of graph.nodes.values()) {
    if (
      !memo.has(node.val) ||
      (memo.get(node.val) !== 'VISITED' && memo.get(node.val) !== 'VISITING')
    ) {
      if (dfsNode(node, target, memo, graph)) {
        return true;
      }
    }
  }
  return false;
}

function printDFSNode(node, target, memo, graph, visitedNodes) {
  memo.set(node.val, 'VISITING');
  visitedNodes.push(node.val);

  const set = new Set();

  for (const edgeNode of node.edges.values()) {
    if (
      !memo.has(edgeNode) ||
      (memo.get(edgeNode) !== 'VISITED' && memo.get(edgeNode) !== 'VISITING')
    ) {
      const edgeNodeObj = graph.nodes.get(edgeNode);
      printDFSNode(edgeNodeObj, target, memo, graph, visitedNodes);
    }
  }

  memo.set(node.val, 'VISITED');
}

export function printGraphDFS(graph, target) {
  const memo = new Map();
  const visitedNodes = [];
  for (const node of graph.nodes.values()) {
    if (
      !memo.has(node.val) ||
      (memo.get(node.val) !== 'VISITED' && memo.get(node.val) !== 'VISITING')
    ) {
      printDFSNode(node, target, memo, graph, visitedNodes);
    }
  }

  console.log(...visitedNodes);
  return visitedNodes;
}
