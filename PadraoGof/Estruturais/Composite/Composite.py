#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 12/04/2024
#Descrição: Aplicação do padrão GOF - Estruturais - Composite
#Escopo: Programa que cria algumas frutas e uma caixa de fruta (container).
#Adiciona as frutas na caixa, e a embalagem. Um metodo chamado obterPreco() da 
#caixa deve percorrer todos os sub-elementos da arvore, somar os preços e de todos
#os componentes adicionados (composição), por fim retorna o preço total.
#--------------------------------------------------------------------------------------------------


#Classe Componentes 
class Component:
    def __init__(self, nome):
        self.nome = nome;
    
    def adicionar(self):
        pass
    def remover(self):
        pass
    def obterNome(self):
        pass

# Classe Folha 
class Folha(Component):
    def __init__(self,nome,preco):
        super().__init__(nome)
        self.preco = preco

    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        return self.preco
    
# Classe Container 
class Container(Component):
    def __init__(self,nome):
        super().__init__(nome)
        self.components = []
    
    def adicionar(self, componente):
        self.components.append(componente)

    def remover(self, componente):
        self.components.remove(componente);

    def obterNome(self):
        conteudo = f'{self.nome}: \n'
        for componente in self.components:
            conteudo += f'\t{componente.obterNome()}\n'
        return conteudo

    def obterPreco(self):
        preco = 0
        for componente in self.components :
            preco += componente.obterPreco()
        return preco

    
# Interface de Utilização 

maca = Folha('Maça', 8.99)
laranja = Folha('Laranja', 3.69)
uva = Folha('Uva', 9.98)

produto = Container('Carrinho de Compra')
produto.adicionar(maca)
produto.adicionar(laranja)
produto.adicionar(uva)

pedido = Container('Pedido Fechado')
pedido.adicionar(produto)

pedido.adicionar(Folha('Embalagem', 1.90))

pedidoEntrega = Container('Pedido Completo')
pedidoEntrega.adicionar(pedido)
pedidoEntrega.adicionar(Folha('Frete SP', 34.35))


print(f"Preço Total R$:{pedido.obterPreco()}")
print(f"Preço Total R$:{pedidoEntrega.obterPreco()}")