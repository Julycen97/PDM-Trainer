const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const itemA = document.querySelector("#planes");;
const itemB = document.querySelector("#recetas");;
const itemC = document.querySelector("#tips");;
const itemD = document.querySelector("#contacto");;

const motivation = document.querySelector(".Motivation");
const main = document.querySelector(".Main");
const aside = document.querySelector(".Aside");
const footer = document.querySelector(".Footer");



abrir.addEventListener("click", () => {
    nav.classList.add("Visible");
    
    motivation.classList.add("HiddenAll");
    main.classList.add("HiddenAll");
    aside.classList.add("HiddenAll");
    footer.classList.add("HiddenAll");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("Visible");

    motivation.classList.remove("HiddenAll");
    main.classList.remove("HiddenAll");
    aside.classList.remove("HiddenAll");
    footer.classList.remove("HiddenAll");
})

itemA.addEventListener("click", () => {
  nav.classList.remove("Visible");
})

itemB.addEventListener("click", () => {
  nav.classList.remove("Visible");
})

itemC.addEventListener("click", () => {
  nav.classList.remove("Visible");
})

itemD.addEventListener("click", () => {
  nav.classList.remove("Visible");
})


