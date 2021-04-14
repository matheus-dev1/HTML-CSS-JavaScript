// Array
const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

// O filter me retorna os items que a expressao for verdadeira em um nobo array.
// O includes verifica se este valor possui em deternminado valor.  
const precosFiltro = precos.filter(preco => preco.includes("R$"));

// O map e tipo um for que passa por todo os item de um array individualmente e me retorna um novo array, mudancas nos valores unicos de cada interacao altera no novo array.
// O replace vai receber dois argumentos o primeiro e o valor em que eu busco e quero alterar e o segundo e o valor em que sera alterado.
const precoNumeros = precosFiltro.map(preco =>
    Number(preco.replace("R$ ", ""))
);
  
// Retorna um valor um único, o valor retornado
// fica disponível na próxima iteração através do
// primeiro argumento, por isso o nome acumulador

// primeiro valor e o anterior e o seugndo e o atual
// O reduce recebe como parametro dois valores, o primeiro e a interacao anterior, e o segundo e a interacao atual.
// Ele apenas pode me retornar um unico valor e voce pode usar alguma logica para pegar apenas o valor que seja determinado valor.
const total = precoNumeros.reduce((previousValue, currentValue) => previousValue + currentValue);
  
console.log(total);