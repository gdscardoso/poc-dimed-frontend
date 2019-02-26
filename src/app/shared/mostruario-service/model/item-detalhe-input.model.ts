export interface ItemDetalheInputModel {
    filial: string;
    perfil: number;
    itens: Array<ItensInputModel>;
    consultaRegrasFiscais: ConsultaRegrasFiscaisInputModel;
}

export interface ItensInputModel {
    codigo: number;
    quantidade: number;
}

export interface ConsultaRegrasFiscaisInputModel {
    uf: string;
    pais: string;
    ufDestino: string;
    paisDestino: string;
}

