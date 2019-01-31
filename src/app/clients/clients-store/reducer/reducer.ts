/**
 * Created by tirli on 30-01-19.
 */
import {Actions, ClientsActionTypes} from "../actions/actionsLoad";
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
      return clientsAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      })
    }
    case ClientsActionTypes.LOAD_SUCCESS: {
      return clientsAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      })
    }
    case ClientsActionTypes.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
