const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    rl.question('Qual estoque você deseja checar? \n computadores(1) monitores(2): ', (escolha) => {
        escolha = Number(escolha);
        switch (escolha) {
            case 1:
                estoquePc();
                break;
            case 2:
                estoqueMonitor();
                break;
            default:
                console.log("Escolha inválida. Por favor, selecione 1 para computadores ou 2 para monitores.");
                rl.close();
                break;
        }
    });
}

function estoquePc() {
    rl.question('Quantos computadores tem no estoque? ', (computadores) => {
        computadores = Number(computadores);

        if (!isNaN(computadores)) {
            if (computadores < 10) {
                rl.question('É preciso reabastecer o estoque. Digite o quanto você deseja reabastecer: ', (numeroDeReabastecimento) => {
                    numeroDeReabastecimento = Number(numeroDeReabastecimento);

                    if (!isNaN(numeroDeReabastecimento)) {
                        computadores += numeroDeReabastecimento;
                        console.log(`Perfeito! Agora você tem ${computadores} computadores no estoque.`);
                    } else {
                        console.log("Entrada inválida. Por favor, insira um número.");
                    }
                    rl.close();
                });
            } else {
                console.log('Não precisa de reabastecimento.');
                rl.close();
            }
        } else {
            console.log("Entrada inválida. Por favor, insira um número.");
            rl.close();
        }
    });
}

function estoqueMonitor() {
    rl.question('Quantos monitores tem no estoque? ', (monitores) => {
        monitores = Number(monitores);

        if (!isNaN(monitores)) {
            if (monitores < 10) {
                rl.question('É preciso reabastecer o estoque. Digite o quanto você deseja reabastecer: ', (numeroDeReabastecimento) => {
                    numeroDeReabastecimento = Number(numeroDeReabastecimento);

                    if (!isNaN(numeroDeReabastecimento)) {
                        monitores += numeroDeReabastecimento;
                        console.log(`Perfeito! Agora você tem ${monitores} monitores no estoque.`);
                    } else {
                        console.log("Entrada inválida. Por favor, insira um número.");
                    }
                    rl.close();
                });
            } else {
                console.log('Não precisa de reabastecimento.');
                rl.close();
            }
        } else {
            console.log("Entrada inválida. Por favor, insira um número.");
            rl.close();
        }
    });
}

menu();
