function fazerDiaDataEHora () {

const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday : 'long'});
const data = new Date().toLocaleDateString('pt-BR');
const horasEMinutos = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});
const dataInteira = `${diaDaSemana} ${(data)} às ${horasEMinutos}`;
const dataItem= document.createElement('p');
dataItem.innerHTML = dataInteira;
dataItem.classList.add('texto-data');
return dataItem;
}

export default fazerDiaDataEHora;