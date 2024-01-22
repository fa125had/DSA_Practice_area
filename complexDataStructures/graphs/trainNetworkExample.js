import { Graph } from "./Graph.js";

// Train network (Weighted and Directed)
const trainNetwork = new Graph(true, true);

// Add stations
const losAngelesStation = trainNetwork.addVertex("Los Angeles");

const sanFranciscoStation = trainNetwork.addVertex("San Francisco");

const newYorkStation = trainNetwork.addVertex("New York");

const atlantaStation = trainNetwork.addVertex("Atlanta");

const denverStation = trainNetwork.addVertex("Denver");

const calgaryStation = trainNetwork.addVertex("Calgary");

// Add Edges and weights
trainNetwork.addEdge(sanFranciscoStation, losAngelesStation, 400);
trainNetwork.addEdge(losAngelesStation, sanFranciscoStation, 400);

trainNetwork.addEdge(newYorkStation, denverStation, 1800);
trainNetwork.addEdge(denverStation, newYorkStation, 1800);

trainNetwork.addEdge(calgaryStation, denverStation, 1000);
trainNetwork.addEdge(denverStation, calgaryStation, 1000);

trainNetwork.addEdge(losAngelesStation, atlantaStation, 2100);
trainNetwork.addEdge(atlantaStation, losAngelesStation, 2100);

trainNetwork.print();
console.log(`\n UPDATE: New York to Denver is closed!\n`);

// Remove the route from New York to Denver
trainNetwork.removeEdge(newYorkStation, denverStation);
trainNetwork.print();

// Remove all routes to/from Calgary
trainNetwork.removeEdge(calgaryStation, denverStation);
trainNetwork.removeEdge(denverStation, calgaryStation);
trainNetwork.removeVertex(calgaryStation);

console.log(`\n UPDATE: Calgary station is not operational today!\n`);
trainNetwork.print();
