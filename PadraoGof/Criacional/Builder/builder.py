#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 08/03/2024
#Descrição: Aplicação do padrão GoF - Criacional - Builder desenvolvido como exemplo na aula.
#Enunciado: No programa abaixo, é criado um software que simula a construção
#de um carro, onde o builder nos permitirá definir diferentes partes do
#carro de forma flexível. Começa definindo as diferentes partes do carro e
#na sequência se cria o builder, que permite construir diferentes tipos de
#carros; Se cria uma classe Carro que receberá as partes construidas pelo
#builder e para pra fechar, usa-se o Builder para construir diferentes tipos de carros
#--------------------------------------------------------------------------------------------------

# Define as partes de um carro 
class NomeCarro:
    def __init__(self,nome):
        self.nome = nome

class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Carroceria:
    def __init__(self,estilo):
        self.estilo = estilo

class Rodas:
    def __init__(self,tamanho):
        self.tamanho = tamanho

class CorVeiculo:
    def __init__(self,cor):
        self.cor = cor

# Builder 
class Carro:
    def __init__(self, nome, motor, carroceria, rodas, corVeiculo):
        self.nome = nome
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.corVeiculo = corVeiculo 

    def mostrarDetalhes(self):
        print(
            f"Nome: {self.nome.nome}\n" + 
            f"Motor: {self.motor.tipo}\n"+
            f"Carroceria: {self.carroceria.estilo}\n" +
            f"Rodas: {self.rodas.tamanho}\n"+
            f"Cor: {self.corVeiculo.cor}\n"
            )

class CarroBuilder:
    def __init__(self):
        self.nome = None
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.corVeiculo = None
    
    def adicionarNome(self,nome):
        self.nome = NomeCarro(nome)
        return self
    
    def adicionarMotor(self,tipo):
        self.motor = Motor(tipo)
        return self
    
    def adicionarCarroceria(self,estilo):
        self.carroceria = Carroceria(estilo)
        return self
    
    def adicionarRodas(self,tamanho):
        self.rodas = Rodas(tamanho)
        return self
    
    def adicionarCorVeiculo(self, cor):
        self.corVeiculo = CorVeiculo(cor)
        return self
    
    def montarCarro(self):
        return Carro(self.nome, self.motor, self.carroceria, self.rodas, self.corVeiculo)

# Construindo o Carro 

# Interface do usuario - Utilização do Padrão: 
build = CarroBuilder()

# Construção do Carro Esportivo 
carroEsportivo = build\
    .adicionarNome('Esportivo')\
    .adicionarMotor('V8')\
    .adicionarCarroceria('Esportivo')\
    .adicionarRodas(18)\
    .adicionarCorVeiculo("Preto")\
    .montarCarro()

# Construção do Carro Sedan 
carroSedan = build\
    .adicionarNome('Sedan')\
    .adicionarMotor('Motor 4 cilindro')\
    .adicionarCarroceria('Sedan')\
    .adicionarRodas(16)\
    .adicionarCorVeiculo("bege")\
    .montarCarro()

# Mostrar os Veiculos Construidos 

carroEsportivo.mostrarDetalhes()
carroSedan.mostrarDetalhes()