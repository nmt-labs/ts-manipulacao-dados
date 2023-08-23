import countBy from "./countBy.js";
export default class Estatistic {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
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
    setSemana() {
        const semana = {
            ["Domingo"]: 0,
            ["Segunda"]: 0,
            ["Terça"]: 0,
            ["Quarta"]: 0,
            ["Quinta"]: 0,
            ["Sexta"]: 0,
            ["Sábado"]: 0,
        };
        for (let i = 0; i < this.transacoes.length; i++) {
            const day = this.transacoes[i].data.getDay();
            if (day === 0)
                semana["Domingo"] += 1;
            if (day === 1)
                semana["Segunda"] += 1;
            if (day === 2)
                semana["Terça"] += 1;
            if (day === 3)
                semana["Quarta"] += 1;
            if (day === 4)
                semana["Quinta"] += 1;
            if (day === 5)
                semana["Sexta"] += 1;
            if (day === 5)
                semana["Sábado"] += 1;
        }
        return semana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => {
            return b[1] - a[1];
        })[0];
    }
}
//# sourceMappingURL=estatistic.js.map