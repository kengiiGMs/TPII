/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 08/03/2024
Descrição: Aplicação do padrão GoF - Criacional - Builder desenvolvido como exemplo na aula.
Enunciado: No programa abaixo, é criado um software que simula a construção
de um carro, onde o builder nos permitirá definir diferentes partes do
carro de forma flexível. Começa definindo as diferentes partes do carro e
na sequência se cria o builder, que permite construir diferentes tipos de
carros; Se cria uma classe Carro que receberá as partes construidas pelo
builder e para fechar, usa-se o Builder para construir diferentes tipos de carros
--------------------------------------------------------------------------------------------------
*/

/* Define as partes de um carro */
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Carroceria {
    constructor(estilo) {
        this.estilo = estilo;
    }
}

class Rodas {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class CorVeiculo {
    constructor(cor) {
        this.cor = cor;
    }
}

class Nome {
    constructor(nome) {
        this.nome = nome
    }
}

/* Builder */
class CarroBuilder {
    constructor() {
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.corVeiculo = null;
        this.nome = null;
    }

    adicionarMotor(tipo) {
        this.motor = new Motor(tipo);
        return this;
    }
    adicionarCarroceria(estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }
    adicionarRodas(tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }
    adicionarCorVeiculo(cor) {
        this.corVeiculo = new CorVeiculo(cor);
        return this;
    }
    adicionarNome(nome) {
        this.nome = new Nome(nome);
        return this;
    }

    montarCarro() {
        return new Carro(this.motor, this.carroceria, this.rodas, this.corVeiculo, this.nome)
    }
}

/* Construindo o Carro */
class Carro {
    constructor(motor, carroceria, rodas, corVeiculo, nome) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.corVeiculo = corVeiculo;
        this.nome = nome;
    }

    montarDetalhes() {
        console.log(`
            Carro com Motor: ${this.motor.tipo}, 
            Carroceria: ${this.carroceria.estilo}
            Rodas de Tamanho: ${this.rodas.tamanho}
            Cor: ${this.corVeiculo.cor} 
            Nome: ${this.nome.nome}
            \n`
        )
    }
}

/* Interface do usuario - Utilização do Padrão:*/
const builder = new CarroBuilder();

/* Construção do Carro Esportivo */
const carroPadrao = builder
    .adicionarMotor('-------')
    .adicionarCarroceria('-------')
    .adicionarRodas('-------')
    .adicionarCorVeiculo('-------')
    .adicionarNome('-------')
    .montarCarro();

const carroEsportivo = builder
    .adicionarMotor('V8')
    .adicionarCarroceria('Esportiva')
    .adicionarRodas(18)
    .adicionarCorVeiculo('Preto')
    .adicionarNome('Esportivo')
    .montarCarro();

/* Construção do Carro Sedan */
const carroPadrao2 = builder
    .adicionarMotor('-------')
    .adicionarCarroceria('-------')
    .adicionarRodas('-------')
    .adicionarCorVeiculo('-------')
    .adicionarNome('-------')
    .montarCarro();

const carroSedan = builder
    .adicionarMotor('4 Cilindros')

    .adicionarNome('Sedan')
    .montarCarro();

/* Mostrar os Veiculos Construidos */
carroPadrao.montarDetalhes();
carroEsportivo.montarDetalhes();
carroPadrao2.montarDetalhes();
carroSedan.montarDetalhes();