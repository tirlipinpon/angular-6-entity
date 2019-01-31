import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import { ClientsStoreModule } from '../clients/clients-store';

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
