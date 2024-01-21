import { Edge } from "./Edge.js";

export class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex));
    } else {
      throw new Error("Given vertex should be an instance of Vertex class.");
    }
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}
