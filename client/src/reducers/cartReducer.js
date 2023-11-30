export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
    case 'ADD_TO_CART':
        console.log('Add t cart reducer', state, action);
        const alreadyExists = state.cartItems.find(item => item.itemUuid === action.payload.itemUuid);
        if (alreadyExists) {
        // console.log(state.cartItems)
            return {
                cartItems: state.cartItems.map(item =>
                    item.itemUuid === action.payload.itemUuid ? action.payload : item
                ),
            };
        } else {
            return {
                cartItems: [...state.cartItems, action.payload]
            };
        }
    case 'DELETE_FROM_CART': 
        return {
            cartItems: state.cartItems.filter(item => item.itemUuid !== action.payload.itemUuid)
        };
    case 'DELETE_ALL_CART': 
        return {
            cartItems: []
        };
    default: return state;
    }
};
