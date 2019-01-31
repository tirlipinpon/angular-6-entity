import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataForm} from "../models/dataform";
import {Store} from "@ngrx/store";
import {
  RootStoreState,
  ClientsStoreActions,
  ClientsStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  clientsItems$: Observable<DataForm[]>;
  clientsById$: Observable<any>;
  error$: Observable<string>;
  selectTotal$: Observable<number>;
  isLoading$: Observable<boolean>;
  private cpt: number;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.cpt = 3;
    this.clientsItems$ = this.store$.select(
      ClientsStoreSelectors.selectAllClientsItems
    );

    this.error$ = this.store$.select(
      ClientsStoreSelectors.selectClientsError
    );

    this.isLoading$ = this.store$.select(
      ClientsStoreSelectors.selectClientsIsLoading
    );

    this.selectTotal$ = this.store$.select(
      ClientsStoreSelectors.selectTotal
    );

    this.store$.dispatch( new ClientsStoreActions.LoadRequestAction({id: 1}) );

  }

  selectById(id: string) {
    this.clientsById$ = this.store$.select(
      ClientsStoreSelectors.selectClientById(+id)
    );
  }

  removeOne(id: string): void {
    this.store$.dispatch( new ClientsStoreActions.RemoveRequestAction(id) );
  }

  updateOne(id: string): void {
    this.store$.dispatch( new ClientsStoreActions.UpdateRequestAction({
      id: id,
      changes: {
        id: +id,
        name: '',
        ref_client: '',
        address: '',
        number: '',
        cp: Math.floor(Math.random() * 1000) + 3,
        state: '',
        addressValidated: true,
        clientZone: Math.floor(Math.random() * 1000) + 3,
        phone: '',
        infos: {
          info1: '',
          info2: ''
        },
        type: Math.floor(Math.random() * 1000) + 3,
        fk_client: Math.floor(Math.random() * 1000) + 3,
        active:  Math.floor(Math.random() * 1000) + 3,
        created: '',
        fk_type: Math.floor(Math.random() * 1000) + 3,
      }
    }) );
  }

  addOne(): void {
    this.store$.dispatch(new ClientsStoreActions.AddRequestAction({
        item: {
          id: this.cpt++,
          name: '',
          ref_client: '',
          address: '',
          number: '',
          cp: 1,
          state: '',
          addressValidated: true,
          clientZone: 1,
          phone: '',
          infos: {
            info1: '',
            info2: ''
          },
          type: 1,
          fk_client: 1,
          active: 1,
          created: '',
          fk_type: 1,
        }
      }
    ));
  }

  upsertOne(id: string): void {
    let upsertId: number;
    if (id) { // update
      upsertId = +id;
    }else { // add
      upsertId = Math.floor(Math.random() * 1000) + 3;
    }
    this.store$.dispatch(new ClientsStoreActions.UpsertRequestAction({
        item: {
          id: upsertId,
          name: '',
          ref_client: '',
          address: '',
          number: '',
          cp: Math.floor(Math.random() * 1000) + 3,
          state: '',
          addressValidated: true,
          clientZone: Math.floor(Math.random() * 1000) + 3,
          phone: '',
          infos: {
            info1: '',
            info2: ''
          },
          type: Math.floor(Math.random() * 1000) + 3,
          fk_client: Math.floor(Math.random() * 1000) + 3,
          active:  Math.floor(Math.random() * 1000) + 3,
          created: '',
          fk_type: Math.floor(Math.random() * 1000) + 3,
        }
      }
    ));
  }

}
