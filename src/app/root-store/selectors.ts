/**
 * Created by tirli on 30-01-19.
 */

import {createSelector, MemoizedSelector} from "@ngrx/store";
import {
  ClientsStoreSelectors
} from '../clients/clients-store';


export const selectError: MemoizedSelector<object, string> =
  createSelector (
    ClientsStoreSelectors.selectClientsError,
    (clientsError: string) => { return clientsError; }
  );

export const selectIsLoading: MemoizedSelector<object, boolean> =
  createSelector (
    ClientsStoreSelectors.selectClientsIsLoading,
    (clientsIsSelect: boolean) => {  return clientsIsSelect; }
  );
