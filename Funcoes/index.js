function soma(n1 = 0, n2 = 3){
    // Parametro Default, ou seja, eu ja predefino um valor para ele caso o segundo ou o priomeiro parametro nao seja recebido.
      document.write(n1 + n2)
    }
    
    soma(2, 5)
    
    document.write("<hr />")
    
    
    //Arrow Function
    const somar = (n1, n2) => n1 + n2
    
    document.write(somar(1, 1))
    
    document.write("<hr />")
    
    //Retorno de Funcao
    function retornoSoma(n1, n2) {
      return n1 + n2
    }
    
    document.write(retornoSoma(5, 5))