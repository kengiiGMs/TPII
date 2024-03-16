/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 01/03/2024
Descrição: Aplicação do padrão GoF - Criacional - AbstractFactory em JavaScript, desenvolvido
como exemplo na aula. No código é implementado usando classes JavaScript com uma hierarquia de 
classes que define as fábricas abstratas, produtos abstratos e suas implementações concretas. O
cliente usa uma fábrica para criar produtos do tipo A e B, sem se preocupar com as implementações
específicas das fábricas ou produtos.
--------------------------------------------------------------------------------------------------
*/

/*--- INTERFACE DA FÁBRICA ABSTRATA ---- */
/* Interface da Fábrica Abstrata*/
class AbstractFactory {
    criaProdutoA() { };
    criaProdutoB() { };
}

/* Fábrica Concreta que Cria os Produtos do Tipo A e B - Opção A: */
class ConcretaFactory1 extends AbstractFactory {
    criaProdutoA() {
        return new ConcretoProdutoA1();
    }
    criaProdutoB() {
        return new ConcretoProdutoB1();
    }
}

/* Fábrica Concreta que Cria os Produtos do Tipo A e B  - Opção B: */
class ConcretaFactory2 extends AbstractFactory {
    criaProdutoA() {
        return new ConcretoProdutoA2();
    }
    criaProdutoB() {
        return new ConcretoProdutoB2();
    }
}

/* --- Produto A --- */
/* Interface dos Produtos do Tipo A */
class AbstractProdutoA {
    metodoA() { }
}

/* Implementação Concetra do Produto do Tipo A - Opção A*/
class ConcretoProdutoA1 extends AbstractProdutoA {
    metodoA() {
        return "Produto do Tipo A Criado pela Fabrica 1";
    }
}

/* Implementação Concetra do Produto do Tipo A - Opção B*/
class ConcretoProdutoA2 extends AbstractProdutoA {
    metodoA() {
        return "Produto do Tipo A criado pela Fabrica 2";
    }
}

/* --- Produto B --- */
/* Interface dos Produtos do Tipo B */
class AbstractProdutoB {
    metodoB() { }
}

/* Implementação Concetra do Produto do Tipo B - Opção A */
class ConcretoProdutoB1 extends AbstractProdutoB {
    metodoB() {
        return "Produto do Tipo B criado pela Fabrica 1";
    }
}

/* Implementação Concetra do Produto do Tipo B Diferente */
class ConcretoProdutoB2 extends AbstractProdutoB {
    metodoB() {
        return "Produto do Tipo B criado pela Fabrica 2";
    }
}

/* Interface Simulada para o uso do padrão GOF   */
/* Função para demonstração do padrão Abstract Factory */
function clienteCod(factory) {
    const produtoA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();

    console.log(produtoA.metodoA());
    console.log(produtoB.metodoB());
}

/* Exemplo do Uso com a Primeira Fábrica */
const factory1 = new ConcretaFactory1();
clienteCod(factory1);

/* Exemplo do Uso com a Segunda Fábrica */
const factory2 = new ConcretaFactory2();
clienteCod(factory2);