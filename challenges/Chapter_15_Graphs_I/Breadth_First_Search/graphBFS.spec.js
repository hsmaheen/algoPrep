import { graphBFS, printGraphBFS } from './grpahBFS';
import { Graph } from '../Implementation/graph';

describe('Graph BFS should work', () => {
  it('should return false if node does not exist ', () => {
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

    expect(graphBFS(graph, 'I')).toEqual(false);
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

    expect(graphBFS(graph, 'F')).toEqual(true);
  });

  it('should return false if graph is empty', () => {
    const graph = new Graph();
    expect(graphBFS(graph, 'F')).toEqual(false);
  });

  it('should print graph in BFS way', () => {
    const graph = new Graph();
    graph.addNode('1');
    graph.addNode('2');
    graph.addNode('3');
    graph.addNode('4');
    graph.addNode('5');
    graph.addNode('6');

    graph.addEdges('1', '2');
    graph.addEdges('1', '3');
    graph.addEdges('2', '4');
    graph.addEdges('3', '4');
    graph.addEdges('3', '5');
    graph.addEdges('4', '6');
    graph.addEdges('5', '6');
    const bfsArray = printGraphBFS(graph);
    expect(bfsArray).toEqual(['1', '2', '3', '4', '5', '6']);
  });
});
