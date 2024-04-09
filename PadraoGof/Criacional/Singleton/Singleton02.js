/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 15/03/2024
Descrição: Aplicação do padrão GOF - Criacional - Singleton
Exemplo de uma aplicação com o  padrão GOF - Criacional - Singleotn onde um e-commerce, utiliza em apenas
1 Carrinho de compra para adicionar "n" formas de compras.
--------------------------------------------------------------------------------------------------
*/

const Carrinho = (function () {
    let instancia;

    function criaInstancia() {
        let ListaProdutos = [];

        function adicionaProduto(produto) {
            ListaProdutos.push(produto)
        }

        function obterProduto() {
            return ListaProdutos;
        }

        function limparCarrinho() {
            ListaProdutos = [];
        }

        return {
            adicionaProduto, obterProduto, limparCarrinho
        }
    }

    return {
        obterInstancia: function () {
            if (!instancia) {
                instancia = criaInstancia()
            }
            return instancia
        }
    }

})();


const carrinhoInstancial1 = Carrinho.obterInstancia();
const carrinhoInstancial2 = Carrinho.obterInstancia();

console.log(carrinhoInstancial1 == carrinhoInstancial2);

carrinhoInstancial1.adicionaProduto({ id: 1, nome: "Produto 1", preco: 10.00 });
carrinhoInstancial2.adicionaProduto({ id: 2, nome: "Produto 2", preco: 20.00 });
carrinhoInstancial1.adicionaProduto({ id: 3, nome: "Produto 3", preco: 30.00 });

//Apresenta os produtos nos carrinhos
console.log(carrinhoInstancial1.obterProduto())
console.log(carrinhoInstancial2.obterProduto())

//Limpa o carrinho de instancia 1
carrinhoInstancial1.limparCarrinho()

// Apresenta os produtos no carrinho (novamente - apos a limpeza do carrinho 1)
console.log(carrinhoInstancial1.obterProduto())
console.log(carrinhoInstancial2.obterProduto())