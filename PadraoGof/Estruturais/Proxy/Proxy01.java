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

package Proxy;

class ServicoReal {
    public void executar() {
        System.out.println("Executando o serviço real ...");
    }
}

// Proxy
class ProxyServico {
    private ServicoReal servicoReal;

    public ProxyServico() {
        this.servicoReal = new ServicoReal();
    }

    public void executar() {
        System.out.println("Antes de execução do serviço ...");
        servicoReal.executar();
        System.out.println("Depois da execução do serviço ...");
    }
}

public class Proxy01 {
    public static void main(String[] args) {
        ProxyServico proxy = new ProxyServico();
        proxy.executar();
    }
}