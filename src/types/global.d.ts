type TrasacaoPagamento = "Cartão de Crédito" | "Boleto";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";

interface TransacaoAPI {
  Status: TransacaoStatus;
  ID: number;
  Data: string;
  Nome: string;
  ['Forma de Pagamento']: TrasacaoPagamento;
  Email: string;
  ['Valor (R$)']: string;
  ['Cliente Novo']: number;
}

interface Transacao {
  nome: string;
  id : number;
  data: Date;
  status: TransacaoStatus;
  email: string;
  moeda: string;
  valor: number | null;
  pagamento: TrasacaoPagamento;
  novo: boolean
}