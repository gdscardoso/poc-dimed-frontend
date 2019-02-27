import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisaComponent } from './pesquisa.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItemComponent } from './item/item.component';
import { TypeaheadMatch, TypeaheadModule } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { PesquisaService } from './pesquisa.service';
import { of } from 'rxjs';
import { PesquisaStub } from './stub/pesquisa.stub';

describe('PesquisaComponent', () => {
  let component: PesquisaComponent;
  let fixture: ComponentFixture<PesquisaComponent>;
  let pesquisaService: PesquisaService;
  let hostElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisaComponent, ItemComponent],
      providers: [
        PesquisaService
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
    pesquisaService = TestBed.get(PesquisaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hostElement = fixture.nativeElement;
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });


  it('perquisar deve retornar uma Observable<ItemResponse[]>', () => {
    spyOn(pesquisaService, 'getItemAutocomplete').and.callFake(() => of(Array.of(PesquisaStub.getItem())));
    component.pesquisar('paracetamol').subscribe(value => {
      expect(value).not.toBeNull();
      expect(value.length).toBe(1);
    });
  });


  it('onLoading deve ativar/desativar o loading da pesquisa', () => {
    component.onLoading(true);
    expect(component.loading).toBe(true);
    fixture.detectChanges();

    const spinnerAtivo: HTMLElement = hostElement.querySelector('#search_loading');
    expect(spinnerAtivo).not.toBeNull();

    component.onLoading(false);
    expect(component.loading).toBe(false);
    fixture.detectChanges();

    const spinnerInativo: HTMLElement = hostElement.querySelector('#search_loading');
    expect(spinnerInativo).toBeNull();

  });


  it('onSelect deve carregar um item selecionado', () => {
    spyOn(pesquisaService, 'getItem').and.callFake(() => of(PesquisaStub.getItem()));

    component.onSelect(new TypeaheadMatch(PesquisaStub.getItem()));
    component.selected$.subscribe(value => {
      expect(value.codigoItem).toBe(1);
      expect(value.descricao).toBe('nome');
      expect(value.estoque).toBe(1);
      expect(value.preco).toBe(1);
      expect(value.ean).toBe(1);
    });
  });


  it('onNoResult deve exibir mensagem de nunhum resultado encontrado', () => {
    component.onNoResult(true);
    fixture.detectChanges();

    expect(component.noResults).toBe(true);
    const el = hostElement.querySelector('#no_result');
    expect(el).not.toBeNull();
  });


});
