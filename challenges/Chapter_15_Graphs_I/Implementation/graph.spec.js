import { Graph } from './graph';

describe('Grpah implementation should work', () => {
  it('Should add nodes to graph correctly', () => {
    const graph = new Graph();
    const expectedRes = ['Singapore', 'Canada', 'India'];
    graph.addNode('Singapore');
    graph.addNode('Canada');
    graph.addNode('India');
    expect([...graph.nodes.keys()]).toEqual(expectedRes);
  });

  it('Should not add nodes of same name', () => {
    const graph = new Graph();
    const expectedRes = ['Singapore', 'Canada'];
    graph.addNode('Singapore');
    graph.addNode('Canada');
    graph.addNode('Canada');
    expect([...graph.nodes.keys()]).toEqual(expectedRes);
  });

  it('Should  add edges correctly', () => {
    const graph = new Graph();
    const expectedRes = ['Singapore', 'Canada'];
    graph.addNode('Singapore');
    graph.addNode('Canada');
    graph.addNode('India');
    graph.addEdges('India', 'Canada');
    graph.addEdges('India', 'Singapore');
    const indiaEdges = graph.nodes.get('India');
    const canadaEdges = graph.nodes.get('Canada');

    expect([...indiaEdges.edges.values()]).toEqual(['Canada', 'Singapore']);
    expect([...canadaEdges.edges.values()]).toEqual(['India']);
  });

  it('Should remove edges correctly', () => {
    const graph = new Graph();
    const expectedRes = ['Singapore', 'Canada'];
    graph.addNode('Singapore');
    graph.addNode('Canada');
    graph.addNode('India');
    graph.addEdges('India', 'Canada');
    graph.removeEdge('India', 'Canada');
    const indiaEdges = graph.nodes.get('India');
    const canadaEdges = graph.nodes.get('Canada');
    expect([...indiaEdges.edges.values()]).toEqual([]);
    expect([...canadaEdges.edges.values()]).toEqual([]);
  });

  it('Should remove nodes correctly', () => {
    const graph = new Graph();
    const expectedRes = ['Singapore', 'Canada'];
    graph.addNode('Singapore');
    graph.addNode('Canada');
    graph.addNode('India');
    graph.addEdges('India', 'Canada');
    graph.addEdges('India', 'Singapore');
    graph.addEdges('Singapore', 'Canada');
    graph.removeNode('India');
    const canadaEdges = graph.nodes.get('Canada');
    const singaporeEdges = graph.nodes.get('Singapore');
    expect([...canadaEdges.edges.values()]).toEqual(['Singapore']);
    expect([...singaporeEdges.edges.values()]).toEqual(['Canada']);
    expect(graph.nodes.get('India')).toBe(undefined);
  });
});
