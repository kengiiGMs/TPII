#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 23/02/2024
#Descrição: Aplicação do padrão GoF - Criacional - FactoryMethod desenvolvido como exemplo na aula.
#--------------------------------------------------------------------------------------------------

# Classe Base de Veiculos
class Veiculo:

    #__init__ = construtor
    #self = this
    def __init__(self,modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"modelo: {self.modelo}")

# Subclasses de Veiculos 

class Carro(Veiculo):
    def __init__(self,modelo):
        super().__init__(modelo)

class Moto(Veiculo):
    def __init__(self,modelo):
        super().__init__(modelo)

# Fabrica Abstrata de Veiculos 

class FabricaDeVeiculos:
    def criarVeiculo(self,modelo):
        raise NotImplementedError("O Método criarVeiculo deve ser implementado pela SubClasse")

# Fabrica Concetra de Carros 

class FabricaDeCarro(FabricaDeVeiculos):
    def criarVeiculo(self,modelo):
        return Carro(modelo)
        
# Fabrica Concetra de Motos 

class FabricaDeMoto(FabricaDeVeiculos):
    def criarVeiculo(self,modelo):
        return Moto(modelo)
        
# Uso da Fabrica - Interface 

fabricaDeCarros = FabricaDeCarro()
fabricaDeMotos = FabricaDeMoto()

carro = fabricaDeCarros.criarVeiculo("Sedan")
carro.mostrarDetalhes()

moto =fabricaDeMotos.criarVeiculo("Esportiva")
moto.mostrarDetalhes()