import { CountList } from "./modules/countBy.js";
import Estatistic from "./modules/estatistic.js";
import fetchData from "./modules/fetchData.js";
import normalizar from "./modules/normalizarTransacao.js";
import Table from "./modules/table.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json?');
  if (!data) return;
  const transacoes = data.map(normalizar);
  preencherEstatisticas(transacoes);
  preencherTabela(transacoes);
}

function preencherTabela(transacoes: Transacao[] ){
  const table = new Table('#table', transacoes);

  table.init();
}

// preenche com a chave e o valor de um objeto CountList
function preencherLista(lista: CountList, containerId: string): void {
  // seleciona elemento pelo ID
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    // se elemento existir, e criada um <p> para cada chave do objeto e seu respectivo valor
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
    });
  }
}

function preencherEstatisticas(transacoes: Transacao[]) {
  const data = new Estatistic(transacoes);

  const total = document.querySelector<HTMLElement>("#total span");
  if (total) {
    total.innerText = data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const diaElement = document.querySelector<HTMLElement>("#dia span");
  if (diaElement) diaElement.innerText = data.melhorDia[0];

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');
}

handleData();