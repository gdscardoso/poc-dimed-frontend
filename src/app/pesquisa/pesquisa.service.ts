import {Injectable} from '@angular/core';
import {FilialService} from '../shared/filial-service/service/filial.service';
import {MostruariosService} from '../shared/mostruario-service/service/mostruarios.service';
import {ItemService} from '../shared/item-service/service/item.service';
import {forkJoin, Observable, of} from 'rxjs';
import {ItemResponse} from './model/item.response';
import {catchError, map} from 'rxjs/operators';
import {Builder} from 'builder-pattern';

@Injectable({
    providedIn: 'root'
})
export class PesquisaService {

    constructor(private filialService: FilialService,
                private mostruarioService: MostruariosService,
                private itemService: ItemService,
    ) {
    }


    public getItem(codigoItem: number): Observable<ItemResponse> {
        const itemPreco$ = this.mostruarioService.getItemPreco(codigoItem);
        const detalhe$ = this.mostruarioService.getItemDetalhe(codigoItem);
        const estoque$ = this.filialService.getEstoque(codigoItem);

        return forkJoin(itemPreco$, detalhe$, estoque$)
            .pipe(
                map(([itemPreco, detalhe, estoque]) => {
                    const {codigo, ean, nomenclatura} = detalhe.itens[0];
                    const {precoVenda} = itemPreco[0].preco;
                    const {estoqueLoja} = estoque[0];
                    return Builder<ItemResponse>()
                        .codigoItem(codigo)
                        .ean(ean)
                        .descricao(nomenclatura)
                        .estoque(estoqueLoja)
                        .preco(precoVenda)
                        .build();
                })
            );
    }

    public getItemAutocomplete(query: string): Observable<ItemResponse[]> {
        return this.itemService.getAutocomplete(query)
            .pipe(
                catchError(err => of(null))
            );
    }

}
