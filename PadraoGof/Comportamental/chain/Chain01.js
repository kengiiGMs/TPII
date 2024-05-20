/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 17/05/2024
Descrição: Aplicação do padrão GOF - Comportamental - Chain
Escopo: Programa que cria uma sequência de etapas/processos, que são executados automaticamente um atras
do outro. Onde definimos a classe base para cada etapa do processo (EtapaProcesso), e posteriormente
criamos a classe para cada etapa do processo. Após isso na classe (Cliente), definimos e inicializamos a etapa
que vai desencardear todo o processo.
--------------------------------------------------------------------------------------------------
*/

/* Importação da lib readline - entrada de dados */
const readline = require('readline');
const contSeg = 5;
var tentativa = 0;

/* Classe Base para cada etapa do processo*/
class EtapaProcesso {
    constructor() {
        this.proximaEtapa = null;
    }

    /* Define a proxima etapa */
    setProximaEtapa(etapa) {
        this.proximaEtapa = etapa;
    }

    /* Metodo que cada etapa implementará */
    processar() {

    }

}

/* Etapa de Conexão*/
class EtapaConexao extends EtapaProcesso {
    processar() {
        console.log("[0001] - Conexão : Conectando ao sistema de pagamento");
        /* Simulação da logica da conexão */
        console.log("[OK] - Conexão : Estabelecida com sucesso ....");
        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

/* Etapa de Validação */
class EtapaValidacao extends EtapaProcesso {
    processar() {
        console.log("[0002] - Validação : Validando informações de pagamento");
        /* Simulação da logica de validacao */
        console.log("[OK] - Validação : Informações validadas com sucesso ....");
        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

/* Etapa de informação */
class EtapaEnvioInformacao extends EtapaProcesso {
    processar() {
        console.log("[0003] - Envio: Enviando informações de pagamento");
        /* Simulação da logica de envio de informações */
        console.log("[OK] - Envio: Informações enviadas com sucesso ....");
        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

/* Etapa de autenticacao */
class EtapaAutenticacao extends EtapaProcesso {
    processar() {
        console.log("[0004] - Autenticação: Autenticando pagamento");
        /* Simulação da logica aunteticação do pagamento*/
        console.log("[OK] - Autenticação: Pagamento autenticado com sucesso ....");
        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

/* Etapa de confirmacao */
class EtapaConfirmacao extends EtapaProcesso {
    processar() {
        console.log("[0005] - Confirmação: Confirmando pagamento");
        /* Simulação da logica confirmação do pagamento*/
        console.log("[OK] - Confirmação : Pagamento confirmado com sucesso ....");
        console.log("[OK] - Concluido : Operação concluida com sucesso ....");

        if (this.proximaEtapa) {
            this.proximaEtapa.processar();
        }
    }
}

/* Cliente */
class Cliente {
    /* Constructor */
    constructor(valorPagamento) {
        this.valorPagamento = valorPagamento;
        this.etapaProcesso = new EtapaConexao();
        this.etapaValidacao = new EtapaValidacao();
        this.etapaEnvio = new EtapaEnvioInformacao();
        this.etapaAutenticacao = new EtapaAutenticacao();
        this.etapaConfirmacao = new EtapaConfirmacao();

        /* Define a sequencia de etapas: */
        this.etapaProcesso.setProximaEtapa(this.etapaValidacao);
        this.etapaValidacao.setProximaEtapa(this.etapaEnvio);
        this.etapaEnvio.setProximaEtapa(this.etapaAutenticacao);
        this.etapaAutenticacao.setProximaEtapa(this.etapaConfirmacao);
    }

    /* iniciar o processo do pagamento */
    iniciarPagamento() {
        console.log(`[--] - Iniciando : Iniciando pagamento de R$:${this.valorPagamento} `);
        this.etapaProcesso.processar();
    }
}

/* Função para solicitar o valor do pagamento do usuario */
function solicitarPagamento() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o valor a ser pago [R$]: ", (valor) => {
        const valorPagamento = parseFloat(valor);
        if (!isNaN(valorPagamento) && valorPagamento > 0) {
            const cliente = new Cliente(valorPagamento);
            cliente.iniciarPagamento();
            rl.close();
        } else {
            if (contSeg >= tentativa) {
                console.log(`[Erro] - Erro : Valor invalido | [tentativa ${tentativa} de ${contSeg}]`);
                solicitarPagamento();
                tentativa += 1;
            } else {
                console.log("[Encerrando] - Limite maximo de tentativas");
                rl.close();
            }

        }


    });
}

/* Solicita o valor do pagamento ao usuario */
solicitarPagamento();
