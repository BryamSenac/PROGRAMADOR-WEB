import { formacoes } from './../model/cards_formation_bd.js';

export function createCards() {
    let cards_section = document.getElementById('cards-fomation');
    
    formacoes.map((card_formation) => {
        let card = document.createElement('div');
        card.className = 'card-formation';

        let titulo = document.createElement('h1');
        titulo.textContent = card_formation.nome;
        let horas = document.createElement('h3');
        horas.textContent = card_formation.cargaHoraria;

        card.appendChild(titulo);
        card.appendChild(horas);

        cards_section.appendChild(card);
    });
}