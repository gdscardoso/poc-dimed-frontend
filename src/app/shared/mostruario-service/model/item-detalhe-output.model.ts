export interface ItemDetalheOutputModel {
    itens: Array<ItensOutputModel>;
}

export interface ItensOutputModel {
    codigo: number;
    ean: number;
    precoDe: number;
    precoPor: number;
    nomenclatura: string;
    nomenclaturaDetalhada: string;
    principioAtivo: string;
    classeTerapeutica: string;
    situacaoItem: string;
    promocao: any;
    advertencias: Array<string>;
    categorias: Array<CategoriasOutputModel>;
}


export interface CategoriasOutputModel {
    id: number;
    descricao: string;
    nivel: number;
}
