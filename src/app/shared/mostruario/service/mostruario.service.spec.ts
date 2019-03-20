import {getTestBed, TestBed} from '@angular/core/testing';

import {MostruariosService} from './mostruarios.service';
import {ItemService} from '../../item/service/item.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FilialStub} from '../../filial/stub/filial.stub.spec';
import {MostruarioStub} from '../stub/mostruario.stub.spec';

describe('MostruariosService', () => {
    let injector: TestBed;
    let service: MostruariosService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MostruariosService]
        });

        injector = getTestBed();
        service = injector.get(MostruariosService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('deve criar o servico', () => {
        expect(service).toBeTruthy();
    });

    it('getItemPreco deve retornar um Observable<ItemPrecoOutputModel[]>', () => {
        service.getItemPreco(1).subscribe(value => {
            expect(value.length).toBe(1);
            expect(value).toEqual(MostruarioStub.getPreco());
        });
        const req = httpMock.expectOne(`${service.BASE_URL}/itens/precos?${MostruarioStub.getPrecoParams(1).toString()}`);
        expect(req.request.method).toBe('GET');
        req.flush(MostruarioStub.getPreco());
    });


    it('getItemPreco deve retornar um Observable<[]>', () => {
        service.getItemPreco(1).subscribe(value => {
            expect(value.length).toBe(0);
            expect(value).toEqual([]);
        });
        const req = httpMock.expectOne(`${service.BASE_URL}/itens/precos?${MostruarioStub.getPrecoParams(1).toString()}`);
        expect(req.request.method).toBe('GET');
        req.flush([]);
    });


    it('getItemDetalhe deve retornar um Observable<ItemDetalheOutputModel>', () => {
        service.getItemDetalhe(1).subscribe(value => {
            expect(value).toEqual(MostruarioStub.getItemDetalhe(1));
            expect(value.itens.length).toBe(1);
            expect(value.itens[0].categorias.length).toBe(2);
            expect(value.itens[0].advertencias.length).toBe(2);
        });
        const req = httpMock.expectOne(`${service.BASE_URL}/itens/detalhe`);
        expect(req.request.method).toBe('POST');
        req.flush(MostruarioStub.getItemDetalhe(1));
    });


    it('getItemDetalhe deve retornar um Observable<>', () => {
        service.getItemDetalhe(1).subscribe(value => {
            expect(value).toBeNull();
        });
        const req = httpMock.expectOne(`${service.BASE_URL}/itens/detalhe`);
        expect(req.request.method).toBe('POST');
        req.flush(null);
    });

});
