/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 12/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Composite
Escopo: Programa que cria Alunos e Turmas (container).
Adiciona os ALunos na turma. Metodos chamados obterRelaaoAlunos() da 
turma deve percorrer todos os sub-elementos da árvore, somar as notas, faltas e criar a relação de todos
os componentes adicionados (composição), por fim retorna o relação final.
--------------------------------------------------------------------------------------------------
*/

//Component
class ComponenteAluno {

    obterFaltas() { };

    obterNotas() { };

    obterNome() { };
}

// Folha
class Aluno extends ComponenteAluno {
    constructor(nome, notas, faltas) {
        super();
        this.nome = nome;
        this.notas = notas;
        this.faltas = faltas;
    }

    obterNome() {
        return this.nome;
    }
    obterNotas() {
        return this.notas;
    }
    obterFaltas() {
        return this.faltas;
    }
}

/* Composto */
class Turma extends ComponenteAluno {
    constructor(nome) {
        super();
        this.nome = nome;
        this.listaAluno = [];
    }

    obterNome() {
        return this.nome;
    }

    obterNotas() {
        let listaNota = [];
        for (let aluno of this.listaAluno) {
            listaNota = listaNota.concat(aluno.obterNotas());
        };
        return listaNota;
    }

    obterFaltas() {
        let listaFalta = [];
        for (let aluno of this.listaAluno) {
            listaFalta = listaFalta.concat(aluno.obterFaltas());
        };
        return listaFalta;
    }

    obterRelacaoAlunos() {
        return this.listaAluno.map(aluno => {
            return {
                nome: aluno.obterNome(),
                notas: aluno.obterNotas(),
                faltas: aluno.obterFaltas()
            };
        });
    }

    adicionarAluno(aluno) {
        this.listaAluno.push(aluno);
    };

    removerAluno(aluno) {
        const index = this.listaAluno.indexOf(aluno);
        if (index !== -1) {
            this.obterRelacaoAlunos.splice(index, 1);
        }
    }
}

/* Interface de utilização do Padrão*/

/* Criando alunos */
const aluno1 = new Aluno("João da Silva", [8.0, 7.5, 9.5], [4, 2, 4]);
const aluno2 = new Aluno("Aline da Silva", [0.2, 6.5, 9.5], [2, 2, 2]);

/* Criando a turma */
const turma1 = new Turma("FATEC-DSM-3SEM");
turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);

/* Exibir notas e faltas dos alunos */
console.log("Notas da ", turma1.obterNome() + " : " + turma1.obterNotas());
console.log("Faltas da ", turma1.obterNome() + " : " + turma1.obterFaltas());

/* Exibir relação de alunos */
console.log("Relação de Alunos");
turma1.obterRelacaoAlunos().forEach(aluno => {
    console.log("Nome:", aluno.nome, " - Notas:", aluno.notas, " - Faltas", aluno.faltas)
})