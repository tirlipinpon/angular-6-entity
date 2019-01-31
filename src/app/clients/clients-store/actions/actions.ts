import { Action } from '@ngrx/store';
import { DataForm } from '../../models/dataform';

export enum ClientsActionTypes {
  LOAD_REQUEST = '[CLIENTS] LOAD REQUEST',
  LOAD_FAILURE = '[CLIENTS] LOAD FAILURE',
  LOAD_SUCCESS = '[CLIENTS] LOAD SUCCESS',

  ADD_REQUEST = '[CLIENTS] ADD REQUEST',
  ADD_FAILURE = '[CLIENTS] ADD FAILURE',
  ADD_SUCCESS = '[CLIENTS] ADD SUCCESS',

  REMOVE_REQUEST = '[CLIENTS] REMOVE REQUEST',
  REMOVE_FAILURE = '[CLIENTS] REMOVE FAILURE',
  REMOVE_SUCCESS = '[CLIENTS] REMOVE SUCCESS',

  UPDATE_REQUEST = '[CLIENTS] UPDATE REQUEST',
  UPDATE_FAILURE = '[CLIENTS] UPDATE FAILURE',
  UPDATE_SUCCESS = '[CLIENTS] UPDATE SUCCESS',

  UPSERT_REQUEST = '[CLIENTS] UPSERT REQUEST',
  UPSERT_FAILURE = '[CLIENTS] UPSERT FAILURE',
  UPSERT_SUCCESS = '[CLIENTS] UPSERT SUCCESS'
}
// ================= LOAD ===============
export class LoadRequestAction implements Action {
  readonly type = ClientsActionTypes.LOAD_REQUEST;
  constructor(public payload: {id: number}) {}
}
export class LoadFailureAction implements Action {
  readonly type = ClientsActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class LoadSuccessAction implements Action {
  readonly type = ClientsActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: DataForm[] }) {}
}
// ================= ADD ===============
export class AddRequestAction implements Action {
  readonly type = ClientsActionTypes.ADD_REQUEST;
  constructor(public payload: { item: DataForm }) {}
}
export class AddFailureAction implements Action {
  readonly type = ClientsActionTypes.ADD_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class AddSuccessAction implements Action {
  readonly type = ClientsActionTypes.ADD_SUCCESS;
  constructor(public payload: { item: DataForm }) {}
}
// ================= REMOVE ONE ===============
export class RemoveRequestAction implements Action {
  readonly type = ClientsActionTypes.REMOVE_REQUEST;
  constructor(public payload: string) {}
}
export class RemoveFailureAction implements Action {
  readonly type = ClientsActionTypes.REMOVE_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class RemoveSuccessAction implements Action {
  readonly type = ClientsActionTypes.REMOVE_SUCCESS;
  constructor(public payload: { item: DataForm }) {}
}
// ================= UPDATE ONE ===============
export class UpdateRequestAction implements Action {
  readonly type = ClientsActionTypes.UPDATE_REQUEST;
  constructor(public payload: {
    id: string,
    changes: DataForm
  }) {}
}
export class UpdateFailureAction implements Action {
  readonly type = ClientsActionTypes.UPDATE_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class UpdateSuccessAction implements Action {
  readonly type = ClientsActionTypes.UPDATE_SUCCESS;
  constructor(public payload: { items: DataForm[] }) {}
}
// ================= UPSERT ONE ===============
export class UpsertRequestAction implements Action {
  readonly type = ClientsActionTypes.UPSERT_REQUEST;
  constructor(public payload: { item: DataForm }) {}
}
export class UpsertFailureAction implements Action {
  readonly type = ClientsActionTypes.UPSERT_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class UpsertSuccessAction implements Action {
  readonly type = ClientsActionTypes.UPSERT_SUCCESS;
  constructor(public payload: { item: DataForm }) {}
}

export type Actions =
      LoadRequestAction |
      LoadFailureAction |
      LoadSuccessAction |

      AddRequestAction |
      AddFailureAction |
      AddSuccessAction |

      RemoveRequestAction |
      RemoveFailureAction |
      RemoveSuccessAction |

      UpdateRequestAction |
      UpdateFailureAction |
      UpdateSuccessAction |

        UpsertRequestAction |
        UpsertFailureAction |
        UpsertSuccessAction;
