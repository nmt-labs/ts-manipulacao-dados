export default class Table {
    table;
    transacoes;
    constructor(target, transacoes) {
        this.table = document.querySelector(target);
        this.transacoes = transacoes;
    }
    async createTable() {
        if (this.table instanceof HTMLElement) {
            this.transacoes.forEach(t => {
                if (this.table)
                    this.table.innerHTML += `
        <tr>
          <td>${t.nome}</td>
          <td>${t.email}</td>
          <td>R$ ${t.moeda}</td>
          <td>${t.pagamento}</td>
          <td>${t.status}</td>
        </tr>
        `;
            });
        }
    }
    init() {
        this.createTable();
    }
}
//# sourceMappingURL=table.js.map