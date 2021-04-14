// Nos usamos uma classe para organizar o nosso codigo em pequenos objetos que vao ter metodos e propriedades que servem para um funcao especifica, no nosso caso tenho uma classe apenas para fazer um Scroll mais suave o Smooth Scroll.
// Normalmente classe sao escritas em maiusuclo.
// Esta classe eh apenas para deixar o Scroll mais suave.
class SmoothScroll {
    // O construtor de um classe eh onde nos vamos ter todas as nossas principais propriedades e tambem codigo que executado logo quando esta classe eh executada.
    constructor(links, menu) {
        // Para eu adicionar propriedades dentro deste objeto(a classe no caso SmoothScroll) eu preciso primeiro colocar um this. que basicamente diz SmoothScroll.linkElements.

        // O querySelectorAll vai buscar por todos os elementos que for igual ao seu parametro. No meu caso eu estou passando a tag <a/> com o # de "id".
        this.linkElements = document.querySelectorAll(links);
        // O querySelector faz a mesma coisa porem ele so busca um elemento.
        // this.menuElement = document.querySelector(menu);
  
        // Bind linka o this relacionado a classe SmoothScroll, permanentemente ao handleClick
        this.handleClick = this.handleClick.bind(this);
        this.addScrollEvent();
        this.OnMouseOverAllDocument();
        this.a();
    }

    a(event){
      document.querySelector('#contato').addEventListener("click", () => {
        console.log("bala de chocolate")
      })
    }

    // Essa funcao vai me mostrar todos os elementos em que eu passar o mouse.
    OnMouseOverAllDocument(){
      // Document vai selecionar todo o documento.
      // Body vai selecionar o corpo do meu documento.
      // E o body possui um metodo chamado addListener que espera dois argumento uma acao que ativa a funcao que eh o segundo argumento.
      // E o segundo agumento e o que a funcao vai fazer quando o evento for acionado.
      // No meu caso eu estou apenas mostrando cada elemento em que eu passar o mouse.
      document.body.addEventListener("mousemove", function(event) {
        // console.log(event.target)
    });
    }

    handleClick(event) {
      // O preventDefault() é útil quando você tem diversos handlers e quer que um elemento tenha um comportamento único, sem herdar o comportamento dos elementos onde ele está contido.
      event.preventDefault();
      // Como este metodo handleClick() esta associado a uma funcao que eh apenas executa se eu clicar em determinados botoes ele vai basicamente vai entender o botao que voce clicou, pegar a tag do botao que voce clicou que vai estar em event.target e que possui um metodo .getAttribute que vai buscar um determinado atributo da tag passada para ele.
      const href = event.currentTarget.getAttribute("href");
      // console.log(href)
      // E aqui eu uso a id obtida na linha de cima para me retonar a tag inteira.
      const section = document.querySelector(href);
      // O offsetTop vai me retonar o valor da distancia da tag que esta armazenada em "section" do top do documento.
      // console.log(section.offsetTop)
      // O ScroolTo e basicamente Scrolle ate...
      // Neste metodo eu tenho que passar um objeto
      window.scrollTo({
        // A propriedade top: e o valor da onde ele tem que scrollar.
        // Este calculo e o seguinte: Primeiro eu pego o tamanho total da janela eu vou subtrair o tamanho total do item, item no caso e o quadrado com o nome dentro, Produtos, Sobre, Contato e etc e divido o resultado desta subtracao por dois fazendo com que o meu quadrado fique sempre no meio
        top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
        // A propriedade smooth faz com que ao clicar em umas das bolinhas ele va de forma mais suave.
        behavior: "smooth"
      });
    }

    // A funcao basicamente vai pegar todos os elementos capturado do this.linkElements e para cada elemento ele vai executar o bloco de comando do forEach dele.
    addScrollEvent() {
      this.linkElements.forEach(link =>
        // Dentro do bloco de comando eu tenho um addEventListener com o parametro igual ao elemento em que ele foi clicado.
        // E quando eu clicar ele vai identificar o elemento em que eu cliquei e vai executar o this.handleClick
        // link vai me retornar a tag propriamente dita. Exemplo: <a href="#produtos" class="active">Produtos</a>
        link.addEventListener("click", this.handleClick)
      );
    }
}

// Esta classe herda todas as propriedades e metodos da SmoothScroll e ela e responsavel apenas por mostrar qual bolinha(a) esta/estao ativa(s).
class ActiveSmoothScroll extends SmoothScroll {
    // No construtor que extende uma classe eu preciso passar os atributos da classe extendida e posso adicionar mais atributos tambem.
    constructor(links, menu, sections) {
        // O super vai ativar o construtor da classe extendida e eu tenho que passar os atributos da classe extendida.
        super(links, menu);
        // No parametro do construtor eu simplesmente estou recebendo uma string com o valor "sections" e este metodo vai me retornar todas as tag/elementos que atende os criterios passados.
        this.sectionElements = document.querySelectorAll(sections);
        console.log(this.sectionElements)
      
        // Bind linka o this relacionado a classe ActiveSmoothScroll, permanentemente ao handleScroll
        this.handleScroll = this.handleScroll.bind(this);
        // Aqui eu estou fazendo uma ativacao manual pra que quando a pagina carregar ele ja vai preencher a primeira bolinha, porque ela ja atende os criterios mesmo sem mecher o scroll do mouse.
        this.handleScroll();
        this.activeNavScroll();
    }
    
    // Este metodo recebe todas as secoes e passar por um foreach verificando se determinada secao atende os requisitos para dicionar ou remover a classe active da secao em que esta sendo trabalhada.
    handleScroll() {
        console.log(this.sectionElements)
        // Um padrao do for each, ele sempre vai receber um array, o primeiro parametro sempre vai ser o valor de cada interacao e nos podemos passar opcionalmente um segundo parametro que sera a "key" do nosso array que basicamente mostra em qual indice eu estou na interaco.
        this.sectionElements.forEach((section, i) => {
          // pageYOffset e quando teve de scrool na pagina.
          // Este if veririca se o tanto que eu passei na tela e maior que que o quadrado da section.
          // Porem com o - window.innerHeight * 0.5 eu verifico se o quando eu passei da tela e maior que a metade do quadrado.
          if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
            // classList.add adiciona uma classe ao elemento.
            // Se for mario ele vai colocar a classe active no botao e vai deixar ele laranja
            this.linkElements[i].classList.add("active");
          } else {
            // classList.remove remove uma classe de um elemento.
            // Se nao, ele vai tirar a classe deixando com a cor normal.
            this.linkElements[i].classList.remove("active");
          }
        });
      }
      // Como no addScrollEvent esta funcao vai executar o bloco de comando que executa uma funcao quando o usuario scrollar o mouse
      activeNavScroll() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }

// O primeiro parametro de ActiveSmoothScroll sao os LinkElements para pegar todos as tags com href
// O segundo parametro
new ActiveSmoothScroll("a[href^='#']", ".menu", "section");

// SmoothScroll e ActiveSmoothScroll me retornam um objeto que e o nome da clsse.
console.log(SmoothScroll)
console.log(ActiveSmoothScroll)