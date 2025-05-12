import { createCards } from "./cards_projetos_controller.js";
import { criaraBanner } from "./banner_controller.js";

document.addEventListener("DOMContentLoaded", ()=>{
    criaraBanner();
    createCards();
});