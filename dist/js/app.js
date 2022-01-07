import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 1000);
console.log('Data ->', negociacao.data);
console.log('Quantidade ->', negociacao.quantidade);
console.log('Valor ->', negociacao.valor);
console.log('Volume ->', negociacao.volume);
