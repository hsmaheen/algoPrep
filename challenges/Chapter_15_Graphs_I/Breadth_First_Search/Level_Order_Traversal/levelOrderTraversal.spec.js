const { levelOrderTraversal } = require('./levelOrderTraversal');
const { Graph } = require('../../Implementation/graph');

describe('Level Order Traversal Algo should work', () => {
  it('should get all the levels correctly', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');

    graph.addDirectedEdge('A', 'B');
    graph.addDirectedEdge('A', 'C');
    graph.addDirectedEdge('B', 'D');
    graph.addDirectedEdge('B', 'E');
    graph.addDirectedEdge('C', 'F');
    graph.addDirectedEdge('C', 'G');

    const expectedLevels = [['A'], ['B', 'C'], ['D', 'E', 'F', 'G']];

    const levels = levelOrderTraversal(graph);
    expect(levels).toEqual(expectedLevels);
  });

  it('should return empty array when graph is empty', () => {
    const graph = new Graph();
    const levels = levelOrderTraversal(graph);
    expect(levels).toEqual([]);
  });
});
