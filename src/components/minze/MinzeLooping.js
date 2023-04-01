import { MinzeElement } from "minze";

class MinzeLooping extends MinzeElement {
  users = [
    {
      id: 1,
      name: "Hanasa",
    },
    {
      id: 2,
      name: "Maya",
    },
  ];
  html = () => /*html*/ `
    <ul>
      ${this.users
        .map((user) => `<li>id: ${user.id} - name: ${user.name}</li>`)
        .join("")}
    </ul>
  `;

  css = () => /*css*/ `
  :host {
    display: block;
    text-align: left;
  }
  li {
    list-style-type: none;
  }
  `;
}

export default MinzeLooping;
