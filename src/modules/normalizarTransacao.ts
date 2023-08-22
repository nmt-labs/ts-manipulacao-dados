export default function normalizar(trasacao: TransacaoAPI) : Transacao {

  return {
    nome: trasacao.Nome,
    id : trasacao.ID,
    data: stringToDate(trasacao.Data),
    status: trasacao.Status,
    email: trasacao.Email,
    moeda: trasacao["Valor (R$)"],
    valor: currencyToNumber(trasacao["Valor (R$)"]),
    pagamento: trasacao["Forma de Pagamento"],
    novo: Boolean(trasacao["Cliente Novo"]),
  
  }
}

function currencyToNumber(value: string) : number | null {
  value = value.replaceAll('.', '').replace(',', '.');

  return (!isNaN(Number(value))) ? Number(value) : null;
}

function stringToDate(date : string) : Date {
  const [data, tempo] = date.split(" ");
  const [dia, mes, ano] = data.split("/").map(Number);
  const [hora, minuto] = tempo.split(":").map(Number);
  return new Date(ano, mes - 1, dia, hora, minuto);
}