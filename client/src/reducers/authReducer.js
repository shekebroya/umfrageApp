import { FETCH_USER } from '../actions/types';

// We have 3 states: default = null, action.payload = Object and false.
// if action.payload is empty string "" -> state == false
// Is the user loged in? null = we dont know jet, false = not logged in, Object = logedin
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
