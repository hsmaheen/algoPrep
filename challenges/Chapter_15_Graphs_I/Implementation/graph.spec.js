import { Graph } from "./graph";

describe("Grpah implementation should work", () => {
  it("Should add nodes to graph correctly", () => {
    const graph = new Graph();
    const expectedRes = ["Singapore", "Canada", "India"];
    graph.addNode("Singapore");
    graph.addNode("Canada");
    graph.addNode("India");
    expect([...graph.adjacencyList.keys()]).toEqual(expectedRes);
  });

  it("Should not add nodes of same name", () => {
    const graph = new Graph();
    const expectedRes = ["Singapore", "Canada"];
    graph.addNode("Singapore");
    graph.addNode("Canada");
    graph.addNode("Canada");
    expect([...graph.adjacencyList.keys()]).toEqual(expectedRes);
  });

  it("Should  add edges correctly", () => {
    const graph = new Graph();
    const expectedRes = ["Singapore", "Canada"];
    graph.addNode("Singapore");
    graph.addNode("Canada");
    graph.addNode("India");
    graph.addEdge("India", "Canada");
    graph.addEdge("India", "Singapore");
    const indiaEdges = graph.adjacencyList.get("India");
    const canadaEdges = graph.adjacencyList.get("Canada");
    expect(indiaEdges).toEqual(["Canada", "Singapore"]);
    expect(canadaEdges).toEqual(["India"]);
  });

  it("Should remove edges correctly", () => {
    const graph = new Graph();
    const expectedRes = ["Singapore", "Canada"];
    graph.addNode("Singapore");
    graph.addNode("Canada");
    graph.addNode("India");
    graph.addEdge("India", "Canada");
    graph.removeEdge("India", "Canada");
    const indiaEdges = graph.adjacencyList.get("India");
    const canadaEdges = graph.adjacencyList.get("Canada");
    expect(indiaEdges).toEqual([]);
    expect(canadaEdges).toEqual([]);
  });

  it("Should remove nodes correctly", () => {
    const graph = new Graph();
    const expectedRes = ["Singapore", "Canada"];
    graph.addNode("Singapore");
    graph.addNode("Canada");
    graph.addNode("India");
    graph.addEdge("India", "Canada");
    graph.addEdge("India", "Singapore");
    graph.addEdge("Singapore", "Canada");
    graph.removeNode("India");
    const canadaEdges = graph.adjacencyList.get("Canada");
    const singaporeEdges = graph.adjacencyList.get("Singapore");
    expect(canadaEdges).toEqual(["Singapore"]);
    expect(singaporeEdges).toEqual(["Canada"]);
    expect(graph.adjacencyList.get("India")).toBe(undefined);
  });
});
