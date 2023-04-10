import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import { postOrder } from '../actions/orderActions'
import { useNavigate } from "react-router-dom"

export default function Cartscreen() {
    const navigate = useNavigate();

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.price*item.quantity, 0)

    const userItem = useSelector(state => state.loginUserReducer)
    const currentUser = userItem.currentUser;

    const dispatch = useDispatch()


    async function postCart() {
        if (currentUser && cartItems && cartItems.length > 0) {
            console.log(currentUser)
            const resp = await dispatch(postOrder(cartItems));
            if (resp.status === 200) {
                dispatch({ type: 'DELETE_ALL_CART' });
                localStorage.setItem("cartItems", JSON.stringify([]));
                navigate('/');
            }
        }
        else {
            alert("Please login to checkout your cart!")
        }
    }

    return (
        <div style={{margin:"20px 5px"}}>
            <h2 style={{ fontSize: '40px' }}>My Cart</h2>
            <div class="container">
                <div class="row">
                    <div class="col-8">
                            <table class="table table-image">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item Details</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => {                                          
                                        return <tr>
                                            <th scope="row">{index +1 }</th>
                                            <td className="w-25">
                                                <h1>{item.name}</h1>
                                                <h1>Price : {item.quantity} * ${item.item_price} = ${item.total_price}</h1>
                                                <h1 style={{ display: 'inline' }}>Quantity : </h1>
                                                <i className="ri-add-box-fill" aria-hidden="true" onClick={() => { dispatch(addToCart({...item, uuid: item.itemUuid}, item.quantity + 1)) }}></i>
                                                <b>{item.quantity}</b>
                                                <i className="ri-checkbox-indeterminate-fill" aria-hidden="true" onClick={() => { dispatch(addToCart({...item, uuid: item.itemUuid}, item.quantity - 1)) }}></i>
                                                <hr />
                                            </td>
                                            <td className='"w-25"'>
                                                <img src={item.image} style={{ height: '80px', width: '80px' }} />
                                            </td>
                                            <td><i class="ri-delete-bin-line mt-5" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i></td>
                                        </tr>                                        
                                    })}
                                </tbody>
                            </table>
                        {cartItems.length === 0 &&
                        <div>
                            <h2>Add items to cart</h2>
                        </div>
                        }
                    </div>
                    <div className='col-md-4 text-right'>
                        <h2 style={{ fontSize: '45px' }}>Sub Total : ${subtotal}</h2>
                        <button className='btn btn-danger' onClick={postCart}>Check Out</button>

                    </div>
                </div>
            </div>            
        </div>
    )
}
