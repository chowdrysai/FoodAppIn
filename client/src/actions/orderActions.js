import axios from 'axios';
import { domain } from './../config';
import { defaultOptions } from './../utils/helpers';


export const postOrder = (data) => async (dispatch, getState) => {
    try {
        const currentUser = getState().loginUserReducer.currentUser;
        console.log(currentUser);
        const headers = defaultOptions(currentUser.token);
        console.log(headers ,data);
        const resp = await axios.post(`${domain}/orders`, data, headers);
        return resp;
    } catch (error) {
        console.log('error', error);
    }
};



export const getAllOrders = () => async (dispatch, getState) => {
    dispatch({ type: 'GET_ALL_ORDERS_REQUEST' });
    try {
        const currentUser = getState().loginUserReducer.currentUser;
        console.log(getState());
        const headers = defaultOptions(currentUser.token);
        const response = await axios.get(`${domain}/orders`, headers);
        dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'GET_ALL_ORDERS_FAILED', payload: error });
    }
};

export const getUserOrders = (data) => async (dispatch, getState) => {
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' });
    try {
        const currentUser = getState().loginUserReducer.currentUser;
        const headers = defaultOptions(currentUser.token);
        const response = await axios.get(`${domain}/orders/users`, headers);
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
    }
    catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
    }
};

export const updateOrderStatus = (data) => async (dispatch, getState) => {
    try {
        console.log(data);
        // data = {order_id:'',status:'Delivered'}
        const currentUser = getState().loginUserReducer.currentUser;
        const headers = defaultOptions(currentUser.token);
        const response = await axios.put(`${domain}/orders/delivered`, data, headers);
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data });
        return response;
    }
    catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error });
    }
};