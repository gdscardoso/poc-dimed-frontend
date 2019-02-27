import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConsultaRegrasFiscaisInputModel, ItemDetalheInputModel, ItensInputModel} from '../model/item-detalhe-input.model';
import {Builder} from 'builder-pattern';
import {ItemDetalheOutputModel} from '../model/item-detalhe-output.model';
import {ItemPrecoOutputModel, PrecoOutputModel} from '../model/item-preco-output.model';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MostruariosService {

    BASE_URL = 'http://tst-int.grupodimedservices.com.br/mostruario/v3';

    constructor(private http: HttpClient) {
    }


    getItemDetalhe(codigoItem: number): Observable<ItemDetalheOutputModel> {
        const request = Builder<ItemDetalheInputModel>()
            .filial('101')
            .perfil(1)
            .itens(null)
            .consultaRegrasFiscais(
                Builder<ConsultaRegrasFiscaisInputModel>()
                    .pais('BR')
                    .paisDestino('BR')
                    .uf('RS')
                    .ufDestino('RS')
                    .build()
            )
            .itens(
                Array.of(
                    Builder<ItensInputModel>()
                        .codigo(codigoItem)
                        .quantidade(1)
                        .build()
                )
            )
            .build();
        return this.http.post<ItemDetalheOutputModel>(`${this.BASE_URL}/itens/detalhe`, request);
    }


    getItemPreco(codigoItem: number): Observable<ItemPrecoOutputModel[]> {
        const params = new HttpParams()
            .set('item', codigoItem.toString())
            .set('filial', '1')
            .set('perfil', '1');

        return this.http.get<ItemPrecoOutputModel[]>(`${this.BASE_URL}/itens/precos`, {params});
    }


}
