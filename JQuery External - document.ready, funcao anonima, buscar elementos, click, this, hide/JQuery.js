/*this significa que o evento vai acontecer no proprio elemento. */

$(document).ready(function(){
    //$(document) -- Estou entrando no documento do arquivo.
    //.ready(function()) -- Estou usando a funcao ready que antes de executar a funcao anonima. 
    $("p, h2").click(function(){
        //Aqui estou buscando os elemento p e h2 e ao clicar nele ira executar a funcao anomina, ou seja,
        //tudo o que esta dentro das chaves.
          $(this).hide();
          //O this funciona mais ou menos como "esta linha" entao o metodo hide esconde
          //a linha em que foi clicada
    });
});