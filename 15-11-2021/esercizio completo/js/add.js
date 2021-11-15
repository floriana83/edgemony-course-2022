import { render, API } from "./utils.js";

const Add = () => {
  const container = document.querySelector("#container");

  render(
    container,
    `<div>
    <h3>Aggiungi una nuova scheda</h3>
    <form id="create">
      <div class="row">

        <label for="title">Titolo:</label>
        <input type="text" id="title" name="title" />
      </div>

      <div class="row">
        <label for="completed">Check:</label>
        <input type="checkbox" id="completed" name="completed" />
      </div>

      <div class="row">
        <label for="expired">expired:</label>
        <input type="date" min="2021-11-15" value="2021-11-15" id="expired" name="expired" />
      </div>


      <button>Salva</button>
    </form>
  </div>`
  );

  const form = document.querySelector("#create");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const toDo = {
      title: event.target.title.value,
      completed: event.target.completed.checked,
      expired: event.target.expired.value,
 
    };

    console.log(toDo);

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDo),
    });
  });
};

export { Add };
