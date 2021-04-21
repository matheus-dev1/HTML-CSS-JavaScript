// Aqui eu estou pegando todos os elementos que posusi a classe number
let allButtons = document.querySelectorAll('.number')
// Aqui eu estou pegando todos os elementos com a classe operator
let allOprators = document.querySelectorAll('.operator')
// Aqui eu estou pegando o elemento com a classe campo_digitacao
let campo_digitacao = document.querySelector('.campo_digitacao')

// Aqui eu monitoro todos os botoes e identificar qual botao foi clicado pegando o seu id e colocando no campo de digitacao e o seu id contem o valor do seu numero.
allButtons.forEach(button => button.addEventListener('click', number => {
    campo_digitacao.innerHTML += number.target.id
}))

// Aqui eu estou monitorando todos os operadores e idenficando qual operador foi clicado.
allOprators.forEach(button => button.addEventListener('click', operator => {
    if(operator.target.id === "clear"){
        // O clear basicamente limpa o campo de digitacao.
        campo_digitacao.innerHTML = ""
    }
    // O apagar ele vai pegar todo o valor do meu campo de digitacao e apagar um.
    // Exemplo: se eu tiver no campo de digitacao 55 eu vou clicar em apagar ele a funcao subtring com o valor do campo de digitacao vai me retornar 5 por conta que eu pego o valor do campo de ditacao menos 1 e retono este valor para o campo de digitacao.
    else if (operator.target.id === "apagar"){
        // O metodo subtring vai me retornar uma parte selecionada a string passada para substring.
        // Se eu passar apenas um valor eu estou dizendo que eu quero a partir de determinado valor eu quero que voce retorne o resto
        campo_digitacao.innerHTML = campo_digitacao.innerHTML.substring(0, campo_digitacao.innerHTML.length - 1)
    }
    else if (operator.target.id === "%"){
        // Matematica basica numero divido por 100 me da o o valor com a cada decimal.
        // Exemplo 442 / 100 = 4.42
        campo_digitacao.innerHTML = campo_digitacao.innerHTML / 100
    }
    // Aqui eu monitoro todas as operacoes matematicas como adicao, subtracao, divisao e multiplicacao.
    else if (operator.target.id === "+" || operator.target.id === "-" || operator.target.id === "/" || operator.target.id === "*"){
        // Basicanmente este campo me retona nada se nao tiver nada.
        if(campo_digitacao.innerHTML === '' || campo_digitacao.innerHTML === '0'){
            return ""
            } else {
            // Se ja tiver algum numero, ele vai apenas divionar o operador
            campo_digitacao.innerHTML += operator.target.id
            }
    }
    else if(operator.target.id === "=") {
        // eval() é uma função de propriedade do objeto global (window) . O argumento da função eval() é uma string. Se a string representa uma expressão, eval() avalia a expressão. Se o argumento representa uma ou mais declarações em JavaScript, eval() avalia as declarações.
        // No me caso eu passo pra ele uma string que e uma operacao matematica e ele avalia e me retorna o valor do calculo.
        // Exemplo Adicao: "5+5"(string) = 5(number)
        // Exemplos Subtracao: "6-5"(string) = 1(number)
        // Exemplos Divisao: "5/5"(string) = 1(number)
        // Exemplos Multiplicacao: "5*5"(string) = 25(number)
        campo_digitacao.innerHTML = eval(campo_digitacao.innerHTML)
    }
}))