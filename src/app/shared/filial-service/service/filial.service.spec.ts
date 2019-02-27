import { getTestBed, TestBed } from '@angular/core/testing';

import { FilialService } from './filial.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilialStub } from '../stub/filial.stub.spec';

describe('FilialService', () => {
    let injector: TestBed;
    let service: FilialService;
    let httpMock: HttpTestingController;

    beforeEach(
        () => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [FilialService]
            });

            injector = getTestBed();
            service = injector.get(FilialService);
            httpMock = injector.get(HttpTestingController);
        });

    afterEach(() => {
        httpMock.verify();
    });

    it('deve criar o servico', () => {
        expect(service).toBeTruthy();
    });

    it('getEstoque deve retornar um Observable<EstoqueOutputModel[]>', () => {

        service.getEstoque(1).subscribe(value => {
            expect(value.length).toBe(1);
            expect(value).toEqual(FilialStub.getEstoqueOutputModel());
        });

        const req = httpMock.expectOne(`${service.BASE_URL}/filiais/101/estoque?itens=1`);
        expect(req.request.method).toBe('GET');
        req.flush(FilialStub.getEstoqueOutputModel());
    });

    it('getEstoque deve retornar um Observable<[]>', () => {

        service.getEstoque(1).subscribe(value => {
            expect(value.length).toBe(0);
            expect(value).toEqual([]);
        });

        const req = httpMock.expectOne(`${service.BASE_URL}/filiais/101/estoque?itens=1`);
        expect(req.request.method).toBe('GET');
        req.flush([]);
    });


});
