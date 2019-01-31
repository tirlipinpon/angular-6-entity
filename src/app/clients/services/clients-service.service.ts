import { Injectable } from '@angular/core';
import {of, Observable} from "rxjs";
import {DUMMY_CLIENTS} from "../DUMMY";
import {DataForm, DataDataFormState} from "../models/dataform";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getItems(id: number): Observable<DataDataFormState> {
    // return of(DUMMY_CLIENTS);
    let url = this.apiUrl+'php//read.php?fk_type='+id+''+2;
    return  this.http.get<DataDataFormState>(url);
  }
}
