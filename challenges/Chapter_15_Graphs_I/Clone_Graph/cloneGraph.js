import { Graph } from "../Implementation/graph";

function cloneGraph(rootNode, adjacencyList) {
  if (rootNode === null) {
    return;
  }

  const cloneMap = new Map();
  const cloneGraph = new Graph();
  const visitedMap = new Map();

  cloneMap.set(rootNode, rootNode);
  cloneGraph.addNode(rootNode);

  dfsClone(rootNode, adjacencyList, cloneMap, cloneGraph, visitedMap);

  return cloneGraph;
}

function dfsClone(
  rooNode,
  adjacencyList,
  cloneMap = new Map(),
  cloneGraph = new Graph(),
  visitedMap = new Map()
) {
  visitedMap.set(rooNode, "VISITING");
  for (const edge of adjacencyList.get(rooNode)) {
    if (!cloneMap.has(edge)) {
      cloneGraph.addNode(edge);
      cloneMap.set(edge, edge);
    }

    cloneGraph.addEdge(cloneMap.get(rooNode), cloneMap.get(edge));
    if (!visitedMap.has(edge)) {
      dfsClone(edge, adjacencyList, cloneMap, cloneGraph, visitedMap);
    }
  }
  visitedMap.set(rooNode, "VISITED");
}

const graph = new Graph();
graph.addNode("Singapore");
graph.addNode("Canada");
graph.addNode("India");
graph.addEdge("India", "Canada");
graph.addEdge("India", "Singapore");
const newGraph = cloneGraph("Singapore", graph.adjacencyList);
