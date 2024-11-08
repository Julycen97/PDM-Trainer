const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

const itemA = document.querySelector("#planes");;
const itemB = document.querySelector("#recipes");;
const itemC = document.querySelector("#tips");;
const itemD = document.querySelector("#contact");;

const motivation = document.querySelector(".motivation");
const main = document.querySelector(".main");
const aside = document.querySelector(".aside");
const footer = document.querySelector(".footer");


open.addEventListener("click", () => {
    nav.classList.add("visible");
    
    motivation.classList.add("hiddenAll");
    main.classList.add("hiddenAll");
    aside.classList.add("hiddenAll");
    footer.classList.add("hiddenAll");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");

    motivation.classList.remove("hiddenAll");
    main.classList.remove("hiddenAll");
    aside.classList.remove("hiddenAll");
    footer.classList.remove("hiddenAll");
})

itemA.addEventListener("click", () => {
  nav.classList.remove("visible");
})

itemB.addEventListener("click", () => {
  nav.classList.remove("visible");
})

itemC.addEventListener("click", () => {
  nav.classList.remove("visible");
})

itemD.addEventListener("click", () => {
  nav.classList.remove("visible");
})

