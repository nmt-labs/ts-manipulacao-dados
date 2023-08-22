import countBy from "./countBy.js";

export default class Estatistic {
  private transacoes;
  //origamid
  pagamento;
  status;

  constructor(transacoes : Transacao[]) {
    this.transacoes = transacoes;

    // origamid
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  public setTotal() : number {
    let total = 0;

    if (typeof this.transacoes !== 'boolean') {
      this.transacoes.forEach(t => {
        if (t.valor) total += t.valor;
      });
    }

    return total;
  }

  // esse eu que fiz mas acho pouco eficiente
  // public setTransacaoPorPagamento() : number[] {
  //   let resultado = [0, 0]

  //   if (typeof this.transacoes !== 'boolean') {
  //     this.transacoes.forEach(t => {
  //       if(t.pagamento === 'Boleto') resultado[0]++; //boleto
  //       else if(t.pagamento === 'Cartão de Crédito') resultado[1]++; //cartao
  //     });
  //   }

  //   return resultado;
  // }

  // public setTransacaoPorStatus() : number[] {
  //   let resultado = [0, 0, 0, 0]

  //   if (typeof this.transacoes !== 'boolean') {
  //     this.transacoes.forEach(t => {
  //       if(t.status === 'Paga') resultado[0]++;
  //       else if(t.status === 'Recusada pela operadora de cartão') resultado[1]++;
  //       else if(t.status === 'Aguardando pagamento') resultado[2]++;
  //       else if(t.status === 'Estornada') resultado[3]++;
  //     });
  //   }

  //   return resultado;
  // }

  // origamid
  public setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }
  public setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }
}