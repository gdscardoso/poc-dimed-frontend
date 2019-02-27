import {getTestBed, TestBed} from '@angular/core/testing';

import {ItemService} from './item.service';
import {FilialService} from '../../filial-service/service/filial.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FilialStub} from '../../filial-service/stub/filial.stub.spec';
import {ItemStub} from '../stub/item.stub.spec';

describe('ItemService', () => {
    let injector: TestBed;
    let service: ItemService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ItemService]
        });

        injector = getTestBed();
        service = injector.get(ItemService);
        httpMock = injector.get(HttpTestingController);
    });

    it('deve criar o servico', () => {
        expect(service).toBeTruthy();
    });


    it('getAutocomplete deve retornar um Observable<ItemOutputModel[]>', () => {

        service.getAutocomplete('BLAU').subscribe(value => {
            expect(value.length).toBe(1);
            expect(value).toEqual(ItemStub.getAutocomplete());
        });

        const req = httpMock.expectOne(`${service.BASE_URL}/itens/base/autocomplete?${ItemStub.getAutocompleteParams('BLAU')}`);
        expect(req.request.method).toBe('GET');
        req.flush(ItemStub.getAutocomplete());
    });

    it('getAutocomplete deve retornar um Observable<[]>', () => {

        service.getAutocomplete('BLAU').subscribe(value => {
            expect(value.length).toBe(0);
            expect(value).toEqual([]);
        });

        const req = httpMock.expectOne(`${service.BASE_URL}/itens/base/autocomplete?${ItemStub.getAutocompleteParams('BLAU')}`);
        expect(req.request.method).toBe('GET');
        req.flush([]);
    });
});
