import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

// Action Creator
export const fetchUser = () =>
  // ReduxThunk erkennt das es eine function ist, somit wird es automatisch aufgerufen mit dispatch (Versand)
  // Versende eine action nachdem "axios.get('/api/current_user')" action vervollständigt wurde.
  async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data }); // (res ist die Ausgabe von axios (Backend-server)) erst jetzt wird die Action versendet.
  };
// history (withRouter) from react-router-dom
export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/umfragen', values);

  history.push('/umfragen');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/umfragen');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = id => async dispatch => {
  let { data } = await axios.delete(`/api/surveys/delete/${id}`);
  dispatch({ type: FETCH_SURVEYS, payload: data });
};
