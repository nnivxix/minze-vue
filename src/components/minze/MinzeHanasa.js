import { Minze, MinzeElement } from "minze";

class MinzeHanasa extends MinzeElement {
  name = "Hanasa";
  html = () => `
  <h1>Hallo ${this.name}</h1>
  `;
}

// Minze.define("minze-hanasa", MinzeHanasa);
export default MinzeHanasa;
