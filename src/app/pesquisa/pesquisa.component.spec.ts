import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PesquisaComponent} from './pesquisa.component';
import {ItemService} from '../shared/item-service/service/item.service';
import {MostruariosService} from '../shared/mostruario-service/service/mostruarios.service';
import {FilialService} from '../shared/filial-service/service/filial.service';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ItemComponent} from './item/item.component';
import {TypeaheadModule} from 'ngx-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';

describe('PesquisaComponent', () => {
    let component: PesquisaComponent;
    let fixture: ComponentFixture<PesquisaComponent>;
    let itemService: ItemService;
    let mostruariosService: MostruariosService;
    let filialService: FilialService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PesquisaComponent, ItemComponent],
            providers: [
                ItemService,
                MostruariosService,
                FilialService
            ],
            imports: [
                FormsModule,
                RouterTestingModule,
                TypeaheadModule.forRoot(),
                HttpClientTestingModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PesquisaComponent);
        itemService = TestBed.get(ItemService);
        mostruariosService = TestBed.get(MostruariosService);
        filialService = TestBed.get(FilialService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('deve criar o component', () => {
        expect(component).toBeTruthy();
    });
});
