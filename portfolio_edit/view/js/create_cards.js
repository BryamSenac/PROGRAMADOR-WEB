import { getBdCardsProjects } from "../../services/cards_services.js";

export async function createCards() {
    let cards_section = document.getElementById('cards');
    cards_section.innerHTML = '';

    const bd_cards_projetos = await getBdCardsProjects();

    bd_cards_projetos.map((card_bd, index) => {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = card_bd.img;
        let nome = document.createElement('h1');
        nome.textContent = card_bd.nome;
        let linguagem = document.createElement('h3');
        linguagem.textContent = card_bd.linguagem;

        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(linguagem);

        cards_section.appendChild(card);
    });

}