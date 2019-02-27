import {TestBed} from '@angular/core/testing';

import {PesquisaService} from './pesquisa.service';
import {FilialService} from '../shared/filial-service/service/filial.service';
import {MostruariosService} from '../shared/mostruario-service/service/mostruarios.service';
import {ItemService} from '../shared/item-service/service/item.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PesquisaService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FilialService, MostruariosService, ItemService]
    }));

    it('deve criar o component', () => {
        const service: PesquisaService = TestBed.get(PesquisaService);
        expect(service).toBeTruthy();
    });

});
