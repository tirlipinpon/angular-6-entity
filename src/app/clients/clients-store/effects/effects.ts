/**
 * Created by tirli on 30-01-19.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable, of} from "rxjs";
import * as clientsActions from '../actions/actions';
import {startWith, switchMap, map, catchError, tap} from "rxjs/internal/operators";
import {ClientsServiceService} from "../../services/clients-service.service";

@Injectable()
export class ClientsStoreEffects {

  constructor(private dataService: ClientsServiceService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<clientsActions.LoadRequestAction>(
      clientsActions.ClientsActionTypes.LOAD_REQUEST
    ),
    switchMap(action =>
      this.dataService
        .getItems(action.payload.id)
        .pipe(
          map(result => result.data),
          map(
            items =>
              new clientsActions.LoadSuccessAction({
                items
              })
          ),
          catchError(error =>
            of(new clientsActions.LoadFailureAction({ error }))
          )
        )
    )
  );
}
