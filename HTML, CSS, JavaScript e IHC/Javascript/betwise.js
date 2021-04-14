let x = parseInt('0101', 2); // 0101
let y = parseInt('A', 16); // 1010
console.log(x + " " + y); // Exibi na tela o valor de X e Y sem alteracoes
x = x ^ y; // 1111 = 0101 ^ 1010
y = x ^ y; // 0101 = 1111 ^ 1010
x = x ^ y; // 1010 = 0101 ^ 1111
let z = x << y; // 320 = 1010 * (2 ^ 5) // 320 = 10 * (2 ^ 5)
let a = x >> y; // 3.2 = 1010 / (2 ^ 5) // 3.2 = 10 / (2 ^ 5)
console.log(x + " " + y + " " + z + " " + a); // Exibi todos os valores, depois do processamento de dados.