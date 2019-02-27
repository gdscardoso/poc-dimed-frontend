import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ItemDetalheComponent} from './item-detalhe.component';
import {MostruariosService} from '../../shared/mostruario-service/service/mostruarios.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MostruarioStub} from '../../shared/mostruario-service/stub/mostruario.stub.spec';
import clock = jasmine.clock;

describe('ItemDetalheComponent', () => {
    let component: ItemDetalheComponent;
    let fixture: ComponentFixture<ItemDetalheComponent>;
    let service: MostruariosService;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ItemDetalheComponent],
            imports: [FormsModule, HttpClientTestingModule],
            providers: [
                {
                    provide: ActivatedRoute, useValue: {params: of({id: 1})}
                }
            ]
        }).compileComponents();


    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemDetalheComponent);
        service = TestBed.get(MostruariosService);
        component = fixture.componentInstance;
        fixture.detectChanges();

        clock().install();
    });

    afterEach(() => {
        clock().uninstall();
    });

    it('deve criar o component', () => {
        expect(component).toBeTruthy();
    });

    it('deve exibir a tela de detalhe quando retornar dados no Observable', fakeAsync(() => {
        spyOn(service, 'getItemDetalhe').and.returnValue(of(MostruarioStub.getItemDetalhe(1)));
        // component.ngOnInit();
        component.itemDetalhe$.subscribe(item => {
            fixture.detectChanges();
            expect(item).not.toBeNull();
            expect(item.categorias.length).toBe(2);
            expect(item.advertencias.length).toBe(2);
        });
        tick();

    }));

    it('deve exibir a tela de alerta quando nao retornar dados no Observable', fakeAsync(() => {
        spyOn(service, 'getItemDetalhe').and.returnValue(of());
        // component.ngOnInit();
        component.itemDetalhe$.subscribe(item => {
            fixture.detectChanges();
            expect(item).toBeNull();
        });
        tick();
    }));


});
