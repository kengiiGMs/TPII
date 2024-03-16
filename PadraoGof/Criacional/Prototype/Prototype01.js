/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 15/03/2024
Descrição: Aplicação do padrão GOF - Criacional - Prototype
--------------------------------------------------------------------------------------------------
*/

/* Classe Pessoa que será o Prototipo: */
class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    /* Método que clona para realizar a copia do objeto: */
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

/* Classe PessoaManager que gerencia instâncias de Pessoas: */
class PessoaManager {
    constructor() {
        this.pessoas = {};
    }

    /* Adiciona uma nova pessoa (objeto) ao dicionário Pessoa: */
    adicionaPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    /* Solicita uma pessoa pelo id e retorna uma cópia dela */
    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id];
        if (pessoaOriginal) {
            return pessoaOriginal.clone();
        } else {
            return null;
        }
    }
}

/* Interface para o Usuário */
/* Criando uma Instância de Pessoa Manager*/
const manager = new PessoaManager();

/* Adicionando pessoas */
manager.adicionaPessoa(1, 'João da Silva', 30);
manager.adicionaPessoa(2, 'Maria da Silva', 25);
manager.adicionaPessoa(3, 'Bruno dos Santos', 56);
manager.adicionaPessoa(4, 'Joana da Silva', 22);

/* Clonando Pessoa e Modificando os dados: */
const pessoaClone1 = manager.getPessoaById(1);
if (pessoaClone1) {
    pessoaClone1.nome = 'João Oliveira';
}

const pessoaClone2 = manager.getPessoaById(3);
if (pessoaClone2) {
    pessoaClone2.nome = 'Bruno Oliveira';
    pessoaClone2.idade = 79
}

/* Imprimindo as pessoas (originais e clonadas) */
console.log('Pessoas originais: ');
console.log(manager.getPessoaById(1));
console.log(manager.getPessoaById(2));
console.log(manager.getPessoaById(3));
console.log(manager.getPessoaById(4));

console.log('---------------------___---------------------\n')

console.log('Pessoas Clonadas');
console.log(pessoaClone1);
console.log(pessoaClone2);