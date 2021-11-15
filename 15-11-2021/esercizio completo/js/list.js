import { render } from "./utils.js";

const List = (data) => {
  const elements = data
    .map((item) => `<div><li><input 
    type="checkbox" ${item.completed ? "checked" : ""}  /> ${item.title} ${item.expired} </li></div>`)
    .join(""); 
 

  const container = document.querySelector("#container");
  render(
    container,
    `
    <p>todo list</p>
    <ul>${elements}</ul>`
  );
};

export { List };