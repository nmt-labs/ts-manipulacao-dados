import countBy from "./countBy.js";
export default class Estatistic {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
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
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
}
//# sourceMappingURL=estatistic.js.map