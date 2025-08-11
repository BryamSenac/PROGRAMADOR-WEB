import { listaCartoes } from "./lista_cartoes.js";
import { bd_cartoes } from './bd_cartao.js';

export function addCartao(){
    let input_titulo = document.getElementById('input-titulo');
    let textarea_descricao = document.getElementById('input-descricao');
    let status = 'pendente';

    bd_cartoes.push(
        {
            titulo: input_titulo.value,
            descricao: textarea_descricao.value,
            status: status,
        }
    );

    input_titulo.value = '';
    textarea_descricao.value = '';

    console.log(bd_cartoes);

    listaCartoes('pendente');
}

