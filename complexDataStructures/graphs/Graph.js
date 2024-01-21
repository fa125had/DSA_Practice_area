import { Vertex } from "./Vertex.js";

export class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertexToRemove) {
    this.vertices = this.vertices.filter((vertex) => vertex !== vertexToRemove);
  }

  addEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo);
      vertexTwo.addEdge(vertexOne);
    } else {
      throw new Error(
        "Both given vertices should be instance of Vertex class."
      );
    }
  }

  print() {
    const vertexList = this.vertices || [];
    vertexList.forEach((vertex) => vertex.print());
  }
}
