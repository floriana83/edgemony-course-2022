document.addEventListener("DOMContentLoaded", () => {
    const btnJump = document.querySelector(".w");
    const btnDw = document.querySelector(".s");
    const btnSx = document.querySelector(".a");
    const btnDx = document.querySelector(".d");


    const dora = document.querySelector(".girl");


    let moveleft = 350;
    let movetop = 180;

    dora.style.left = `${moveleft}px`;
    dora.style.top = `${movetop}px`;

    btnJump.addEventListener('click', (e) => {
        e.preventDefault();

        if (movetop > 0) {
            dora.classList.toggle('animate__bounce');
            setTimeout(() => dora.classList.toggle('animate__bounce'), 1200);
        }

    });

    btnDw.addEventListener('click', (e) => {
        e.preventDefault();
        if (movetop < 270) {
            dora.classList.toggle('down');
            movetop = movetop + 100;
            dora.style.top = `${movetop}px`;
            setTimeout(() => dora.classList.toggle('down'), 400);
        }
    });


    btnSx.addEventListener('click', (e) => {
        e.preventDefault();
        if (moveleft > 86) {
            dora.classList.toggle('left');
            moveleft = moveleft - 100;
            dora.style.left = `${moveleft}px`;
            setTimeout(() => dora.classList.toggle('left'), 400);
        }
    });

    btnDx.addEventListener('click', (e) => {
        e.preventDefault();
        if (moveleft < 586) {
            dora.classList.toggle('right');
            moveleft = moveleft + 100;
            dora.style.left = `${moveleft}px`;
            setTimeout(() => dora.classList.toggle('right'), 400);
        }
    });

})