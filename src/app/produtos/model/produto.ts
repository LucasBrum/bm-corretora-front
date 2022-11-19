export interface Produto {
  _id: string,
  tipo: string;
  seguradora: string;
  coCorretagem: boolean;
  dataVigencia: string;
  valorPremioLiquido: number;
  comissaoVendaPorcentagem: number;
  valorComissaoReceber: number;
  agenciamentoPorcentagem: number;
}
