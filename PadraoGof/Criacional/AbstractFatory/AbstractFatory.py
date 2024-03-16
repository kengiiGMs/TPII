#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 01/03/2024
#Descrição: Aplicação do padrão GoF - Criacional - AbstractFactory em JavaScript, desenvolvido
#como exemplo na aula. No código é implementado usando classes JavaScript com uma hierarquia de 
#classes que define as fábricas abstratas, produtos abstratos e suas implementações concretas. O
#cliente usa uma fábrica para criar produtos do tipo A e B, sem se preocupar com as implementações
#específicas das fábricas ou produtos.
#--------------------------------------------------------------------------------------------------

# --- INTERFACE DA FÁBRICA ABSTRATA --- 
# Interface da Fabrica Abstrata 
class AbstractFatory:
    def criaProdutoA(self):
        pass;
    def criaProdutoB(self):
        pass;

class ConcretaFactory1(AbstractFatory):
    def criaProdutoA(self):
        return ConcretoProdutoA1()
    
    def criaProdutoB(self):
        return ConcretoProdutoB1()
    
# Fabrica Concreta que cria os Produtos do tipo A e B - Opção A 
class ConcretaFactory2(AbstractFatory):
    def criaProdutoA(self):
        return ConcretoProdutoA2();
    def criaProdutoB(self):
        return ConcretoProdutoB2();

# Fabrica Concreta que cria os Produtos do tipo A e B - Opção B 

# --- Produto A ---
# Interface dos Produtos do Tipo A 
class AbstractProdutoA:
    def metodoA(self):
        pass

# Implementação Concreta do Produto do Tipo A - Opção A 
class ConcretoProdutoA1(AbstractProdutoA):
    def metodoA(self):
        return "Produto do Tipo A criado pela Fabrica 1"

# Implementação Concreta do Produto do Tipo A - Opção B 
class ConcretoProdutoA2(AbstractProdutoA):
    def metodoA(self):
        return "Produto do Tipo A criado pela Fabrica 2"

# --- Produto B ---
# Interface dos Produtos do Tipo B 
class AbstractProdutoB:
    def metodoB(self):
        pass    

# Implementação Concreta do Produto do Tipo B - Opção A 
class ConcretoProdutoB1(AbstractProdutoB):
    def metodoB(self):
        return "Produto do Tipo B criado pela Fabrica 1"

# Implementação Concreta do Produto do Tipo B - Opção B 
class ConcretoProdutoB2(AbstractProdutoB):
    def metodoB(self):
        return "Produto do Tipo B criado pela Fabrica 2"

# --- Interface Simulada para o uso do padrão GOF ---   
# Função para demonstração do padrão Abstract Factory 
def clientCode(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()
    print(produtoA.metodoA())
    print(produtoB.metodoB())

factory1 = ConcretaFactory1()
clientCode(factory1)

factory2 = ConcretaFactory2()
clientCode(factory2)