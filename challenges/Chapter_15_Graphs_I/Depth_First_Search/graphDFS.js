import { Graph, GraphNode } from '../Implementation/graph';

function dfsVisit(node, target, memo, graph) {
  if (node.val === target) {
    return true;
  }

  const set = new Set();

  for (const edgeNode of node.edges.values()) {
    if (
      !memo.has(edgeNode) ||
      (memo.get(edgeNode) !== 'VISITED' && memo.get(edgeNode) !== 'VISITING')
    ) {
      memo.set(edgeNode, 'VISITING');
      const edgeNodeObj = graph.nodes.get(edgeNode);
      if (dfsVisit(edgeNodeObj, target, memo, graph)) {
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
      if (dfsVisit(node, target, memo, graph)) {
        return true;
      }
    }
  }
  return false;
}
