/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 03/05/2024
Descrição: Aplicação do padrão GOF - Estruturais - FlyWeightFactory
Escopo: Programa que mantem a existência de apenas uma específica instancia, 
e a modifica se for necessário, evitando a criação de multiplicas instancias semelhantes. 
--------------------------------------------------------------------------------------------------
*/

/* FlyWeight Factory */
class FlyWeightFactory {
    constructor() {
        this.flyWeights = {};
    }

    getFlyWeight(key) {
        if (!this.flyWeights[key]) {
            this.flyWeights[key] = new FlyWeight(key);
        }
        return this.flyWeights[key];
    }
}

/* FlyWeight */
class FlyWeight {
    constructor(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }

    operation(extrinsicState) {
        console.log(`Intrinsic State: ${this.intrinsicState}, Extrinsic State: ${extrinsicState}`)
    }
}

/* Client */

class Client {
    constructor() {
        this.flyWeightFactory = new FlyWeightFactory();
    }

    run() {
        const flyweightA = this.flyWeightFactory.getFlyWeight('A');
        const flyweightB = this.flyWeightFactory.getFlyWeight('B');
        const flyweightC = this.flyWeightFactory.getFlyWeight('C');

        flyweightA.operation('State 1');
        flyweightB.operation('State 2');
        flyweightC.operation('State 3');
        flyweightA.operation('State 4');
    }
}


/* Uso do padrão(usage) */
const client = new Client();
client.run();