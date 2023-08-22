export default class Estatistic {
    transacoes;
    constructor(transacoes) {
        this.transacoes = transacoes;
    }
    setTotal() {
        let total = 0;
        if (typeof this.transacoes !== 'boolean') {
            this.transacoes.forEach(t => {
                if (t.valor)
                    total += t.valor;
            });
        }
        return total;
    }
    setTransacaoPorPagamento() {
        let resultado = [0, 0];
        if (typeof this.transacoes !== 'boolean') {
            this.transacoes.forEach(t => {
                if (t.pagamento === 'Boleto')
                    resultado[0]++;
                else if (t.pagamento === 'Cartão de Crédito')
                    resultado[1]++;
            });
        }
        return resultado;
    }
    setTransacaoPorStatus() {
        let resultado = [0, 0, 0, 0];
        if (typeof this.transacoes !== 'boolean') {
            this.transacoes.forEach(t => {
                if (t.status === 'Paga')
                    resultado[0]++;
                else if (t.status === 'Recusada pela operadora de cartão')
                    resultado[1]++;
                else if (t.status === 'Aguardando pagamento')
                    resultado[2]++;
                else if (t.status === 'Estornada')
                    resultado[3]++;
            });
        }
        return resultado;
    }
}
//# sourceMappingURL=estatistic.js.map