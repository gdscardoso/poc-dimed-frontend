import {Builder} from 'builder-pattern';
import {ItemOutputModel} from '../model/item-output.model';
import {HttpParams} from '@angular/common/http';

export class ItemStub {

    static getAutocomplete(): ItemOutputModel[] {
        return Array.of(
            Builder<ItemOutputModel>()
                .codigoItem(1)
                .nomeDetalhado('BLAU')
                .nomenclaturaVarejo('BLAU')
                .possuiItemAVencer(false)
                .participaPbm(false)
                .permiteAdesao(false)
                .possuiKitAdesao(false)
                .exclusivoPanvel(false)
                .participaListaReferencial(false)
                .participaFarmaciaPopular(false)
                .build()
        );
    }


    static getAutocompleteParams(query: string): string {
        return new HttpParams()
            .set('nome', query)
            .set('codigoFilial', '101')
            .set('maxResult', '200')
            .set('ordenarRentabilidade', 'true')
            .set('ordenarPreco', 'false').toString();
    }

}
