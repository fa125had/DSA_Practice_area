import { Graph } from './Graph.js';

export const testSimpleGraph = new Graph(true, true);
const a = testSimpleGraph.addVertex('A');
const b = testSimpleGraph.addVertex('B');
const c = testSimpleGraph.addVertex('C');

testSimpleGraph.addEdge(a, b, 1);
testSimpleGraph.addEdge(b, c, 1);