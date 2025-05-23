import { createCards } from "../view/js/create_cards.js";
import { deleteBdCardsProjects, postBdCardsProjects, putBdCardsProjects } from "../services/cards_services.js";

document.addEventListener('DOMContentLoaded', () => {
    createCards();
});

document.getElementById('post').addEventListener('submit', async (event) => {
    event.preventDefault()

    const name_create = document.getElementById('name_create').value
    const languages_create = document.getElementById('languages_create').value
    const img_create = document.getElementById('img_create').value

    if (!name_create || !languages_create || !img_create) {
        alert("Algum valor em branco!");
    } else {
        await postBdCardsProjects(name_create, languages_create, img_create);
        createCards();
    }
});

document.getElementById('delete').addEventListener('submit', async (event) => {
    event.preventDefault()

    const id_delete = document.getElementById('id_delete').value

    if (!id_delete) {
        alert("Algum valor em branco!");
    } else {
        await deleteBdCardsProjects(id_delete);
        createCards();
    }
});

document.getElementById('put').addEventListener('submit', async (event) => {
    event.preventDefault()

    const name_att = document.getElementById('name_att').value
    const languages_att = document.getElementById('languages_att').value
    const img_att = document.getElementById('img_att').value
    const id_att = document.getElementById('id_att').value


    if (!name_att || !languages_att || !img_att || !id_att) {
        alert("Algum valor em branco!");
    } else {
        await putBdCardsProjects(id_att, name_att, languages_att, img_att);
        createCards();
    }
});

