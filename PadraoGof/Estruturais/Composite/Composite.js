/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 12/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Composite
Escopo: Programa que cria algumas frutas e uma caixa de fruta (container).
Adiciona as frutas na caixa, e a embalagem. Um metodo chamado obterPreco() da 
caixa deve percorrer todos os sub-elementos da arvore, somar os preços e de todos
os componentes adicionados (composição), por fim retorna o preço total.
--------------------------------------------------------------------------------------------------
*/

/* Classe Componentes */
class Componente {
    constructor(nome) {
        this.nome = nome
    }
    adicionar() { }

    remover() { }

    obterNome() { }
}

/* Classe Folha */
class Folha extends Componente {
    constructor(nome, preco) {
        super(nome);
        this.preco = preco;
    }

    obterNome() {
        return this.nome;
    }

    obterPreco() {
        return this.preco;
    }
}
/* Classe Container */
class Container extends Componente {
    constructor(nome) {
        super(nome);
        this.components = [];
    }

    adicionar(componente) {
        this.components.push(componente);
    }

    remover(componente) {
        const index = this.components.indexOf(componente);
        this.components.splice(index, 1);
    }

    obterNome() {
        return this.nome;
    }

    obterPreco() {
        let preco = 0;
        this.components.forEach(componente => {
            preco += componente.obterPreco();
        });
        return preco;
    }
}

/* Interface de Utilização */
const maca = new Folha('Maçã', 8.99);
const laranja = new Folha('Laranja', 3.69);
const uva = new Folha('Uva', 9.98);

/* Carrinho de Compras */
const frutas = new Container('Frutas');
frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);

/* Pedido Fechado */
const caixa = new Container('Caixa de Fruta');
caixa.adicionar(frutas);
caixa.adicionar(new Folha('Embalagem', 1.90));

/* Pedido Completo */
const pedido = new Container('Pedido Completo');
pedido.adicionar(caixa);
pedido.adicionar(new Folha('Frete São Paulo', 34.35))

console.log(frutas)

console.log("\n----------------------\n")

console.log(caixa);
console.log(`Preço total: R$${caixa.obterPreco()}`);

console.log("\n----------------------\n")

console.log(pedido);
console.log(`Preço total: R$${pedido.obterPreco()}`);