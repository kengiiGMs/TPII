/* 

--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 01/03/2024
Descrição: Aplicação do padrão GoF - Criacional - AbstractFactory em JavaScript, desenvolvido
como exemplo na aula.
Enunciado: No código é implementado produtos eletrônicos e produtos de moda, cada um com a sua própria
fábrica que cria produtos específicos. Considerando dois tipos de produtos: Telefone na fábrica
de nome eletrônico e Camisa na fábrica de nome moda. Neste caso, se tem duas fábricas concretas:
FabricaEletronico e FabricaModa, A função lojaVirutal simula o uso do pardão abstract fatory em uma 
loja virtual onde diferentes tipos de produtos sao criados de acordo com a fábrica escolhida 
para cada cliente
--------------------------------------------------------------------------------------------------
*/

/* Interface de Fabrica Abstrata */
class FabricaAbstrata {
    criaProdutoEletronico() { }
    criaProdutoModa() { }
}

/* Fabrica Concreta - Produtos Eletrônicos */
class FabricaEletronico extends FabricaAbstrata {
    criaProdutoEletronico() {
        return new Telefone()
    }
    criaProdutoModa() {
        return new Camiseta()
    }
}

/* Fabrica Concreta - Produtos Moda */
class FabricaModa extends FabricaAbstrata {
    criaProdutoModa() {
        return new Camiseta()
    }
    criaProdutoEletronico() {
        return new Telefone()
    }
}

/* Classe Abstrata para Eletronicos */
class ProdutoEletronico {
    constructor() {
        this.tipo = "Eletrônico";
    }

    descricao() {
        return `Produto ${this.tipo}: Telefone`
    }
}

/* Classe Abastrata para Moda  */
class ProdutoModa {
    constructor() {
        this.tipo = "Moda";
    }

    descricao() {
        return `Produto ${this.tipo}: Camiseta`
    }
}

/* Classe Concreta de Produtos Eletrônicos */
class Telefone extends ProdutoEletronico {
    descricao() {
        return `Produto ${this.tipo}: Telefone`
    }
}

/* Classe Conreta de Produtos Moda */
class Camiseta extends ProdutoModa {
    descricao() {
        return `Produto ${this.tipo}: Camiseta`;
    }
}


/* Interface Simulada para o uso do padrão GOF   */
/* Simula o uso do Padrão Abstract Factory em uma Loja Virtual */
function lojaVirtual(cliente, fabrica) {
    const produtoEletronico = fabrica.criaProdutoEletronico();
    const produtoModa = fabrica.criaProdutoModa();

    console.log(`${cliente} comprou: `);
    console.log(produtoEletronico.descricao());
    console.log(produtoModa.descricao());
}

/* Exemplo de uso com Fábrica de Produtos Eletrônicos e Moda */
const cliente1 = "Cliente - 1"
const carrinho1 = new FabricaEletronico();
lojaVirtual(cliente1, carrinho1);

console.log("\n--------------\n");

const cliente2 = "Cliente - 2";
const carrinho2 = new FabricaModa();
lojaVirtual(cliente2, carrinho2);