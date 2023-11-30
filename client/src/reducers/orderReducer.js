export const getAllOrdersReducer = (state = { items: [], error: '', loading: false }, action) => {

    switch (action.type) {
    case 'GET_ALL_ORDERS_REQUEST': return {
        loading: true,
        ...state
    };
    case 'GET_ALL_ORDERS_SUCCESS':         
        return {
            loading: false,
            items: action.payload
        };
    case 'GET_ALL_ORDERS_FAILED': return {
        loading: false,
        error: action.errorMessage
    };
    default: return state;

    }
};


export const getUserOrdersReducer = (state = { items: [], error: '', loading: false }, action) => {
    console.log(action.type);
    switch (action.type) {
    case 'GET_USER_ORDERS_REQUEST': return {
        loading: true,
        ...state
    };
    case 'GET_USER_ORDERS_SUCCESS':  return {
        loading: false,
        items: action.payload
    };
    case 'GET_USER_ORDERS_FAILED': return {
        loading: false,
        error: action.errorMessage
    };
    default: return state;

    }
};