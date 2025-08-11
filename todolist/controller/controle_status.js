import { listaCartoes } from "./lista_cartoes.js";
import { bd_cartoes } from './bd_cartao.js';

export function deletarTarefa(id) {
    bd_cartoes[id].status = 'excluido';
    listaCartoes('excluido');
}

export function concluirTarefa(id) {
    bd_cartoes[id].status = 'concluido';
    listaCartoes('concluido');
}

export function restaurarTarefa(id) {
    bd_cartoes[id].status = 'pendente';
    listaCartoes('pendente');
}