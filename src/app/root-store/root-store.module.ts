import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsStoreModule } from '../clients/clients-store/clients-store.module';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
