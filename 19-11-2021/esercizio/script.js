document.addEventListener("DOMContentLoaded", () => {
  const btns = [...document.querySelectorAll("button")];
  const hero = document.querySelector(".hero");

  btns.forEach((button) => {
    button.addEventListener("click", (event) => {
      // const interval = setInterval(() => {
      //   hero.classList.toggle("walk");
      // }, 150);

      // setTimeout(() => {
      //   clearInterval(interval);
      // }, 2000);

      const direction = event.target.classList[0];
      switch (direction) {
        case "up":
          hero.style.top = "50px";
          break;
        case "sx":
          hero.classList.remove("faceDX");
          const walkSX = setInterval(() => {
            hero.classList.toggle("walk");
          }, 150);

          setTimeout(() => {
            clearInterval(walkSX);
          }, 2000);
          hero.style.left = "50px";
          break;
        case "down":
          hero.style.top = "350px";
          break;
        case "dx":
          hero.classList.add("faceDX");
          const walkDX = setInterval(() => {
            hero.classList.toggle("walkDX");
          }, 150);

          setTimeout(() => {
            clearInterval(walkDX);
          }, 2000);
          hero.style.left = "350px";
          break;
      }
    });
  });
});
