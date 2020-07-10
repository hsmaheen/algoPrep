import { Graph } from '../Implementation/graph';

export function cloneGraph(graph) {
  if (!graph) {
    return null;
  }
  const nodeMap = new Map();
  const visitedMap = new Map();
  const clonedGraph = new Graph();

  for (const node of graph.nodes.values()) {
    clonedGraph.addNode(node.val);
    nodeMap.set(node.val, node.val);
    cloneNode(node, visitedMap, nodeMap, clonedGraph, graph);
  }

  return clonedGraph;
}

function cloneNode(node, visitedMap, nodeMap, clonedGraph, graph) {
  visitedMap.set(node.val, 'VISITING');
  for (const edgeNode of node.edges.values()) {
    if (!nodeMap.has(edgeNode)) {
      nodeMap.set(edgeNode, edgeNode);
      clonedGraph.addNode(edgeNode);
    }

    const clonedNode = nodeMap.get(node.val);
    const clonedEdge = nodeMap.get(edgeNode);

    clonedGraph.addEdges(clonedNode, clonedEdge);
    if (!visitedMap.has(edgeNode)) {
      cloneNode(
        graph.getNode(edgeNode),
        visitedMap,
        nodeMap,
        clonedGraph,
        graph
      );
    }
  }

  visitedMap.set(node.val, 'VISITED');
}
