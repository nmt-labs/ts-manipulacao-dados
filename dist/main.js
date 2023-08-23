import Estatistic from "./modules/estatistic.js";
import fetchData from "./modules/fetchData.js";
import normalizar from "./modules/normalizarTransacao.js";
import Table from "./modules/table.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizar);
    preencherEstatisticas(transacoes);
    preencherTabela(transacoes);
}
function preencherTabela(transacoes) {
    const table = new Table('#table', transacoes);
    table.init();
}
function preencherLista(lista, containerId) {
    const containerElement = document.getElementById(containerId);
    if (containerElement) {
        Object.keys(lista).forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        });
    }
}
function preencherEstatisticas(transacoes) {
    const data = new Estatistic(transacoes);
    const total = document.querySelector("#total span");
    if (total) {
        total.innerText = data.total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }
    preencherLista(data.pagamento, 'pagamento');
    preencherLista(data.status, 'status');
}
handleData();
//# sourceMappingURL=main.js.map