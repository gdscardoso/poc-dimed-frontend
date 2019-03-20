import {Builder} from 'builder-pattern';
import {EstoqueOutputModel} from '../model/estoque-output.model';
import {HttpParams} from '@angular/common/http';

export class FilialStub {

    static getEstoqueOutputModel(): EstoqueOutputModel[] {
        return Array.of(
            Builder<EstoqueOutputModel>()
                .codigoItem(1)
                .filial(1)
                .estoqueApoio(1)
                .estoqueCd(1)
                .estoqueCdApoio(1)
                .estoqueLoja(1)
                .reservaVirtual(1)
                .build()
        );
    }

}
