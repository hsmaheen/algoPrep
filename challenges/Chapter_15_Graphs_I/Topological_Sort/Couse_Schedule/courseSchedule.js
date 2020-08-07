export function findCourseSchedule(numCourses, prerequisites) {
  // Build graph
  const adj = [...Array(numCourses)].map((r) => []);
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }

  return dfs(adj, numCourses);
}

function dfs(graph, numCourses) {
  const data = [...Array(numCourses)].map((r, idx) => [idx, '']);
  const visitedMap = new Map(data);
  const stack = [];

  for (let i = 0; i < graph.length; i++) {
    if (visitedMap.get(i) !== 'VISITED') {
      dfsNode(i, graph, visitedMap, stack);
    }
  }
  return stack.reverse();
}

function dfsNode(node, graph, visitedMap, stack) {
  visitedMap.set(node, 'VISITING');

  for (const edge of graph[node]) {
    if (
      visitedMap.get(edge) !== 'VISITING' &&
      visitedMap.get(edge) !== 'VISITED'
    ) {
      dfsNode(edge, graph, visitedMap, stack);
    }
  }

  visitedMap.set(node, 'VISITED');
  stack.push(node);
}

findCourseSchedule(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
