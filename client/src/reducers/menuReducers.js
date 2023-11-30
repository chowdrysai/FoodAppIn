export const getAllMenuReducer = (state = { items: [], error: '', loading: false }, action) => {

    switch (action.type) {
    case 'GET_MENU_REQUEST': return {
        loading: true,
        ...state
    };
    case 'GET_MENU_SUCCESS': return {
        loading: false,
        items: action.payload
    };
    case 'GET_MENU_FAILED': return {
        loading: false,
        error: action.payload
    };
    default: return state;

    }
};