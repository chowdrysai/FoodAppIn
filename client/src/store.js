import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllMenuReducer } from "./reducers/menuReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import { getAllOrdersReducer, getUserOrdersReducer } from './reducers/orderReducer'


const finalReducer = combineReducers({
  getAllMenuReducer: getAllMenuReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  getAllOrdersReducer,
  getUserOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
  cartReducer: {
    cartItems: cartItems
  },
  loginUserReducer: {
    currentUser: currentUser
  },
  getAllOrdersReducer:{
    items:[]
  },
  getUserOrdersReducer:{
    items:[],
    loading:true,
  }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
)
export default store
