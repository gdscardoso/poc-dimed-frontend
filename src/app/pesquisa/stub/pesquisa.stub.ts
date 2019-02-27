import { ItemResponse } from '../model/item.response';
import { Builder } from 'builder-pattern';
import { ItemOutputModel } from '../../shared/item-service/model/item-output.model';

export class PesquisaStub {

  static getItem(): ItemResponse {
    return Builder<ItemResponse>()
      .codigoItem(1)
      .descricao('nome')
      .preco(1)
      .ean(1)
      .estoque(1)
      .build();
  }

  static getItemModel(): ItemOutputModel[] {
    return Array.of(
      Builder<ItemOutputModel>()
        .codigoItem(1)
        .nomenclaturaVarejo('nomenclaturaVarejo')
        .nomeDetalhado('nomeDetalhado')
        .exclusivoPanvel(true)
        .participaFarmaciaPopular(true)
        .participaListaReferencial(true)
        .participaPbm(true)
        .permiteAdesao(true)
        .possuiItemAVencer(true)
        .possuiKitAdesao(true)
        .build()
    );
  }
}
