import numeroAleatorio from "./numeroAleatorio.js";

function area(raio) {
  return Math.PI * raio * raio;
}

function circunferencia(raio) {
  return 2 * raio * Math.PI;
}

function aleatorio() {
  return numeroAleatorio();
}

// Isso e super normal.
// Eu estou exportando um objeto com minhas funcoes
// Obs: eu nao preciso colocar os parenteses.
const Circulo = {
  area,
  circunferencia,
  aleatorio
};

export default Circulo;