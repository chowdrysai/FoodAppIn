export const registerUserReducer = (state = { loading: false, success: false, error: '' }, action) => {

    switch (action.type) {
    case 'USER_REGISTER_REQUEST': return {
        loading: true
    };
    case 'USER_REGISTER_SUCCESS': return {
        loading: false,
        success: true
    };

    case 'USER_REGISTER_FAILED': return {
        loading: false,
        error: ''
    };
    default: return state;
    }
};


export const loginUserReducer = (state = { loading: false, success: false, currentUser: {} }, action) => {

    switch (action.type) {
    case 'USER_LOGIN_REQUEST': return {
        loading: true
    };
    case 'USER_LoGIN_SUCCESS': return {
        loading: false,
        success: true,
        currentUser: action.payload
    };

    case 'USER_LOGIN_FAILED': return {
        loading: false,
        error: action.payload
    };
    default: return state;
    }
};

