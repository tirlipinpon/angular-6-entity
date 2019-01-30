import { Action } from '@ngrx/store';
import { DataForm } from '../../models/dataform';

export enum ActionTypes {
  LOAD_REQUEST = '[CLIENTS] LOAD REQUEST',
  LOAD_FAILURE = '[CLIENTS] LOAD FAILURE',
  LOAD_SUCCESS = '[CLIENTS] LOAD SUCCESS'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
  constructor(public payload: {id: number}) {}
}
export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}
export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: DataForm[] }) {}
}
export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
