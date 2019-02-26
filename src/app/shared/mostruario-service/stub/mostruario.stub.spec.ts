import {Builder} from 'builder-pattern';
import {ItemPrecoOutputModel, PrecoOutputModel} from '../model/item-preco-output.model';
import {HttpParams} from '@angular/common/http';
import {CategoriasOutputModel, ItemDetalheOutputModel, ItensOutputModel} from '../model/item-detalhe-output.model';

export class MostruarioStub {

    static getPreco(): ItemPrecoOutputModel[] {
        return Array.of(
            Builder<ItemPrecoOutputModel>()
                .codigoItem(1)
                .preco(Builder<PrecoOutputModel>()
                    .precoFidelidade(1)
                    .precoFidelidade55Mais(1)
                    .precoPor(1)
                    .precoVenda(1)
                    .build()
                )
                .build()
        );
    }

    static getPrecoParams(codigoItem: number): HttpParams {
        return new HttpParams()
            .set('item', codigoItem.toString())
            .set('filial', '1')
            .set('perfil', '1');
    }

    static getItemDetalhe(codigoItem: number) {
        return Builder<ItemDetalheOutputModel>()
            .itens(Array.of(
                Builder<ItensOutputModel>()
                    .codigo(codigoItem)
                    .precoPor(1)
                    .precoDe(1)
                    .ean(1)
                    .classeTerapeutica('A')
                    .nomenclatura('nome')
                    .nomenclaturaDetalhada('nome detalhado')
                    .principioAtivo('principioAtivo')
                    .promocao(null)
                    .situacaoItem('T')
                    .advertencias(Array.of('advetencia  1', 'advertencia 2'))
                    .categorias(Array.of(
                        Builder<CategoriasOutputModel>()
                            .id(1)
                            .descricao('categoria 1')
                            .nivel(1)
                            .build(),
                        Builder<CategoriasOutputModel>()
                            .id(1)
                            .descricao('categoria 2')
                            .nivel(1)
                            .build()
                    ))
                    .build()
            ))
            .build();
    }
}
