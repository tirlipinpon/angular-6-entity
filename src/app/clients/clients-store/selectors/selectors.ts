/**
 * Created by tirli on 30-01-19.
 */
import {ClientsState, clientsAdapter} from "../state/state";
import {MemoizedSelector, createFeatureSelector, createSelector} from "@ngrx/store";
import {DataForm} from "../../models/dataform";

export const getError = (state: ClientsState): any => state.error;
export const getIsLoading = (state: ClientsState): boolean => state.isLoading;

export const selectClientsState: MemoizedSelector<object,ClientsState> = createFeatureSelector<ClientsState>('clients');

export const selectAllClientsItems: (state: object) => DataForm[] = clientsAdapter.getSelectors(selectClientsState).selectAll;

export const selectClientById = (id: string) =>
  createSelector(this.selectAllClientsItems,(allClients: DataForm[]) => {
  if (allClients) {
    return allClients.find(p => p.id === id);
  }else {
    return null
  }
});

export const selectClientsError: MemoizedSelector<object, any> =
  createSelector (
    selectClientsState,
    getError
  );

export const selectClientsIsLoading: MemoizedSelector<object, boolean> =
  createSelector (
    selectClientsState,
    getIsLoading
  );
