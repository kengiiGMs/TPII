#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 26/04/2024
#Descrição: Aplicação do padrão GOF - Estruturais - Proxy
#Escopo: Programa que cria uma instancia para controlar o serviço real (Proxy).
#Cria a classe do SericoReal, depois cria a classe ProxyServico que ira manipular a classe ServicoReal,
#dessa forma ao instanciar o ProxyServico, chamamos o executar(), que executa o metodo de dentro do serivoReal. 
#--------------------------------------------------------------------------------------------------



#OBJ 
class ServicoReal:
    def executar(self):
        print("Executando o serviço real ...");

class ProxyServico:
    def __init__(self):
        self.sevicoReal = ServicoReal()

    def executar(self):
        print("Antes da execução do serviço ...")
        self.sevicoReal.executar()
        print("Depois da execução do serviço ...")

#Uso do Proxy:
proxy = ProxyServico()
proxy.executar()