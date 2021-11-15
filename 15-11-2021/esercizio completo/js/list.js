import { render } from "./utils.js";

const List = (data) => {
  const elements = data
    .map((item) => `<li><li><label><input 
    type="checkbox" ${item.completed ? "checked" : ""}  /> ${item.title} ${item.expires}</label></li>`)
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