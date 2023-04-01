import { Minze, MinzeElement } from "minze";

class MinzeHello extends MinzeElement {
  attrs = ["name"];
  static observedAttributes = ["name"];
  reactive = [["count", 0]];
  html = () => /* html */ `
  <h1>Hello ${this.name}</h1>
  <p>${this.count}</p>
  <button class="counter">Add Count Minze</button>
  `;

  handleClick = () => {
    this.count += 1;
  };
  css = () => /* css */ `
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  `;
  eventListeners = [["button", "click", this.handleClick]];
}

// HelloMinze.define("hello-minze");

export default MinzeHello;
