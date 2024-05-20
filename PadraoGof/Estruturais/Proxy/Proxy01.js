/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 26/04/2024
Descrição: Aplicação do padrão GOF - Estruturais - Proxy
Escopo: Programa que cria uma instancia para controlar o serviço real (Proxy).
Cria a classe do SericoReal, depois cria a classe ProxyServico que ira manipular a classe ServicoReal,
dessa forma ao instanciar o ProxyServico, chamamos o executar(), que executa o metodo de dentro do serivoReal. 
--------------------------------------------------------------------------------------------------
*/

//Obj real
class ServicoReal {
    executar() {
        console.log("Executando o serviço real ...");
    }
}

//Proxy
class ProxyServico {
    constructor() {
        this.ServicoReal = new ServicoReal();
    }
    executar() {
        console.log("Antes de executar o serviço ...")
        this.ServicoReal.executar();
        console.log("Depois de executar o serviço ...")
    }
}

//Uso do Proxy
const proxy = new ProxyServico();
proxy.executar();