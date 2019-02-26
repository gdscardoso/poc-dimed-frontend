import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PesquisaComponent} from './pesquisa/pesquisa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TypeaheadModule} from 'ngx-bootstrap';

import localePt from '@angular/common/locales/pt';
import {ItemDetalheComponent} from './pesquisa/item-detalhe/item-detalhe.component';
import {ItemComponent} from './pesquisa/item/item.component';
import {NgxMaskModule} from 'ngx-mask';

import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CURRENCY_MASK_CONFIG, CurrencyMaskConfig} from 'ng2-currency-mask/src/currency-mask.config';

registerLocaleData(localePt, 'pt-BR');

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'left',
    allowNegative: true,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: '.'
};


@NgModule({
    declarations: [
        AppComponent,
        PesquisaComponent,
        ItemDetalheComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot(),
        NgxMaskModule.forRoot(),
        CurrencyMaskModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
