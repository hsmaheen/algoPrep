import { Queue } from '../../Chapter_9_Queue/Implementation/queueImplementation';
import { Graph } from '../Implementation/graph';
import { graphDFSPrint } from '../Depth_First_Search/graphDFS';

export function printGraphBFS(graph) {
  if (!graph) {
    return null;
  }

  const visitMap = new Map();
  const processQueue = new Queue();
  const visitedNodes = [];

  for (const node of graph.nodes.values()) {
    printBFSNode(node, visitMap, processQueue, graph, visitedNodes);
  }
  console.log(...visitedNodes);
  return visitedNodes;
}

function printBFSNode(node, visitMap, processQueue, graph, visitedNodes) {
  if (!visitMap.has(node.val)) {
    visitMap.set(node.val, 'VISITING');
    processQueue.enqueue(node);

    while (!processQueue.isEmpty()) {
      const currNode = processQueue.dequeue();
      visitedNodes.push(currNode.val);
      for (const edge of currNode.edges.values()) {
        const edgeNodeObj = graph.getNode(edge);
        if (!visitMap.has(edgeNodeObj.val)) {
          visitMap.set(edgeNodeObj.val, 'VISITING');
          processQueue.enqueue(edgeNodeObj);
          visitMap.set(edgeNodeObj.val, 'VISITED');
        }
      }
    }

    visitMap.set(node.val, 'VISITED');
  }
}

export function graphBFS(graph, target) {
  if (!graph) {
    return null;
  }

  const visitMap = new Map();
  const processQueue = new Queue();

  for (const node of graph.nodes.values()) {
    if (bfsNode(node, visitMap, processQueue, graph, target)) {
      return true;
    }
  }

  return false;
}

function bfsNode(node, visitMap, processQueue, graph, target) {
  if (!visitMap.has(node.val)) {
    visitMap.set(node.val, 'VISITING');
    processQueue.enqueue(node);

    while (!processQueue.isEmpty()) {
      const currNode = processQueue.dequeue();
      if (currNode.val === target) {
        return true;
      }
      for (const edge of currNode.edges.values()) {
        const edgeNodeObj = graph.getNode(edge);
        if (!visitMap.has(edgeNodeObj.val)) {
          visitMap.set(edgeNodeObj.val, 'VISITING');
          processQueue.enqueue(edgeNodeObj);
          visitMap.set(edgeNodeObj.val, 'VISITED');
        }
      }
    }

    visitMap.set(node.val, 'VISITED');
    return false;
  }
}
