/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 17/05/2024
Descrição: Aplicação do padrão GOF - Comportamental - Chain
Escopo: Implemente o projeto Pizzaria o padrão de projeto Chain a 
fim de desenvolver o porcesso do pedido (escolha pizza, bebida e sobremesa, etc)
assim como o projeto de pagamento (apos concluido o pedido)
--------------------------------------------------------------------------------------------------
*/

/* Classe base para cada etapa do processo */
document.addEventListener("DOMContentLoaded", function () {

    class EtapaProcesso {
        constructor() {
            this.proximaEtapa = null;
        }

        setProximaEtapa(etapa) {
            this.proximaEtapa = etapa;
        }

        processar() {

        }
    }

    class EtapaPizza extends EtapaProcesso {
        processar() {
            console.log("Processando a Pizza")

            // sabor selecionado
            let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
            let sabor = saborSelecionado ? saborSelecionado.value : 'Sabor não selecionado';

            // obtendo tamanho selecionado 
            let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
            let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'Padrão';

            let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
            let borda = bordaSelecionada ? bordaSelecionada.value : 'Sem Borda';

            let preco = 0;

            //Ingredientes Extras:
            let extras = [];
            let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
            if (queijoExtraCheckbox) {
                preco += 2.00;
                extras.push("Queijo")
            }

            let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
            if (cheddarExtraCheckbox) {
                preco += 5.00;
                extras.push("Cheddar")
            }

            let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
            if (baconExtraCheckbox) {
                preco += 3.00;
                extras.push("Bacon")
            }

            let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
            if (pepperoniExtraCheckbox) {
                preco += 4.00;
                extras.push("Pepperoni")
            }

            //Igredientes Opcionais
            let opcionais = [];
            let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
            if (oreganoOpcionalCheckbox) {
                opcionais.push("Oregano")
            }

            let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
            if (azeitonaOpcionalCheckbox) {
                opcionais.push("Azeitona")
            }

            let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
            if (azeiteOpcionalCheckbox) {
                opcionais.push("Azeite")
            }

            let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked')
            if (pimentaOpcionalCheckbox) {
                opcionais.push("Pimenta")
            }

            if (tamanho === "Brotinho") {
                if (sabor === "Margherita") {
                    preco += 18.75;
                } else if (sabor === "Calabresa") {
                    preco += 21.00;
                } else if (sabor === "Frango com Catupiry") {
                    preco += 22.50;
                } else if (sabor === "Portuguesa") {
                    preco += 24.00;
                } else if (sabor === "Quatro Queijos") {
                    preco += 26.25;
                }
            } else if (tamanho === "Padrão") {
                if (sabor === "Margherita") {
                    preco += 25.00;
                } else if (sabor === "Calabresa") {
                    preco += 28.00;
                } else if (sabor === "Frango com Catupiry") {
                    preco += 30.00;
                } else if (sabor === "Portuguesa") {
                    preco += 32.00;
                } else if (sabor === "Quatro Queijos") {
                    preco += 35.00;
                }
            } else if (tamanho === "Grande") {
                if (sabor === "Margherita") {
                    preco += 31.25;
                } else if (sabor === "Calabresa") {
                    preco += 35.00;
                } else if (sabor === "Frango com Catupiry") {
                    preco += 37.50;
                } else if (sabor === "Portuguesa") {
                    preco += 40.00;
                } else if (sabor === "Quatro Queijos") {
                    preco += 43.75;
                }
            }

            if (borda === "Sem Borda") {
                preco += 0.00;
            } else if (borda === "Tradicional") {
                preco += 0.00;
            } else if (borda === "Recheio com Catupiry") {
                preco += 2.00;
            } else if (borda === "Recheio com Cheddar") {
                preco += 3.00;
            }


            let pizza = new Pizza(sabor, tamanho, borda, opcionais, extras, preco);
            console.log(pizza);
            localStorage.setItem('pizza', JSON.stringify(pizza));

            if (this.proximaEtapa) {
                this.proximaEtapa.processar();
            }
        }
    }


    class EtapaBebida extends EtapaProcesso {
        processar() {
            console.log("Processando Bebida")
            /* Sabor Bebida */
            let saborBebidaSelecionado = document.querySelector('input[name="saborBebida"]:checked');
            let saborBebida = saborBebidaSelecionado ? saborBebidaSelecionado.value : 'Sabor não selecionado';

            let tamanhoBebidaSelecionado = document.querySelector('input[name="tamanhoBebida"]:checked')
            let tamanhoBebida = tamanhoBebidaSelecionado ? tamanhoBebidaSelecionado.value : 'Medio';
            let precoBebida = 0;

            if (tamanhoBebida === "Pequeno") {
                if (saborBebida === "Chá") {
                    precoBebida = 4;
                } else {
                    precoBebida = 5;
                }
            } else if (tamanhoBebida === "Medio") {
                if (saborBebida === "Guarana" || saborBebida === "Coca Cola") {
                    precoBebida = 7;
                } else if (saborBebida === "Suco de Uva") {
                    precoBebida = 6.5;
                } else if (saborBebida === "Chá") {
                    precoBebida = 6;
                }
            } else if (tamanhoBebida === "Grande") {
                if (saborBebida === "Guarana") {
                    precoBebida = 12;
                } else if (saborBebida === "Suco de Uva") {
                    precoBebida = 11;
                } else if (saborBebida === "Chá") {
                    precoBebida = 10;
                } else if (saborBebida === "Coca Cola") {
                    precoBebida = 12.5
                }
            }

            let bebida = new Bebida(saborBebida, tamanhoBebida, precoBebida);
            console.log(bebida);
            localStorage.setItem('bebida', JSON.stringify(bebida));

            if (this.proximaEtapa) {
                this.proximaEtapa.processar();
            }
        }
    }


    class EtapaSobremesa extends EtapaProcesso {
        processar() {
            console.log("Processando Sobremesa")
            /* Tipo de Sobremesa */
            let sobremesaSelecionada = document.querySelector('input[name="sobremesa"]:checked');
            let tipoSobremesa = sobremesaSelecionada ? sobremesaSelecionada.value : 'Sobremesa não selecionada';
            let preco = 0;
            if (tipoSobremesa === "Pudim") {
                preco = 12;
            } else if (tipoSobremesa === "Bolo") {
                preco = 7;
            } else if (tipoSobremesa === "Sorvete") {
                preco = 10;
            }

            let sobremesa = new Sobremesa(tipoSobremesa, preco);
            console.log(sobremesa);
            localStorage.setItem('sobremesa', JSON.stringify(sobremesa));

            if (this.proximaEtapa) {
                this.proximaEtapa.processar();
            }

        }
    }

    class EtapaPagamento extends EtapaProcesso {
        processar() {
            console.log("Processando Pagamento")
            let pizza = JSON.parse(localStorage.getItem('pizza'));
            let bebida = JSON.parse(localStorage.getItem('bebida'));
            let sobremesa = JSON.parse(localStorage.getItem('sobremesa'));

            if (pizza.sabor === "Sabor não selecionado" && bebida.saborBebida === "Sabor não selecionado" && sobremesa.tipo === "Sobremesa não selecionada") {
                alert("ERRO - nenhum produto no pedido");
            } else {
                alert("Pedido Finalizado com Sucesso")
            }

        }
    }


    class Cliente {
        constructor() {
            this.etapaSobremesa = new EtapaSobremesa();
            this.etapaPizza = new EtapaPizza();
            this.etapaBebida = new EtapaBebida();
            this.etapaPagamento = new EtapaPagamento();

            this.etapaPizza.setProximaEtapa(this.etapaBebida);
            this.etapaBebida.setProximaEtapa(this.etapaSobremesa);
            this.etapaSobremesa.setProximaEtapa(this.etapaPagamento);
        }

        iniciarPedido() {
            alert("Iniciando Pedido");
            this.etapaPizza.processar();
        }
    }

    function solicitarPedido() {
        const cliente = new Cliente();
        cliente.iniciarPedido();
    }

    class Pizza {
        constructor(sabor, tamanho, borda, opcionais, extras, preco) {
            this.sabor = sabor;
            this.tamanho = tamanho;
            this.opcionais = opcionais;
            this.borda = borda;
            this.extras = extras;
            this.preco = preco;
        }
    }

    class Bebida {
        constructor(saborBebida, tamanhoBebida, precoBebida) {
            this.saborBebida = saborBebida;
            this.tamanhoBebida = tamanhoBebida;
            this.precoBebida = precoBebida
        }
    }

    class Sobremesa {
        constructor(tipo, preco) {
            this.tipo = tipo;
            this.preco = preco;
        }
    }

    class Pagamento {
        constructor(tipoPagamento) {
            this.tipoPagamento = tipoPagamento;
        }
    }


    const button = document.querySelector("button");
    button.addEventListener('click', solicitarPedido);

});
