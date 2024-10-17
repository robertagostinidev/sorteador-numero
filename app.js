function sortear() {
    let quantidade = parseInt(document.getElementById(`quantidade`).value);
    let de = parseInt(document.getElementById(`de`).value);
    let ate = parseInt(document.getElementById(`ate`).value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let sorteados = [];
    let numero;

    if (quantidade > (ate - de + 1)) {
        alert("Não é possível sortear mais números únicos nesse intervalo.");
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    sorteados.sort((a, b) => a - b);
    let resultado = document.getElementById(`resultado`);
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao(); 
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById(`btn-reiniciar`);
    botao.classList.toggle(`container__botao-desabilitado`);
    botao.classList.toggle(`container__botao`);
}

function reiniciar() {
    console.log("Função reiniciar chamada");
    document.getElementById(`quantidade`).value =  ``;
    document.getElementById(`de`).value =  ``;
    document.getElementById(`ate`).value =  ``;
    document.getElementById(`resultado`).innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}