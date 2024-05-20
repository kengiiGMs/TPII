/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 26/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Proxy
Escopo: Programa que cria uma instancia para controlar o serviço real (Proxy).
Cria a classe do Produto, depois cria a classe ProxyProduto que ira manipular a classe Produtol,
dessa forma ao instanciar o ProxyProduto, chamamos o exibirDetalhes(), que executa o metodo de dentro do Produto. 

Desafio para fazer:
Codigo da pizzaria
Padrão Proxy onde mostre o pedido(descrição) após confirmar que o sabor, tamannho e borda
foram selecionados. Caso contrario, não permita chamar a estrutura de demonstração e mostre
"Concluir o pedido antes de finalizar"
--------------------------------------------------------------------------------------------------
*/

// Classe do Produto Real
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes() {
        console.log(`Produto: ${this.nome}, Preço: ${this.preco.toFixed(2)}`);
    }
}

//Proxy Classe Produto
class ProxyProduto {
    constructor(produto) {
        this.produto = produto;
    }

    exibirDetalhes() {
        console.log.apply("Aguardando autenticação ...");
        this.autenticar();
        this.produto.exibirDetalhes();
    }

    autenticar() {
        console.log("Autenticando usuário ...");
        // Implementa uma lógica para confirmar
        console.log("Usuário autenticado com sucesso ..."); //Pode Retornar a resposta da log de autenticação
    }
}

//Uso do Proxy
const produtoReal = new Produto("Camiseta", 39.90);
const proxyProduto = new ProxyProduto(produtoReal);

proxyProduto.exibirDetalhes();