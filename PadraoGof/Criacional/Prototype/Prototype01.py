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

#Classe Pessoa no qual será clonada:
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome;
        self.idade = idade

    def __str__(self):
        return f'Nome: {self.nome}, Idade: {self.idade}'

    def clone(self):
        return copy.copy(self)

#Classe Gerenciadora de Pessoa (PessoaManager):
class PessoaManager:
    def __init__(self):
        self.pessoas = {}

    def adicionarPessoa(self,nome, idade, id):
        pessoa = Pessoa(nome, idade)
        self.pessoas[id] = pessoa
    
    def getPessoaById(self, id):
        return self.pessoas[id].clone()
    
#Interface para o Usuário
# Criando uma instância de PessoaManager:
manager = PessoaManager()

#Adicionando Pessoas:
manager.adicionarPessoa('João da Silva', 30, 1)
manager.adicionarPessoa('Maria da Silva', 25, 2)
manager.adicionarPessoa('Bruno dos Santos', 56, 3)
manager.adicionarPessoa('Joana da Silva', 22, 4)

#Clonando Pessoas e Modificando os dados

pessoaClone1 = manager.getPessoaById(1)
pessoaClone1.nome = "Carlos de Oliveira"

pessoaClone2 = manager.getPessoaById(2)
pessoaClone2.nome = "Bruno Olivera"
pessoaClone2.idade = 79

#Imprimindo as pessoas (originais e clonadas):

print('Pessoas originais: ')
print(manager.getPessoaById(1))
print(manager.getPessoaById(2))
print(manager.getPessoaById(3))
print(manager.getPessoaById(4))

print('\n---------------------___---------------------\n')

print('Pessoas Clonadas:')
print(pessoaClone1)
print(pessoaClone2)