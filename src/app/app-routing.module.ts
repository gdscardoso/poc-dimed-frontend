import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ItemDetalheComponent } from './pesquisa/item-detalhe/item-detalhe.component';

const routes: Routes = [
  { path: '', redirectTo: 'pesquisa', pathMatch: 'full' },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'detalhe/:id', component: ItemDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
