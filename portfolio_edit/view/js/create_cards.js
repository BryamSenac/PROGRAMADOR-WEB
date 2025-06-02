import { getBdCardsProjects, deleteBdCardsProjects } from "../../services/cards_services.js";

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

        let button = document.createElement('button');
        button.className = 'del_button';
        button.addEventListener('click', async ()=>{
            console.log(card_bd.id)
            await deleteBdCardsProjects(card_bd.id);
            createCards();
        });

        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(linguagem);
        card.appendChild(button);

        cards_section.appendChild(card);
    });

}