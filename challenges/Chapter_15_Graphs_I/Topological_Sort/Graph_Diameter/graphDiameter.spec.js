import { findGraphDiameter } from './graphDiameter';

describe('Graph Diameter Algo', () => {
  it('should return the correct diameter', () => {
    const graph = {
      A: ['D', 'B'],
      B: ['C', 'F'],
      C: [],
      D: ['E'],
      C: [],
      F: ['G', 'H'],
      G: [],
      H: ['I'],
      E: ['I'],
      I: [],
    };

    const diameter = findGraphDiameter(graph);
    expect(diameter).toEqual(4);
  });

  it('should return the correct diameter for disconnected graph', () => {
    const graph = {
      A: ['B'],
      B: [],
      C: ['E', 'D'],
      D: ['F'],
      E: [],
      F: ['G'],
      G: ['H'],
      H: [],
    };

    const diameter = findGraphDiameter(graph);
    expect(diameter).toEqual(4);
  });

  it('should return the correct diameter for graph with no edges', () => {
    const graph = {
      B: [],
      E: [],
      H: [],
    };

    const diameter = findGraphDiameter(graph);
    expect(diameter).toEqual(0);
  });

  it('should return the correct diameter for graph with no edges', () => {
    const graph = {
      B: [],
      E: [],
      H: ['I'],
      I: [],
    };

    const diameter = findGraphDiameter(graph);
    expect(diameter).toEqual(1);
  });
});
