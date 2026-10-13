import fazerDiaDataEHora from './fazerDiaDataEHora.js';
let valorDoInput = document.getElementById('input-item');
let contador = 0;
export function criarItemNaLista() {
if (valorDoInput.value === '') {
    alert('Digite um item para adicionar à lista!');
    return;
}
let dataItem = fazerDiaDataEHora();

let itemDaLista = document.createElement('li');
let containerItemDaLista = document.createElement('div');
containerItemDaLista.classList.add('lista-item-container');
let inputCheckBox = document.createElement('input');
inputCheckBox.type = 'checkbox';
inputCheckBox.id = `checkbox-${contador++}`;
let nomeDoItem = document.createElement('p');
nomeDoItem.innerHTML = valorDoInput.value;
inputCheckBox.addEventListener('click', function () {
    if (inputCheckBox.checked) {
        nomeDoItem.style.textDecoration = 'line-through';
    }else{
        nomeDoItem.style.textDecoration ='none';
    }
})
containerItemDaLista.appendChild(inputCheckBox);
containerItemDaLista.appendChild(nomeDoItem);
itemDaLista.appendChild(containerItemDaLista);
itemDaLista.appendChild(dataItem);
return itemDaLista;
}