/* INDEX*/
const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

const itemA = document.querySelector("#planes");
const itemB = document.querySelector("#recipes");
const itemC = document.querySelector("#tips");
const itemD = document.querySelector("#contact");

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

  motivation.classList.remove("hiddenAll");
  main.classList.remove("hiddenAll");
  aside.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemB.addEventListener("click", () => {
  nav.classList.remove("visible");

  motivation.classList.remove("hiddenAll");
  main.classList.remove("hiddenAll");
  aside.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemC.addEventListener("click", () => {
  nav.classList.remove("visible");

  motivation.classList.remove("hiddenAll");
  main.classList.remove("hiddenAll");
  aside.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

itemD.addEventListener("click", () => {
  nav.classList.remove("visible");

  motivation.classList.remove("hiddenAll");
  main.classList.remove("hiddenAll");
  aside.classList.remove("hiddenAll");
  footer.classList.remove("hiddenAll");
})

/* TRAINING PLANS */
const P30D = document.querySelector("#P30D");
const PFB = document.querySelector("#PFB");
const PFB2 = document.querySelector("#PFB2");
const PPB = document.querySelector("#PPB");
const PPF = document.querySelector("#PPF");
const PPP = document.querySelector("#PPP");
const PPV = document.querySelector("#PPV");

P30D.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=P30D";
  window.location.href = url;
})

PFB.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PFB";
  window.location.href = url;
})

PFB2.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PFB2";
  window.location.href = url;
})

PPB.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PPB";
  window.location.href = url;
})

PPF.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PPF";
  window.location.href = url;
})

PPP.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PPP";
  window.location.href = url;
})

PPV.addEventListener("click", function(event) {
  event.preventDefault();
  const url = P30D.href + "?id=PPV";
  window.location.href = url;
})

/* RECIPES */
const RTo = document.querySelector("#RTo");
const RBa = document.querySelector("#RBa");
const RPi = document.querySelector("#RPi");
const RTa = document.querySelector("#RTa");
const RBr = document.querySelector("#RBr");

RTo.addEventListener("click", function(event) {
  event.preventDefault();
  const url = RTo.href + "?id=RTo";
  window.location.href = url;
})

RBa.addEventListener("click", function(event) {
  event.preventDefault();
  const url = RBa.href + "?id=RBa";
  window.location.href = url;
})

RPi.addEventListener("click", function(event) {
  event.preventDefault();
  const url = RTo.href + "?id=RPi";
  window.location.href = url;
})

RTa.addEventListener("click", function(event) {
  event.preventDefault();
  const url = RTa.href + "?id=RTa";
  window.location.href = url;
})

RBr.addEventListener("click", function(event) {
  event.preventDefault();
  const url = RBr.href + "?id=RBr";
  window.location.href = url;
})
