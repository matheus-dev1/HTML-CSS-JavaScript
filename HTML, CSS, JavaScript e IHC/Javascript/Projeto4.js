let n1 = Number(prompt("Digite a primeira nota: "))
let n2 = Number(prompt("Digite a segunda nota: "))
let n3 = Number(prompt("Digite a terceira nota: "))
let n4 = Number(prompt("Digite a quarta nota: "))
let media = (n1 + n2 + n3 + n4) / 4

if (media >= 7) {
  document.write("Aprovado")
}
else {
  document.write("Reprovado")
}