import Estatistic from "./modules/estatistic.js";
import fetchData from "./modules/fetchData.js";
import normalizar from "./modules/normalizarTransacao.js";
import Table from "./modules/table.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizar);
    const table = new Table('#table', transacoes);
    table.init();
    const estatistics = new Estatistic(transacoes);
    const total = estatistics.setTotal();
    const transacaoPagamento = estatistics.setTransacaoPorPagamento();
    const transacaoStatus = estatistics.setTransacaoPorStatus();
    const pTotal = document.querySelector('#total');
    if (pTotal)
        pTotal.innerHTML = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    const divPag = document.querySelectorAll('#pagamento > p');
    if (divPag) {
        const divArray = Array.from(divPag);
        divArray.forEach((item, index) => {
            item.innerHTML = `${transacaoPagamento[index]}`;
        });
    }
    const divStatus = document.querySelectorAll('#status > p');
    if (divStatus) {
        const divArray = Array.from(divStatus);
        divArray.forEach((item, index) => {
            item.innerHTML = `${transacaoStatus[index]}`;
        });
    }
}
handleData();
//# sourceMappingURL=main.js.map