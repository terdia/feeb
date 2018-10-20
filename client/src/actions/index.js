import axios from 'axios';
import { GET_AUTH_USER } from './types';

const AUTH_API_ENDPOINT = '/api/user';

export const getAuthUser = () => async dispatch => {
    const response = await axios.get(AUTH_API_ENDPOINT);
    dispatch({ type: GET_AUTH_USER, payload: response.data });
};

export const handleToken = (token) => async dispatch => {
   const response = await axios.post('/api/stripe', token);

   dispatch({ type: GET_AUTH_USER, payload: response.data });
}

