import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemComponent} from './item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ItemResponse} from '../model/item.response';

describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    const itemStub = {codigoItem: 1, descricao: 'Descricao', ean: 1, estoque: 0, preco: 10.00} as ItemResponse;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ItemComponent],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
        component.item = itemStub;
        fixture.detectChanges();
    });

    it('deve criar o component', () => {
        expect(component).toBeTruthy();
    });

});
