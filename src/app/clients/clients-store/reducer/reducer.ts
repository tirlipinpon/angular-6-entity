import {Actions, ActionTypes} from "../actions/actions";
import {initalState, State, clientsAdapter} from "../state/state";

/**
 * Created by tirli on 30-01-19.
 */
export function clientsReducer(state = initalState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      return clientsAdapter.addAll(action.payload.items, {
        ...state,
        loading: false,
        error: null
      })
    }
    case ActionTypes.LOAD_FAILURE: {
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
