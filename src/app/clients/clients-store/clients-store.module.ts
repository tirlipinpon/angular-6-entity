import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {clientsReducer} from "./reducer/reducer";
import {ClientsStoreEffects} from "./effects/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('clients', clientsReducer),
    EffectsModule.forFeature([ClientsStoreEffects])
  ],
  providers: [ClientsStoreEffects]
})
export class ClientsStoreModule { }
