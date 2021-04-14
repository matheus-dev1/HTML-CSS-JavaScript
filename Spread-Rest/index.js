/* Operador Rest/Spread === ...*/

/* Spread(Separar) === ...*/
/* String */

let nome = "Matheus";
console.log(...nome);

/* Array */

let list1 = ['banana', 'maca', 'laranja', 'mamao'];
let list2 = ['pao', 'queijo', 'carne', 'presunto'];
/* Eu separo os dois arrays e depois junto tudo e armazendo em uma variavel */
let listaCompleta = [...list1, ...list2];
console.log(...listaCompleta);

let numero = [200, 1, 2300, 98, 355, 9844]

// Se eu nao passar com o operador Spread ele vai dar NaN porque eu estou passando um Array e nao um numero, e quando eu uso o operado Spread eu separo ele fazendo como eu tivesse escrevendo todos os valores como parametro.
console.log("Maior numero: " + Math.max(...numero))
console.log("Menor numero: " + Math.min(...numero))

// Quando eu faco uma atribuicao de uma variavel para outra eu estou fazendo uma referencia da variavel e nao atribuindo os valores proprieamente ditos.

// Objetos
const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020
};

const refCarro = carro
console.log(refCarro === carro)
const cloneCarro = { ...carro };
const carroEsportivo = { turbo: true, ...carro };

// Transformar ArrayLike and Array
const items = document.querySelectorAll("li");

// items.map() não existe, agora [...items]
// é uma nova array, com cada elemento de items.
[...items].map(item => (item.innerText = "Teste"));

/* Objeto Literal */

let Car = {
	cor: "branco",
  portas: 4,
  motor: true,
  rodas: 4
}

console.log(Car)

let CarroTurbinado = {
  // Podemos colocar um objeto literal dentro de outro.
  // Aqui eu vou serapar/quebrar o objeto e inserir dentro de outro objeto nao como um objeto mas apenas com os valores.
	...Car,
  turbo: true
}

console.log(CarroTurbinado)

/* Rest(Juntar) */

// Passando ... ao pedido eu crio um array vazio com tamanho indefinido, ou seja quando executar essa funcao no meu segundo parametro sera uma array de varios valores.
function comprar(cliente, ...pedido){
	console.log(cliente, pedido)
}

comprar("Matheus", "Chocolate", "Salgadinho", "Bolacha");

//Rest
function MaiorNumero(...numeros){
  //Spread
  console.log(Math.max(...numeros))
}

MaiorNumero(1, 564, 675765, 797089, 76578758);

/* 1. Criar uma função de soma, que recebe como parâmetro vários valores inteiros, somar todos os valores passados por parâmetro e exibir no console. (usar o operador rest/spread) */

function soma(...numeros){
	let total = 0;
  numeros.map((numero) => {
  		total += numero
  })
  console.log(total)
  return total
}

soma(5, 5)