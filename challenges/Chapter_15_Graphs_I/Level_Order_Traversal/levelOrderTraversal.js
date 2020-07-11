import { Queue } from '../../Chapter_9_Queue/Implementation/queueImplementation';
import { Graph } from '../Implementation/graph';

export function levelOrderTraversal(graph) {
  const levels = [];

  if (graph.nodes.size > 0) {
    const rootNode = graph.nodes.values().next().value;

    traverseNode(rootNode, levels, graph);
  }

  return levels;
}

function traverseNode(node, levels, graph) {
  const processQueue = new Queue();
  processQueue.enqueue(node);

  while (!processQueue.isEmpty()) {
    const currentLevel = [];

    let layerSize = processQueue.length;

    while (layerSize > 0) {
      const currNode = processQueue.dequeue();
      currentLevel.push(currNode.val);
      for (const edge of currNode.edges.values()) {
        const edgeNode = graph.getNode(edge);
        processQueue.enqueue(edgeNode);
      }
      layerSize--;
    }

    levels.push(currentLevel);
  }
}
