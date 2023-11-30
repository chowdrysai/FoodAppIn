import axios from 'axios';
import { domain } from './../config';

// const defaultOptions = token => { return { headers: { 'x-access-token': token } } }


export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' });
    try {
        const response = await axios.post(`${domain}/auth/signup`, user);
        dispatch({ type: 'USER_REGISTER_SUCCESS' });
        return response;
    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error });
    }
};

export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' });
    try {
        const response = await axios.post(`${domain}/auth/login`, user);
        console.log(response);       
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        return response;
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
    }
};   
