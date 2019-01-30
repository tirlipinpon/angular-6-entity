import { Injectable } from '@angular/core';
import {of, Observable} from "rxjs";
import {DUMMY_CLIENTS} from "../DUMMY";
import {DataForm} from "../models/dataform";

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor() { }

  getItems(): Observable<DataForm[]> {
    return of(DUMMY_CLIENTS);
  }
}
