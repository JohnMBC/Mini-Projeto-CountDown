'use strict';

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const qtdSegundos = tempo % 60;
    segundos.textContent = formatarDigito(qtdSegundos);

}

const formatarDigito = (digito) =>
    `0${digito}`.slice(-2);

const contagemRegressiva = (tempo) => {
    const regressarTempo = () => {
        // console.log(tempo);
        atualizar(tempo)
        tempo--;
        const tempoPausado = () => clearInterval(id);
        if (tempo == -1) {
            tempoPausado()
        }
    }
    const id = setInterval(regressarTempo, 1000);
}

contagemRegressiva(60);
