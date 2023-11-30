import axios from 'axios';
import { domain } from './../config';

const defaultOptions = token => { return { headers: { 'x-access-token': token } }; };

export const addToCart = (menu, quantity) => (dispatch, getState) => {
    var cartItem = {
        itemUuid: menu.uuid,
        name:menu.name,
        image: menu.image,
        quantity: Number(quantity),
        price: menu.price,
        total_price:menu.price * quantity,
    };
    if (cartItem.quantity > 10) {
        alert('You cannot enter more than 10 quantity');
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: menu });
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }
    }


    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (menu) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: menu });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};


