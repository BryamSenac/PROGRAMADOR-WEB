import { bd_cartoes } from './bd_cartao.js';
import { criarCartao } from './criar_cartao.js';

export function listaCartoes(status) {
    let lista_tarefas = document.getElementById('lista-tarefas');
    lista_tarefas.innerHTML = '';

    //RESETA a aparencia dos 3 botoes do menu, conforme o clique
    let btn_menu_pendentes = document.getElementById('btn-pendentes');
    let btn_menu_concluidas = document.getElementById('btn-concluidas');
    let btn_menu_deletadas = document.getElementById('btn-deletadas');

    btn_menu_pendentes.classList.remove('ativo');
    btn_menu_concluidas.classList.remove('ativo');
    btn_menu_deletadas.classList.remove('ativo');

    switch (status) {
        case 'excluido':
            btn_menu_deletadas.classList.add('ativo');
            break;
        case 'concluido':
            btn_menu_concluidas.classList.add('ativo');
            break;
        case 'pendente':
            btn_menu_pendentes.classList.add('ativo');
            break;
        default:
            break;
    }

    for (let i = 0; i < bd_cartoes.length; i++) {
        if (bd_cartoes[i].status === status) {
            criarCartao(i);
        }
    }
}