/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 03/05/2024
Descrição: Aplicação do padrão GOF - Estruturais - FlyWeightFactory
Escopo: Programa que mantem a existência de apenas uma específica instancia, 
e a modifica se for necessário, evitando a criação de multiplicas instancias semelhantes. Como
exemplo o programa só vai criar uma instancia de um produto se o ID não existir, caso o ID
já exista ele efetua a modificação da instancia.
--------------------------------------------------------------------------------------------------
*/

/* FlyWeight Factory */

class FabricaFlyWeight {
    constructor() {
        this.flyweights = {};
    }

    getFlyWeight(codigo) {
        if (!this.flyweights[codigo]) {
            this.flyweights[codigo] = new ProdutoFlyWeight(codigo);
        }
        return this.flyweights[codigo];
    }
}

/* FlyWeight */
class ProdutoFlyWeight {
    constructor(codigo) {
        this.codigo = codigo;
    }

    exibirDetalhes(nome, preco) {
        console.log(`COD: ${this.codigo} | Nome: ${nome} | Preço: ${preco.toFixed(2)}`)
    }
}

/* CLiente */
class Client {
    constructor() {
        this.fabricaFlyWeight = new FabricaFlyWeight();
        this.pedido = [];
    }

    addProduto(codigo, nome, preco) {
        const flyweight = this.fabricaFlyWeight.getFlyWeight(codigo);
        this.pedido.push({ flyweight, nome, preco });
    }

    exibirPedido() {
        console.log("Pedidos: ")
        this.pedido.forEach(item => {
            item.flyweight.exibirDetalhes(item.nome, item.preco);
        })
    }
}

/* Uso do projeto */
const cliente = new Client();
cliente.addProduto('001', 'Camiseta', 39.90);
cliente.addProduto('002', 'Calça Jeans', 89.90);
cliente.addProduto('001', 'Bone', 39.90);
cliente.exibirPedido();