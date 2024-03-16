/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji e Henrique Pedro      
Data: 08/03/2024
Descrição: Aplicação do padrão GoF - Criacional - Builder desenvolvido como exemplo na aula.
Enunciado: Desenvolver um programa com o uso do padrão de projeto GOF-
Criacional - Builder, em relação a uma pizzaria no qual deve conter:
-Tamanho (garnde, padrão, pequeno)
-Massa (Tradicionall, Integral e Fitness)
-Proteina(Calabresa, Frango, Presunto, Atum)

-Queijos(Mussarela, Catupiry, Cheddar)
-Complemento(Azeitona, Oregano, Tomate, cebola, Bacon)

- Montar o objeto da pizza com builder
- gerar um modelo default para "limpar" o pedido antes;
- o usuario pode personalizar e no final deve mostrar ocmo ficou a pizza

- Dessafios
1 - Guardar pizzas no (Vetor)
2 - Tamanho, massa e molho (apensa 1), outras pode ser varias
--------------------------------------------------------------------------------------------------
*/

/* Partes da Pizza */
class Tamanho {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class Massa {
    constructor(massa) {
        this.massa = massa;
    }
}

class Proteina {
    constructor(proteina) {
        this.proteina = proteina;
    }
}

class Queijo {
    constructor(queijo) {
        this.queijo = queijo;
    }
}

class Complemento {
    constructor(complemento) {
        this.complemento = complemento;
    }
}

/* Builder */
class PizzaBuilder {
    constructor() {
        this.tamanho = null;
        this.massa = null;
        this.proteina = null;
        this.queijo = null;
        this.complemento = null;
    }
    adicionarTamanho(tamanho) {
        this.tamanho = new Tamanho(tamanho);
        return this;
    }
    adicionarMassa(massa) {
        this.massa = new Massa(massa);
        return this;
    }
    adicionarProteina(proteina) {
        this.proteina = new Proteina(proteina);
        return this;
    }
    adicionarQueijo(queijo) {
        this.queijo = new Queijo(queijo);
        return this;
    }

    adicionarComplemento(complementosArray) {
        this.complemento = complementosArray.map(complemento => new Complemento(complemento));
        return this;
    }

    montarPizza() {
        return new Pizza(this.tamanho, this.massa, this.proteina, this.queijo, this.complemento)
    }
}

/* Classe da Pizza */
class Pizza {
    constructor(tamanho, massa, proteina, queijo, complemento) {
        this.tamanho = tamanho;
        this.massa = massa;
        this.proteina = proteina;
        this.queijo = queijo;
        this.complemento = complemento;
    }

    montarDetalhes() {
        console.log(`
            Tamanho: ${this.tamanho.tamanho}
            Massa: ${this.massa.massa}
            Proteina: ${this.proteina.proteina}
            Queijo: ${this.queijo.queijo}
            Complementos:`);

        this.complemento.forEach((complemento, index) => {
            console.log(`            - ${index + 1}: ${complemento.complemento}`);
        });
    }

}

let quantidadePizzas = parseInt(prompt("Quantas Pizzas: "))
var pizzas = [];
var l = 0;

/* Criação de de Pizzas */
do {
    let tamanhoP = prompt("Tamanho: ");
    let massaP = prompt("Massa");
    let proteinaP = prompt("Proteina: ")
    let queijoP = prompt("Queijo: ")
    let complementoNum = parseInt(prompt("Escolha de 1 a 8 Complementos: "))

    let complementosArray = [];


    for (var i = 0; i < complementoNum; i++) {
        complementosArray.push(prompt(`Complemento - ${i + 1}:`));
    }

    const builder = new PizzaBuilder();

    const pizzaTeste = builder
        .adicionarTamanho(tamanhoP)
        .adicionarMassa(massaP)
        .adicionarProteina(proteinaP)
        .adicionarQueijo(queijoP)
        .adicionarComplemento(complementosArray)
        .montarPizza();

    pizzaTeste.montarDetalhes();

    pizzas.push(pizzaTeste)
    l++;
} while (l < quantidadePizzas);

/* Exibição no HTMl */
const listaPizzasElement = document.getElementById("lista-pizzas");

pizzas.forEach((pizza, index) => {

    const pizzaElement = document.createElement("p");

    pizzaElement.innerHTML = `
    <b>Pizza ${index + 1}</b><br> 
    Tamanho: ${pizza.tamanho.tamanho}<br>
    Massa: ${pizza.massa.massa}<br> 
    Proteina: ${pizza.proteina.proteina}<br>
    Queijo: ${pizza.queijo.queijo}<br>
    Complementos: ${pizza.complemento.map(complemento => complemento.complemento).join(", ")}`;

    listaPizzasElement.appendChild(pizzaElement);
});

