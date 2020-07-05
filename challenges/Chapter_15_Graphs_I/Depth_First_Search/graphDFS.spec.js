import { Graph } from '../Implementation/graph';
import { graphDFS } from './graphDFS';

describe('Graph DFS Should work', () => {
  it('should return false if the node does not exists in the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');

    graph.addEdges('A', 'B');
    graph.addEdges('A', 'C');
    graph.addEdges('B', 'D');
    graph.addEdges('C', 'E');
    graph.addEdges('D', 'E');
    graph.addEdges('D', 'F');
    graph.addEdges('E', 'F');

    expect(graphDFS(graph, 'I')).toEqual(false);
  });

  it('should return true if the node does not exists in the graph', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');

    graph.addEdges('A', 'B');
    graph.addEdges('A', 'C');
    graph.addEdges('B', 'D');
    graph.addEdges('C', 'E');
    graph.addEdges('D', 'E');
    graph.addEdges('D', 'F');
    graph.addEdges('E', 'F');

    expect(graphDFS(graph, 'F')).toEqual(true);
  });
});
