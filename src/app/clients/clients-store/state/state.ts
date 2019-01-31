/**
 * Created by tirli on 30-01-19.
 */
import {EntityAdapter, createEntityAdapter, EntityState} from "@ngrx/entity";
import {DataForm} from "../../models/dataform";

export const clientsAdapter: EntityAdapter<DataForm> = createEntityAdapter<DataForm>({
    selectId: model => model.id,
    sortComparer: (a: DataForm, b: DataForm): number =>
      a.id.toString().localeCompare(b.id.toString())
  });

export interface ClientsState extends EntityState<DataForm> {
  isLoading?: boolean;
  error?: any;
}

export const initalClientsState: ClientsState = clientsAdapter.getInitialState({
  isLoading: false,
  error: null
});
