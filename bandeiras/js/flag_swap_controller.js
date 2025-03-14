import { flags } from "./flags_bd.js";

export function swapFlag(index){
    let flagsController = document.getElementById("flags-controller");
    flagsController.style.top = `-${index * 100}vh`;

    let titleFlag = document.getElementById("flag-name");
    let descriptionFlag = document.getElementById("flag-description");

    let body = document.getElementById("body");

    titleFlag.textContent = flags[index].flagName;
    descriptionFlag.textContent = flags[index].flagDescription;
    body.style.backgroundImage = `url(${flags[index].img})`
}