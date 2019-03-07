import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { mergeMap, tap } from 'rxjs/operators';
import { ItemResponse } from './model/item.response';
import { PesquisaService } from './pesquisa.service';
import { ItemOutputModel } from '../shared/item-service/model/item-output.model';

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

    query: string;
    selected$: Observable<ItemResponse>;
    loading: boolean;
    noResults: boolean;
    dataSource: Observable<ItemResponse[]>;

    constructor(
        private pesquisaService: PesquisaService) {
    }

    ngOnInit() {
        this.dataSource = Observable.create((observer: any) => {
            observer.next(this.query);
        }).pipe(
            tap(x => console.log(x)),
            mergeMap((query: string) => this.pesquisar(query)),
        );
    }

    pesquisar(query: string): Observable<ItemOutputModel[]> {
        return this.pesquisaService.getItemAutocomplete(query);
    }

    onLoading(e: boolean): void {
        this.loading = e;
    }

    onSelect(e: TypeaheadMatch): void {
        this.selected$ = this.pesquisaService.getItem(e.item.codigoItem);
    }

    onNoResult(e: boolean) {
        this.selected$ = undefined;
        this.noResults = e;
    }
}
