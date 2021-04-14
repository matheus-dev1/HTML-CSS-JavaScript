class Pessoa{ //Classe
	constructor(nome){ //Cronstrutor
  	this.nome = nome;
  }
  
  falar(frase){ //Metodo
  	console.log(this.nome + " falou: " + frase);
  }
  
  //O conceito de Encapsulamento e pode formar um codigo de varios pequenos 	arquivos para formar um unico grande arquivo.
}

class Aluno extends Pessoa{//Heranca
	estudar(materia){
  	console.log(this.nome + " estuda: " + materia);
  }
}

class Professor extends Pessoa{
	ensinar(materia){
  	console.log(this.nome + " ensina: " + materia);
  }
  
  falar(frase){//Polimorfirmo - Sobreescrita do metodo
  	console.log(this.nome + " falou em voz alta: " + frase);
  }
  
  falar(frase, qtd_voz){//Polimorfismo - Sobrecarga do metodo
  	console.log(this.nome + " fala " + qtd_voz + " vezes mais alto: " + frase)
  }
}

//var Pessoa1 = new Pessoa('Matheus');//Instancia do Objeto
var Pessoa1 = new Professor('Chimegi');

Pessoa1.falar('Ola tudo bem?');
//Pessoa1.estudar('Tecnologia');
Pessoa1.ensinar("Programacao");
Pessoa1.falar('Estudem para a prova!');
Pessoa1.falar("Bom dia, Alunos" , 8000);