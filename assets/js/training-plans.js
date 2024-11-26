const namePlan = document.getElementById("namePlan");
const descriptionPlan = document.getElementById("descPlan");
const imgPlan1 = document.getElementById("imgPlan1");
const imgPlan2 = document.getElementById("imgPlan2");
const imgPlan3 = document.getElementById("imgPlan3");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

switch (id) {
    case "P30D":
        namePlan.textContent = "Plan 30 Días";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PFB":
        namePlan.textContent = "Plan Full Body Fem";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PFB2":
        namePlan.textContent = "Plan Full Body";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PPB":
        namePlan.textContent = "Plan Personalizado Basic";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PPF":
        namePlan.textContent = "Plan Personalizado Full";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PPP":
        namePlan.textContent = "Plan Personalizado Premium";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;

    case "PPV":
        namePlan.textContent = "Plan Personalizado VIP";
        descriptionPlan.textContent = "Descripcion autogenerada automaticament";
        break;
}