#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 15/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - Prototype
#--------------------------------------------------------------------------------------------------

# Módulo que faz o clone
import copy

#Classe Pizza que representa um tipo de Pizza:
class Pizza:
    def __init__(self, sabor, preco):
        self.sabor = sabor
        self.preco = preco

    def clone(self):
        return copy.copy(self)
    
class PedidoPizza:
    def __init__(self, cliente, pizzas):
        self.cliente = cliente
        self.pizzas = pizzas
    
    def calcularTotal(self, pizzas):
        total = 0
        for pizza in pizzas:
            total += pizza.preco
        return total

class Pizzaria:
    def __init__(self, nome):
        self.nome = nome
        self.cardapio = {}
    
    def adicionarPizza(self, sabor, preco):
        self.cardapio[sabor] = Pizza(sabor,preco)
    
    def fazerPedido(self, cliente, sabores):
        pizzas = []

        for sabor in sabores:
            if(sabor in self.cardapio):
                pizzas.append(self.cardapio[sabor].clone())
            else:
                print(f"\nDesculpe, {self.nome}não temos a pizza de {sabor}")

        if len(pizzas) > 0:
            pedido = PedidoPizza(cliente, pizzas)

            print(f"\nPedido Recebido de {cliente}")
            for pizza in pedido.pizzas:
                print(f"{pizza.sabor} - R$: {pizza.preco} ")
            print(f"Total: {pedido.calcularTotal(pizzas)}")

minhaPizzaria = Pizzaria("Pizzaria da Fatec: ")

minhaPizzaria.adicionarPizza("Mussarela", 30)
minhaPizzaria.adicionarPizza("Calabresa", 35)
minhaPizzaria.adicionarPizza("Portuguesa", 40)


minhaPizzaria.fazerPedido("Joao", ["Mussarela", "Calabresa"])
minhaPizzaria.fazerPedido("Maria", ["Mussarela", "Frango"])