import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemOutputModel } from '../model/item-output.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  BASE_URL = 'http://tst-int.grupodimedservices.com.br/item/v3';

  constructor(private http: HttpClient) {
  }


  getAutocomplete(query: string): Observable<ItemOutputModel[]> {
    const params = new HttpParams()
      .set('nome', query)
      .set('codigoFilial', '101')
      .set('maxResult', '200')
      .set('ordenarRentabilidade', 'true')
      .set('ordenarPreco', 'false');
    return this.http.get<ItemOutputModel[]>(`${this.BASE_URL}/itens/base/autocomplete`, { params });
  }


}
