/* 
--------------------------------------------------------------------------------------------------
Fatec Diadema - Luigi Papaiz 
Curso : Desenvolvimento de Software Multiplataforma - DSM 
Disciplina: Técnica de Programação II
Nome: Kaiki Kenji       
Data: 03/05/2024
Descrição: Aplicação do padrão GOF - Estruturais - FlyWeightFactory
Escopo: Aplicando o padrão flyWeightFactory no projeto Pizzaria.
--------------------------------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", function () {

    class FabricaFlyWeight {
        constructor() {
            this.flyweights = {};
        }

        getFlyWeight(codigo) {
            if (!this.flyweights[codigo]) {
                this.flyweights[codigo] = new PedidoFlyWeight(codigo);
            }
            return this.flyweights[codigo];
        }
    }

    class PedidoFlyWeight {
        constructor(codigo) {
            this.codigo = codigo;
        }

        exibirDetalhes(sabor, tamanho, borda, extra, opcionais) {
            return "Número Pedido: " + this.codigo + "<br> Sabor: " + sabor + "<br> Tamanho: " + tamanho + "<br> Borda: " + borda + "<br> Extras:" + extra + "<br> Opcionais:" + opcionais;
        }
        exibirCusto(custo) {
            return "R$ " + custo.toFixed(2);
        }
    }

    class Client {
        constructor() {
            this.fabricaFlyWeight = new FabricaFlyWeight();
            this.pedido = [];
        }

        addProduto(codigo, sabor, tamanho, borda, extra, opcionais, custo) {
            const flyweight = this.fabricaFlyWeight.getFlyWeight(codigo);
            this.pedido.push({ flyweight, sabor, tamanho, borda, extra, opcionais, custo });
        }

        exibirPedido() {
            let detalhesPedido = "";
            this.pedido.forEach(item => {
                detalhesPedido += item.flyweight.exibirDetalhes(item.sabor, item.tamanho, item.borda, item.extra, item.opcionais, item.custo);
            })
            return detalhesPedido;
        }
        exibirCusto() {
            let custoPedido = "";
            this.pedido.forEach(item => {
                custoPedido += item.flyweight.exibirCusto(item.custo);
            })
            return custoPedido;
        }
    }

    function montarPizza() {

        let custo = 0;
        let extra = "";
        let opcionais = "";

        // sabor selecionado
        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : 'Sabor não selecionado';

        // obtendo tamanho selecionado 
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked')
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'Padrão';

        // Custo em relação tamanho / sabor
        if (tamanho === "Brotinho") {
            if (sabor === "Margherita") {
                custo += 18.75;
            } else if (sabor === "Calabresa") {
                custo += 21.00;
            } else if (sabor === "Frango com Catupiry") {
                custo += 22.50;
            } else if (sabor === "Portuguesa") {
                custo += 24.00;
            } else if (sabor === "Quatro Queijos") {
                custo += 26.25;
            }
        } else if (tamanho === "Padrão") {
            if (sabor === "Margherita") {
                custo += 25.00;
            } else if (sabor === "Calabresa") {
                custo += 28.00;
            } else if (sabor === "Frango com Catupiry") {
                custo += 30.00;
            } else if (sabor === "Portuguesa") {
                custo += 32.00;
            } else if (sabor === "Quatro Queijos") {
                custo += 35.00;
            }
        } else if (tamanho === "Grande") {
            if (sabor === "Margherita") {
                custo += 31.25;
            } else if (sabor === "Calabresa") {
                custo += 35.00;
            } else if (sabor === "Frango com Catupiry") {
                custo += 37.50;
            } else if (sabor === "Portuguesa") {
                custo += 40.00;
            } else if (sabor === "Quatro Queijos") {
                custo += 43.75;
            }
        }

        // Borda selecionada
        let bordaSelecionada = document.querySelector('input[name="borda"]:checked')
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Tradicional';

        if (borda === "Sem Borda") {
            custo += 0.00;
        } else if (borda === "Tradicional") {
            custo += 0.00;
        } else if (borda === "Recheada Catupiry") {
            custo += 2.00;
        } else if (borda === "Recheada Cheddar") {
            custo += 3.00
        }

        //Ingredientes Extras:
        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if (queijoExtraCheckbox) {
            custo += 2.00;
            extra += "<br>   - Queijo"
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if (cheddarExtraCheckbox) {
            custo += 5.00;
            extra += "<br>   - Cheddar"
        }

        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked')
        if (baconExtraCheckbox) {
            custo += 3.00;
            extra += "<br>   - Bacon"
        }

        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked')
        if (pepperoniExtraCheckbox) {
            custo += 4.00;
            extra += "<br>   -  Pepperoni"
        }

        //Opcionais
        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked')
        if (oreganoOpcionalCheckbox) {
            opcionais += "<br>   - Oregano"
        }

        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked')
        if (azeitonaOpcionalCheckbox) {
            opcionais += "<br>   - Azeitona"
        }

        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked')
        if (azeiteOpcionalCheckbox) {
            opcionais += "<br>   - Azeite"
        }

        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked')
        if (pimentaOpcionalCheckbox) {
            opcionais += "<br>   - Pimenta"
        }

        // Monta todo o pedido numa variavel:
        const cliente = new Client();
        if (extra === "") {
            extra = "Nenhum Extra ..."
        }
        if (opcionais === "") {
            opcionais = "Nenhum Opcional ..."
        }
        cliente.addProduto('001', sabor, tamanho, borda, extra, opcionais, custo);
        cliente.exibirCusto()
        let custoPedidoElement = document.getElementById("total-pedido");
        custoPedidoElement.innerHTML = cliente.exibirCusto();

        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = cliente.exibirPedido();
    }

    //Chama a função montarpizza ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});

