import modal from "./modules/modal";
import forms from "./modules/form";
import card from "./modules/card";

document.addEventListener("DOMContentLoaded", () => {
    modal("[data-modal]", ".modal");
    forms("form");
    card(".card");
});
