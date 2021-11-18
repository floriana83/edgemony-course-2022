const btnUp = document.querySelector(".w");
const btnDw = document.querySelector(".s");
const btnSx = document.querySelector(".a");
const btnDx = document.querySelector(".d");
const dora = document.querySelector(".girl");


btnUp.addEventListener("click", () => {
    dora.classList.toggle("girl1");
    setTimeout(() => {
        btnUp.classList.remove("girl1");
    }, 1000);
})
btnDw.addEventListener("click", () => {
    dora.classList.toggle("girl4");
    setTimeout(() => {
        btnDw.classList.remove("girl4");
    }, 1000);
})
btnSx.addEventListener("click", () => {
    dora.classList.toggle("girl2");
    setTimeout(() => {
        btnUp.classList.remove("girl2");
    }, 1000);
})

btnDx.addEventListener("click", () => {
    dora.classList.toggle("girl3");
    setTimeout(() => {
        btnUp.classList.remove("girl3");
    }, 1000);
})