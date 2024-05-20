/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 19/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Decorator
Escopo: Desafio 

Com base no projeto Decorator01 - Pizzaria. Desenvolva um outro projeto "Central de Alunos" no qual cada aluno deve selecionar um curso e serviços extras:

Curso:
<CURSO 1>
<CURSO 2>
<CURSO 3>

Período:
Manha
Tarde
Noite

Adicionais:

Serviços de Campus:

Internet com os planos:
2Gb - R$ 9,90
5Gb - R$ 19,90
10Gb - R$ 29,90

Estacionamento:
Bicicleta - R$ 30,00
Moto - R$ 60,00
Carro - R$ 120,00

Aluguel de Armario:
10 Litros - R$ 6,00
20 Litros - R$ 10,00
40 Litros - R$ 15,00

Cursos Extras:
Plataforma EAD 5 cursos - R$ 9,90
Plataforma EAD 15 cursos - R$ 19,99
Plataforma EAD ilimitado - R$ 24,90

MOSTRAR:
- Valor da Mensalidade Total
- Descrição do curso

--------------------------------------------------------------------------------------------------
*/

// Interface Componente:
class Aluno {
    constructor() {
        this.descricao = 'Aluno';
    }

    getDescricao() {
        return this.descricao;
    }

    custo() {
        return 0;
    }
}

// Implementação concreta das interface Componente para alunos personalizadas
class AlunoPersonalizado extends Aluno {
    constructor(curso, periodo) {
        super();
        this.descricao = `Curso - ${curso} | Periodo - ${periodo} <br> <b>Serviços Extras:</b>`;
        this.curso = curso;
        this.periodo = periodo;
    }

    getDescricao() {
        let descricaoBase = this.descricao;
        return descricaoBase;
    }

    custo() {
        let precoBase = 0;
        return precoBase.toFixed(2);
    }
}

// Decorador Abstrato:
class Decorator extends Aluno {
    constructor(aluno) {
        super();
        this.aluno = aluno;
    }

    getDescricao() {
        return this.aluno.getDescricao();
    }

    custo() {
        return this.aluno.custo();
    }
}

// Decorador Concretos para adicionar serviços extras:

//Internet
class Internet2gb extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Internet - 2GB`;
    }

    custo() {
        return (parseFloat(this.aluno.custo()) + 9.90).toFixed(2);
    }
}

class Internet5gb extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Internet - 5GB`;
    }

    custo() {
        return (parseFloat(this.aluno.custo()) + 19.90).toFixed(2);
    }
}

class Internet10gb extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Internet - 10GB`;
    }

    custo() {
        return (parseFloat(this.aluno.custo()) + 29.90).toFixed(2);
    }
}

//Estacionamento
class EstacionamentoBicicleta extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Estacionamento - Bicicleta`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 30.00).toFixed(2);
    }
}

class EstacionamentoMoto extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Estacionamento - Moto`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 60.00).toFixed(2);
    }
}
class EstacionamentoCarro extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Estacionamento - Carro`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 120.00).toFixed(2);
    }
}

//Armario
class Armario10Litros extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Armário - 10 Litros`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 6.00).toFixed(2);
    }
}

class Armario20Litros extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Armário - 20 Litros`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 10.00).toFixed(2);
    }
}

class Armario40Litros extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Armário - 40 Litros`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 15.00).toFixed(2);
    }
}

//Cursos Extras
class CursoExtras5 extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Plataforma EAD - 5 Cursos`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 9.90).toFixed(2);
    }
}

