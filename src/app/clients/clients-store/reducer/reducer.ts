/**
 * Created by tirli on 30-01-19.
 */
import {Actions, ClientsActionTypes} from "../actions/actions";
import {initalClientsState, ClientsState, clientsAdapter} from "../state/state";

export function clientsReducer(state = initalClientsState, action: Actions): ClientsState {
  switch (action.type) {
    // case ClientsActionTypes.LOAD_REQUEST: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //     error: null
    //   };
    // }
    case ClientsActionTypes.LOAD_SUCCESS: {
      return clientsAdapter.addAll(
        action.payload.items,
        {
          ...state,
          isLoading: false,
          error: null
        }
      )
    }
    case ClientsActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    case ClientsActionTypes.ADD_REQUEST: {
      return clientsAdapter.addOne(
        action.payload.item,
        {
          ...state,
          isLoading: false,
          error: null
        }
      )
    }
    case ClientsActionTypes.REMOVE_REQUEST: {
      return clientsAdapter.removeOne(
        action.payload,
        {
          ...state,
          isLoading: false,
          error: null
        }
      )
    }
    case ClientsActionTypes.UPDATE_REQUEST: {
      return clientsAdapter.updateOne({
        id: action.payload.id,
        changes: action.payload.changes
        },
        {
          ...state,
          isLoading: false,
          error: null
        }

      )
    }
    case ClientsActionTypes.UPSERT_REQUEST: {
      return clientsAdapter.upsertOne(
        action.payload.item,
        {
          ...state,
          isLoading: false,
          error: null
        }
      )
    }

    default: {
      return state;
    }
  }
}
