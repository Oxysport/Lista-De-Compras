import { criarItemNaLista } from './Script/criarItemNaLista.js';
import verificarListaVazia from './Script/verificarListaVazia.js';
const listaDeCompras = document.getElementById('lista-de-compras');
let botao = document.getElementById('adicionar-item');
botao.addEventListener('click', (evento) => {
evento.preventDefault();
const itemDaLista = criarItemNaLista();
listaDeCompras.appendChild(itemDaLista);
verificarListaVazia(listaDeCompras);
})


verificarListaVazia(listaDeCompras);
