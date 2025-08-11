import { deletarTarefa, concluirTarefa, restaurarTarefa } from "./controle_status.js";
import { bd_cartoes } from "./bd_cartao.js";

export function criarCartao(id) {
    let div_card = document.createElement("div");
    div_card.className = 'card-tarefa';

    if (bd_cartoes[id].status != 'excluido') {
        let input = document.createElement("input");
        input.className = 'checkbox-card';
        input.type = 'checkbox';
        if (bd_cartoes[id].status === 'concluido') {//Deveria ser === e estava como !=
            input.checked = true;
            input.addEventListener('click',()=>{
                restaurarTarefa(id);//Faltou passar o ID como paramentro
            });
        }else{
            input.addEventListener('click',()=>{
                concluirTarefa(id);//Faltou passar o ID como paramentro
            });
        }
        div_card.appendChild(input);
    }

    let div_texts = document.createElement("div");
    div_texts.className = 'card-textos';

    let p_titulo = document.createElement("p");
    p_titulo.className = 'card-titulo';
    p_titulo.textContent = bd_cartoes[id].titulo;

    let p_descricao = document.createElement("p");
    p_descricao.className = 'card-descricao'
    p_descricao.textContent = bd_cartoes[id].descricao;

    div_texts.appendChild(p_titulo);
    div_texts.appendChild(p_descricao);
    div_card.appendChild(div_texts);

    if (bd_cartoes[id].status != 'concluido') {
        let button_card = document.createElement("button");
        if (bd_cartoes[id].status === 'pendente') {///Deveria ser === e estava como !=
            button_card.className = 'btn-deletar';
            button_card.textContent = 'Deletar';
            button_card.addEventListener('click', () => {
                deletarTarefa(id);
            });
        } else {
            button_card.className = 'btn-restaurar';
            button_card.textContent = 'Restaurar';
            button_card.addEventListener('click', () => {
                restaurarTarefa(id);
            });
        }
        div_card.appendChild(button_card);
    }

    const div_lista = document.getElementById("lista-tarefas");
    div_lista.appendChild(div_card);
}
