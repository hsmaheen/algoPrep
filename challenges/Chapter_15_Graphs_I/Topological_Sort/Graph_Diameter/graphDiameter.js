export function findGraphDiameter(graph = {}) {
  if (!graph) {
    return null;
  }

  const longestPath = [];
  let diameter = 0;
  for (const node in graph) {
    const sortedNodes = [];
    getTopoSortedNode(node, graph, new Map(), sortedNodes);
    while (sortedNodes.length !== 0) {
      const currNode = sortedNodes.pop();
      const currLen = longestPath[currNode] || 0;
      diameter = Math.max(diameter, currLen);

      for (const edge of graph[currNode]) {
        if (currLen + 1 > (longestPath[edge] || 0)) {
          longestPath[edge] = currLen + 1;
        }
      }
    }
  }

  return diameter;
}

function getTopoSortedNode(node, graph, visitedMap, stack) {
  visitedMap.set(node, 'VISITING');

  for (const edge of graph[node]) {
    if (
      !visitedMap.has(edge) ||
      (visitedMap.get(edge) !== 'VISITING' &&
        visitedMap.get(edge) !== 'VISITED')
    ) {
      getTopoSortedNode(edge, graph, visitedMap, stack);
    }
  }

  visitedMap.set(node, 'VISITED');
  stack.push(node);
}

findGraphDiameter({
  A: ['B'],
  B: [],
  C: ['E', 'D'],
  D: ['F'],
  E: [],
  F: ['G'],
  G: ['H'],
  H: [],
});
