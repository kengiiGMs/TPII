#--------------------------------------------------------------------------------------------------
#Fatec Diadema - Luigi Papaiz 
#Curso : Desenvolvimento de Software Multiplataforma - DSM 
#Disciplina: Técnica de Programação II
#Nome: Kaiki Kenji       
#Data: 15/03/2024
#Descrição: Aplicação do padrão GOF - Criacional - Singleton
#Exemplo do Código do Livro de Padrão de Projetos - GOF
#--------------------------------------------------------------------------------------------------

class Singleton:
    instance = None

    def __new__(cls):
        if cls.instance is None:
            cls.instance = super().__new__(cls)
            cls.instance.value = 0
        return cls.instance
    
    def increment(self):
        self.value += 1
        print(f"Value: {self.value}")

#Cliente
        
s1 = Singleton()
s2 = Singleton()

print (s1 == s2)

s1.increment()
s2.increment()