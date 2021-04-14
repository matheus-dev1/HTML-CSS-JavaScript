let n = 5

//Potenciacao
document.write(Math.pow(n, 10))

document.write("<hr />")

let n2 = 5.3

//Arredonda pra cima SEMPRE
document.write(Math.ceil(n2))

document.write("<hr />")

let n3 = 5.8

//Arredonda para baixo SEMPRE
document.write(Math.floor(n3))

document.write("<hr />")

let n4 = 5.5

//Arredonda respeitando a fracao.
document.write(Math.round(n4))

let n5 = 66

document.write("<hr />")

//Raiz quadrada de um numero
document.write(Math.sqrt(n5))

document.write("<hr />")

let n6 = 8

//Raiz cubica 
document.write(Math.cbrt(n6))

document.write("<hr />")

//Aqui eu estou retornando um numero inteiro entre 0 e 10
/* Depois do sinbolo de multiplicacao eu devo colocar o numero em que eu quero um "limite" ou seja do 0 ate este numero e eu uso o round para nao ficar com numeros flutuantes. */
let random = Math.round(Math.random() * 50)

document.write(random.toFixed(3))

document.write("<hr />")

let random1 = Math.random() * 99

document.write(random1.toFixed(3))