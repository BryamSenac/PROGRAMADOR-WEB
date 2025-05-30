import { getProjects } from "../services/projects_services.js";

export async function createCards() {
    let cards_section = document.getElementById('cards');
    
    const bd_cards_projetos = await getProjects();
    
    bd_cards_projetos.map((card_bd, index)=>{
        let card = document.createElement('div');

        let card_container = document.createElement('div');
        card_container.className = 'card_container';

        let img = document.createElement('img');
        img.src = card_bd.img;
        let nome = document.createElement('h1');
        nome.textContent = card_bd.nome;
        let linguagem = document.createElement('h3');
        linguagem.textContent = card_bd.linguagem;
        
        card_container.appendChild(img);
        card_container.appendChild(nome);
        card_container.appendChild(linguagem);
        
        card.appendChild(card_container);
        cards_section.appendChild(card);
    });

}