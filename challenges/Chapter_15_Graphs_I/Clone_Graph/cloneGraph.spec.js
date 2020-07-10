import { cloneGraph } from './cloneGraph';
import { Graph } from '../Implementation/graph';
describe('Clone Graph Algo Should Work', () => {
  it('should return null when graph is null', () => {
    const clonedGraph = cloneGraph(null);
    expect(clonedGraph).toBe(null);
  });

  it('should clone the clone the graph correctly ', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdges('A', 'B');
    graph.addEdges('B', 'C');
    graph.addEdges('A', 'C');

    const clonedGraph = cloneGraph(graph);
    expect(clonedGraph).toEqual(graph);
  });

  it('should clone the clone the graph correctly even when hanging nodes are there ', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addEdges('A', 'B');
    graph.addEdges('C', 'B');
    graph.addEdges('A', 'C');

    const clonedGraph = cloneGraph(graph);
    expect(clonedGraph).toEqual(graph);
  });

  it('should clone the clone the graph correctly even when nodes have no edges', () => {
    const graph = new Graph();
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    const clonedGraph = cloneGraph(graph);
    expect(clonedGraph).toEqual(graph);
  });

  it('should clone the clone the graph correctly when the graph is empty', () => {
    const graph = new Graph();
    const clonedGraph = cloneGraph(graph);

    expect(clonedGraph).toEqual(graph);
  });
});
