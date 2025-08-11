import { deletarTarefa, concluirTarefa, resetarTarefa } from "./controle_status.js";

export function criarCartao() {
    let div_card = document.createElement("div");
    div_card.className = 'card-tarefa';

    let input = document.createElement("input");
    input.className = 'checkbox-card';
    input.type = 'checkbox';

    let div_texts = document.createElement("div");
    div_texts.className = 'card-textos';

    let p_titulo = document.createElement("p");
    p_titulo.className = 'card-titulo';
    p_titulo.textContent = 'TESTETSTES';

    let p_descricao = document.createElement("p");
    p_descricao.className = 'card-descricao'
    p_descricao.textContent = 'descricao';

    let button_card = document.createElement("button");
    button_card.className = 'btn-deletar';
    button_card.textContent = 'Deletar';

    div_texts.appendChild(p_titulo);
    div_texts.appendChild(p_descricao);

    div_card.appendChild(input);
    div_card.appendChild(div_texts);
    div_card.appendChild(button_card);

    const div_lista = document.getElementById("lista-tarefas");
    div_lista.appendChild(div_card);
}
