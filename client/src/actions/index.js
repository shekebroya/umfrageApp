import axios from 'axios';
import { FETCH_USER } from './types';

// Action Creator
export const fetchUser = () => {
  // ReduxThunk erkennt das es eine function ist, somit wird es automatisch aufgerufen mit dispatch (Versand)
  // Versende eine action nachdem "axios.get('/api/current_user')" action vervollständigt wurde.
  return function(dispatch) {
    axios
      .get('/api/current_user') // Request (req)
      .then(res => dispatch({ type: FETCH_USER, payload: res })); // Respond (res) erst jetzt wird die Action versendet.
  };
};
