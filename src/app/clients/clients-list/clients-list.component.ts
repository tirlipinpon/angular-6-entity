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
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() {
    this.clientsItems$ = this.store$.select(
      ClientsStoreSelectors.selectAllClientsItems
    );

    this.error$ = this.store$.select(
      ClientsStoreSelectors.selectClientsError
    );

    this.isLoading$ = this.store$.select(
      ClientsStoreSelectors.selectClientsIsLoading
    );

    this.store$.dispatch(
      new ClientsStoreActions.LoadRequestAction({id: 1})
    );
  }

}
