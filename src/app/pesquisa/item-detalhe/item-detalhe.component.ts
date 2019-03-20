import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {MostruariosService} from '../../shared/mostruario/service/mostruarios.service';
import {Observable} from 'rxjs';
import {ItensOutputModel} from '../../shared/mostruario/model/item-detalhe-output.model';

@Component({
    selector: 'app-item-detalhe',
    templateUrl: './item-detalhe.component.html',
    styleUrls: ['./item-detalhe.component.scss']
})
export class ItemDetalheComponent implements OnInit {

    public itemDetalhe$: Observable<ItensOutputModel>;
    public codigo: any;

    isError = false;

    constructor(
        private route: ActivatedRoute,
        private mostruariosService: MostruariosService,
    ) {
    }

    ngOnInit() {
        this.itemDetalhe$ = this.route.params
            .pipe(
                map(value => this.codigo = value.id),
                switchMap(value => this.mostruariosService.getItemDetalhe(value)),
                map(value => value.itens[0])
            )
        ;
    }

}

