import { TestBed } from '@angular/core/testing';

import { PesquisaService } from './pesquisa.service';
import { FilialService } from '../shared/filial/service/filial.service';
import { MostruariosService } from '../shared/mostruario/service/mostruarios.service';
import { ItemService } from '../shared/item/service/item.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { MostruarioStub } from '../shared/mostruario/stub/mostruario.stub.spec';
import { FilialStub } from '../shared/filial/stub/filial.stub.spec';
import { PesquisaStub } from './stub/pesquisa.stub';

describe('PesquisaService', () => {
  let mostruarioService: MostruariosService;
  let filialService: FilialService;
  let itemService: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FilialService,
        MostruariosService,
        ItemService]
    });

    mostruarioService = TestBed.get(MostruariosService);
    filialService = TestBed.get(FilialService);
    itemService = TestBed.get(ItemService);
  });

  it('deve criar o component', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    expect(service).toBeTruthy();
  });


  it('getItem deve retornar um Observable<ItemResponse>', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    spyOn(mostruarioService, 'getItemPreco').and.callFake(() => of(MostruarioStub.getPreco()));
    spyOn(mostruarioService, 'getItemDetalhe').and.callFake(() => of(MostruarioStub.getItemDetalhe(1)));
    spyOn(filialService, 'getEstoque').and.callFake(() => of(FilialStub.getEstoqueOutputModel()));


    service.getItem(1).subscribe(value => {
      expect(value).not.toBeNull();
      expect(value.codigoItem).toBe(1);
      expect(value.descricao).toBe('nome');
      expect(value.preco).toBe(1);
      expect(value.estoque).toBe(1);
      expect(value.ean).toBe(1);
    });

  });


  it('getItem deve retornar um Observable<>', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    spyOn(mostruarioService, 'getItemPreco').and.callFake(() => of());
    spyOn(mostruarioService, 'getItemDetalhe').and.callFake(() => of());
    spyOn(filialService, 'getEstoque').and.callFake(() => of());


    service.getItem(1).subscribe(value => {
      expect(value).toBeNull();
    });

  });


  it('getItemAutocomplete deve retornar um Observable<ItemResponse[]>', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    spyOn(itemService, 'getAutocomplete').and.callFake(() => of(PesquisaStub.getItemModel()));


    service.getItemAutocomplete('abcd').subscribe(value => {
      expect(value).not.toBeNull();
      expect(value.length).toBe(1);
    });

  });



  it('getItemAutocomplete deve retornar um Observable<>', () => {
    const service: PesquisaService = TestBed.get(PesquisaService);
    spyOn(itemService, 'getAutocomplete').and.callFake(() => of([]));


    service.getItemAutocomplete('abcd').subscribe(value => {
      expect(value).not.toBeNull();
      expect(value.length).toBe(0);
    });

  });


});
