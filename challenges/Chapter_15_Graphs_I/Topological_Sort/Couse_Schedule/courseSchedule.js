export function findCourseSchedule(numCourses, prerequisites) {
  // Build graph

  const adj = new Map();

  for (let [edge, node] of prerequisites) {
    adj.has(node) ? adj.get(node).push(edge) : adj.set(node, [edge]);
    if (!adj.has(edge)) {
      adj.set(edge, []);
    }
  }

  const stack = [];
  const visitedMap = new Map();

  for (const node of adj.keys()) {
    getTopoNode(node, adj, visitedMap, stack);
  }

  return stack.reverse();
}

function getTopoNode(node, graph, visitedMap, stack) {
  if (!visitedMap.has(node)) {
    visitedMap.set(node, 'VISITING');

    for (const edge of graph.get(node).values()) {
      if (
        !graph.has(edge) ||
        (graph.get(edge) !== 'VISITING' && graph.get(edge) !== 'VISITED')
      ) {
        getTopoNode(edge, graph, visitedMap, stack);
      }
    }

    visitedMap.set(node, 'VISITED');
    stack.push(node);
  }
}
