const readLine = require('readline');//Modulo

const rl = readLine.createInterface
({
    input: process.stdin,//Entrada de Dados pelo Teclado
    output: process.stdout//Saida de Dados do Teclado
});
rl.question('What\'s your name? ', (name) => //Imprime na propriedade de saida
{
    console.log('Hello there ' + name);//Exibi na tela hello there + nome 
    rl.close(); //Fecha a interface
});