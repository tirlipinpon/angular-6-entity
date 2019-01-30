import {EntityAdapter, createEntityAdapter, EntityState} from "@ngrx/entity";
import {DataForm} from "../../models/dataform";
import {MemoizedSelector, createSelector} from "@ngrx/store";

/**
 * Created by tirli on 30-01-19.
 */

export const clientsAdapter: EntityAdapter<DataForm> =
  createEntityAdapter<DataForm>({
    selectId: model => model.id,
    sortComparer: (a: DataForm, b: DataForm): number =>
      b.id.toString().localCompare(a.id.toString())
  });

export interface State extends EntityState<DataForm> {
  isLoading?: boolean;
  error?: any;
}

export const initalState: State = clientsAdapter.getInitialState({
  isLoading: false,
  error: null
});
