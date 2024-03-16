/* 

--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 23/02/2024
Descrição: Aplicação do padrão GoF - Criacional - FactoryMethod desenvolvido como exemplo na aula.
--------------------------------------------------------------------------------------------------
*/

/* Classe Base de Veiculos */

class Veiculo {
    constructor(modelo) {
        this.modelo = modelo;
    }

    mostrarDetalhes() {
        console.log(`Modelo: ${this.modelo}`);
    }
}

/* Subclasses de Veiculos */

class Carro extends Veiculo {
    constructor(modelo) {
        super(modelo);
    }
}

class Moto extends Veiculo {
    constructor(modelo) {
        super(modelo);
    }
}

/* Fabrica Abstrata de Veiculos */

class FabricaDeVeiculos {
    criarVeiculo(modelo) {
        throw new Error("O Método criarVeiculo deve ser implementado pela SubClasse");
    }
}

/* Fabrica Concetra de Carros */

class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Carro(modelo);
    }
}

/* Fabrica Concetra de Motos */

class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo) {
        return new Moto(modelo);
    }
}

/* Uso da Fabrica - Interface */

const fabricaDeCarros = new FabricaDeCarros();
const carro = fabricaDeCarros.criarVeiculo('Sedan');
carro.mostrarDetalhes(); // Saida: Modelo: Sedan

const fabricaDeMotos = new FabricaDeMotos();
const moto = fabricaDeMotos.criarVeiculo('Esportiva');
moto.mostrarDetalhes(); // Saida: Modelo: Esportiva