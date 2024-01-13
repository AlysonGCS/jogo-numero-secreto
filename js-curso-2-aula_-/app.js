let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function DefinirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    DefinirTextoTela('h1', 'Joguinhu');
    DefinirTextoTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        DefinirTextoTela('h1', 'Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertiva = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}!`;
        DefinirTextoTela('p', mensagemAcertiva);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroSecreto > chute) {
            DefinirTextoTela('p', `O numero secreto é maior do que ${chute}`);
        } else {
            DefinirTextoTela('p', `O numero secreto é menor do que ${chute}`);
        }
        limparCampo();
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}