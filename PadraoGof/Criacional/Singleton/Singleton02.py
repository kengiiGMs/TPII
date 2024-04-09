#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 15/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - Singleton
#Exemplo de uma aplicação com o  padrão GOF - Criacional - Singleotn onde um e-commerce, utiliza em apenas
#1 Carrinho de compra para adicionar "n" formas de compras.
#--------------------------------------------------------------------------------------------------

class Carrinho:
    _instancia = None

    def __new__(cls):
        if not cls._instancia:
            cls._instancia = super().__new__(cls)
            cls._instancia.listaProdutos = []
        return cls._instancia
    
    def adicionarProduto(self,produto):
        self.listaProdutos.append(produto)
    
    def obterProduto(self):
        return self.listaProdutos

    def limpaCarrinho(self):
        self.listaProdutos = []

#Instancias Carrinho
carrinhoInstancia1 = Carrinho()
carrinhoInstancia2 = Carrinho()

print(carrinhoInstancia1 == carrinhoInstancia2)

#Adiciona produtos no Carrinho
carrinhoInstancia1.adicionarProduto({"Id":1,"nome":"Produto1","preco":10.0})
carrinhoInstancia2.adicionarProduto({"Id":2,"nome":"Produto2","preco":20.0})
carrinhoInstancia1.adicionarProduto({"Id":3,"nome":"Produto3","preco":30.0})

#Apresenta produtos do carrinho
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia2.obterProduto())

#Limpa carrinho - Instancia 1
carrinhoInstancia1.limpaCarrinho()

#Apresenta produtos do carrinho
print(carrinhoInstancia1.obterProduto())
print(carrinhoInstancia2.obterProduto())