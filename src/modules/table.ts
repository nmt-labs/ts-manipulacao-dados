export default class Table {
  private table: HTMLElement | null;
  private transacoes : Transacao[];
  
  constructor(target: string, transacoes : Transacao[]) {
    this.table = document.querySelector<HTMLElement>(target);
    this.transacoes = transacoes;
  }

  private async createTable() {
    if (this.table instanceof HTMLElement) {
      this.transacoes.forEach(t => {
        if(this.table)
        this.table.innerHTML += `
        <tr>
          <td>${t.nome}</td>
          <td>${t.email}</td>
          <td>R$ ${t.moeda}</td>
          <td>${t.pagamento}</td>
          <td>${t.status}</td>
        </tr>
        ` 
      });
    }
  }


  public init() {
    this.createTable()
  }
}
