/*
Dijkstra’s Algorithm is used for evaluating the shortest paths between vertices in a graph.

implementation will take the following steps:

1- Evaluate the distances between the starting vertex and its neighbors
2- If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor
3- Dequeue the next vertex to evaluate
4- Repeat steps 2 - 3 until there are no more vertices left in the queue.
*/

import { PriorityQueue } from "./priorityQueue.js";
import { testGraph } from "./testGraph.js";
import { testSimpleGraph } from "./testSimpleGraph.js";

const dijkstras = (graph, startingVertex) => {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    queue.add({ vertex: startingVertex, priority: 0 });

    graph.vertices.forEach((vertex) => {
        distances[vertex.data] = Infinity;
        previous[vertex.data] = null;
    });

    distances[startingVertex.data] = 0;

    while (!queue.isEmpty()) {
        const { vertex } = queue.popMin();

        vertex.edges.forEach((edge) => {
            const alternate = edge.weight + distances[vertex.data];
            const neighborValue = edge.end.data;

            if (alternate < distances[neighborValue]) {
                distances[neighborValue] = alternate;
                previous[neighborValue] = vertex;

                queue.add({ vertex: edge.end, priority: distances[neighborValue] })
            }
        })
    }

    return { distances, previous };
};

const results = dijkstras(testGraph, testSimpleGraph.vertices[0]);
console.log(results);
