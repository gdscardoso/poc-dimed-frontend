import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EstoqueOutputModel} from '../model/estoque-output.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FilialService {
    BASE_URL = 'http://tst-int.grupodimedservices.com.br/filial/v1';

    constructor(private http: HttpClient) {
    }

    getEstoque(codigoItem: number): Observable<EstoqueOutputModel[]> {
        const url = `${this.BASE_URL}/filiais/101/estoque`;
        const params = new HttpParams()
            .set('itens', codigoItem.toString());

        return this.http.get<EstoqueOutputModel[]>(url, {params});

    }
}
