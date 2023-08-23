import countBy from "./countBy.js";

export default class Estatistic {
  private transacoes;
  total;
  pagamento;
  status;
  semana;
  melhorDia;

  constructor(transacoes : Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal() : number {
    let total = 0;
    
    if (typeof this.transacoes !== 'boolean') {
      this.transacoes.forEach(t => {
        if (t.valor) total += t.valor;
      });
    }
    
    return total;
  }
  
  // origamid
  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status));
  }

  private setSemana() {
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
      if (day === 0) semana["Domingo"] += 1;
      if (day === 1) semana["Segunda"] += 1;
      if (day === 2) semana["Terça"] += 1;
      if (day === 3) semana["Quarta"] += 1;
      if (day === 4) semana["Quinta"] += 1;
      if (day === 5) semana["Sexta"] += 1;
      if (day === 5) semana["Sábado"] += 1;
    }
    return semana;

  }

  private setMelhorDia() {
    // transforma o objeto em um array com tuples
    return Object.entries(this.semana).sort((a, b) => {
      // organiza de forma decrescente
      return b[1] - a[1];
    })[0]; // retorna o index 0 -> maior valor
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
}