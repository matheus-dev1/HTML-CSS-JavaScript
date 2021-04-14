// Quando eu exporto com o "default" eu posso usar qualquer nome para este import, agora quando eu coloco apenas export eu preciso colocar o nome exado do que eu estou exportando.

// TypeModulo eh inteligente para saber se um arquivo foi importado, fazendo com que se voce importar um arquivo mais de uma vez dentro todos arquivo importados ele ira apenas importar de fato, gastando memoria, uma vez.
// Em Opcoes do Desenvolvedor e Network nos conseguimos ver o modulos importados.

import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";
import Circulo from "./Circulo.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(5));
console.log(numeroAleatorio());
console.log(Circulo.area(5));
console.log(Circulo.circunferencia(5));
console.log(Circulo.aleatorio());