class CursoExtras15 extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Plataforma EAD - 15 Cursos`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 19.90).toFixed(2);
    }
}

class CursoExtrasIlimitado extends Decorator {
    constructor(aluno) {
        super(aluno);
    }

    getDescricao() {
        return `${this.aluno.getDescricao()}<br> Plataforma EAD Cursos - Ilimitados`;
    }
    custo() {
        return (parseFloat(this.aluno.custo()) + 24.90).toFixed(2);
    }
}

// Simulação no index.html
function montarAluno() {
    // Obtendo Curso Selecionado:
    let cursoSelecionado = document.querySelector('input[name="curso"]:checked');
    let curso = cursoSelecionado ? cursoSelecionado.value : '';

    // Obtendo Periodo Selecionado:
    let periodoSelecionado = document.querySelector('input[name="periodo"]:checked');
    let periodo = periodoSelecionado ? periodoSelecionado.value : '';

    // Criando Objeto AlunoPersonalizada com base nas seleções do usuarios:
    let alunoPersonalizado = new AlunoPersonalizado(curso, periodo);

    // Aplicar decoradores para internet,estacionamento,armario, cursos extras se selecionados

    //Internet
    let internet2gbCheckbox = document.querySelector('input[name="internet-2gb"]:checked')
    if (internet2gbCheckbox) {
        alunoPersonalizado = new Internet2gb(alunoPersonalizado);
    }
    let internet5gbCheckbox = document.querySelector('input[name="internet-5gb"]:checked')
    if (internet5gbCheckbox) {
        alunoPersonalizado = new Internet5gb(alunoPersonalizado);
    }
    let internet10gbCheckbox = document.querySelector('input[name="internet-10gb"]:checked')
    if (internet10gbCheckbox) {
        alunoPersonalizado = new Internet10gb(alunoPersonalizado);
    }

    //Estacionamento
    let estacionamentoBicicleta = document.querySelector('input[name="estacionamento-bicicleta"]:checked')
    if (estacionamentoBicicleta) {
        alunoPersonalizado = new EstacionamentoBicicleta(alunoPersonalizado);
    }

    let estacionamentoMoto = document.querySelector('input[name="estacionamento-moto"]:checked')
    if (estacionamentoMoto) {
        alunoPersonalizado = new EstacionamentoMoto(alunoPersonalizado);
    }

    let estacionamentoCarro = document.querySelector('input[name="estacionamento-carro"]:checked')
    if (estacionamentoCarro) {
        alunoPersonalizado = new EstacionamentoCarro(alunoPersonalizado);
    }

    //Armario
    let armario10litros = document.querySelector('input[name="armario-10-litros"]:checked')
    if (armario10litros) {
        alunoPersonalizado = new Armario10Litros(alunoPersonalizado);
    }

    let armario20litros = document.querySelector('input[name="armario-20-litros"]:checked')
    if (armario20litros) {
        alunoPersonalizado = new Armario20Litros(alunoPersonalizado);
    }

    let armario40litros = document.querySelector('input[name="armario-40-litros"]:checked')
    if (armario40litros) {
        alunoPersonalizado = new Armario40Litros(alunoPersonalizado);
    }

    //Cursos Extras
    let cursoExtras5 = document.querySelector('input[name="cursos-extras-5"]:checked')
    if (cursoExtras5) {
        alunoPersonalizado = new CursoExtras5(alunoPersonalizado);
    }

    let cursoExtras15 = document.querySelector('input[name="cursos-extras-15"]:checked')
    if (cursoExtras15) {
        alunoPersonalizado = new CursoExtras15(alunoPersonalizado);
    }

    let cursoExtrasIlimitado = document.querySelector('input[name="cursos-extras-ilimitado"]:checked')
    if (cursoExtrasIlimitado) {
        alunoPersonalizado = new CursoExtrasIlimitado(alunoPersonalizado);
    }

    // Obter o custo total do aluno personalizado
    let custoTotal = parseFloat(alunoPersonalizado.custo());

    // Obter a descrição total do aluno personalizado
    let descricaoAluno = alunoPersonalizado.getDescricao();

    // Exibir o custo total do aluno
    let totalAlunoElement = document.getElementById("total-aluno");
    totalAlunoElement.textContent = custoTotal;

    // Exibir a descricao total do pedido
    let letDescricaoAlunoElement = document.getElementById("descricao-aluno");
    letDescricaoAlunoElement.innerHTML = descricaoAluno;
}