/* 

--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 24/02/2024
Descrição: Aplicação do padrão GoF - Criacional - FactoryMethod em Java (Desafio proposto pelo Professor)
--------------------------------------------------------------------------------------------------

____________________________
Controle de Versão:
1.0.0 - Aprendendo a Utilizar o FactoryMethod com JavaScript
1.0.1 - Aprendendo a Utilizar o FactoryMethod com Python
1.0.2 - Aprendendo a Utilizar o FactoryMethod com Java
____________________________

*/

/* Classe Base de Veiculos */

class Veiculo {

    protected String modelo;

    public Veiculo(String modelo) {
        this.modelo = modelo;
    }

    public void mostrarDetalhes() {
        System.out.printf("Modelo: %s\n", modelo);
    }
}

/* Subclasses de Veiculos */

class Carro extends Veiculo {

    public Carro(String modelo) {
        super(modelo);
    }
}

class Moto extends Veiculo {
    public Moto(String modelo) {
        super(modelo);
    }
}

/* Fabrica Abstrata de Veiculos */

class FabricaVeiculos {
    public Veiculo criarVeiculo(String modelo) {
        throw new Error("O Método criarVeiculo deve ser implementado pela SubClasse");
    }
}

/* Fabrica Concetra de Carros */

class FabricaDeCarros extends FabricaVeiculos {

    @Override
    public Carro criarVeiculo(String modelo) throws Error {
        return new Carro(modelo);
    }
}

/* Fabrica Concetra de Motos */

class FabricaDeMotos extends FabricaVeiculos {
    @Override
    public Moto criarVeiculo(String modelo) throws Error {
        return new Moto(modelo);
    }
}

/* Uso da Fabrica - Interface */

public class Factory_method01 {
    public static void main(String[] args) throws Exception {

        FabricaDeCarros fc = new FabricaDeCarros();
        Carro carro = fc.criarVeiculo("Esportivo"); // Saida: Modelo: Esportivo
        carro.mostrarDetalhes();

        FabricaDeMotos fm = new FabricaDeMotos();
        Moto moto = fm.criarVeiculo("Esporitva"); // Saida: Modelo: Esportivo
        moto.mostrarDetalhes();

    }
}