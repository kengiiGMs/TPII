/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 12/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Composite
Escopo: Criar Curso DSM

Incluir 6 turmas (cada uma com 5 alunos)
info RA, NOME,NOTAS(p1,p2,media semestral,p3,media final), STATUS

dados do aluno
mostrar nome, email, curso semestre

dados academicos
mostrar ra, nome,relação de disciplinas, notas

--------------------------------------------------------------------------------------------------
*/

//Component
class ComponenteAluno {

    obterFaltas() { };

    obterEmail() { };

    obterSemestre() { };

    obterRA() { };

    obterNotas() { };

    obterNome() { };
}

// Folha
class Aluno extends ComponenteAluno {
    constructor(nome, notas, faltas, email, semestre, ra) {
        super();
        this.nome = nome;
        this.notas = notas;
        this.faltas = faltas;
        this.email = email;
        this.semestre = semestre;
        this.ra = ra;
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

    obterEmail() {
        return this.email;
    }

    obterSemestre() {
        return this.semestre;
    }

    obterRA() {
        return this.ra;
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

    obterRA() {
        let listaRA = [];
        for (let aluno of this.listaAluno) {
            listaRA = listaRA.concat(aluno.obterRA());
        };
        return listaRA;
    }

    obterEmail() {
        let listaEmail = [];
        for (let aluno of this.listaAluno) {
            listaEmail = listaEmail.concat(aluno.obterEmail());
        };
        return listaEmail;
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