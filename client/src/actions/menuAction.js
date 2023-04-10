import axios from "axios";
import { domain } from './../config';

export const getMenu = () => async dispatch => {

    dispatch({ type: 'GET_MENU_REQUEST' })


    try {
        const response = await axios.get(`${domain}/items/getmenu`)
        dispatch({ type: 'GET_MENU_SUCCESS', payload: response.data })
    }
    catch (error) {
        dispatch({ type: 'GET_MENU_FAILED', payload: error })
    }
}