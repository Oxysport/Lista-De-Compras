let textoMensagemVazia = document.querySelector('.texto-Mensagem-Vazia');

function verificarListaVazia(listaDeCompras) {
const itensLi = listaDeCompras.querySelectorAll('li');
    if (itensLi.length === 0) {
        textoMensagemVazia.style.display = 'block';
        textoMensagemVazia.style.backgroundColor = 'red';
    }else {
        textoMensagemVazia.style.display = 'none';
    }
}

export default verificarListaVazia;