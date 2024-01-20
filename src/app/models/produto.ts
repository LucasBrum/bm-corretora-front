export interface Produto {
    id?:                         any;
    tipo:                       string;
    seguradora:                 string;
    coCorretagem:               boolean;
    dataVigencia:               any;
    valorPremioLiquido:         number;
    comissaoVendaPorcentagem:   number;
    valorComissaoReceber:       number;
    agenciamentoPorcentagem:    number;
    numeroApolice:              number;
    nomeCliente:                string;
}