import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, updateOrderStatus } from "../actions/orderActions";
import axios from 'axios';
import { domain } from './../config';
import { format } from "date-fns";
import { defaultOptions } from "../utils/helpers";
import "./home.css"

const AdminOrderScreen = (props) => {    
  const dispatch = useDispatch()
  const userstate = useSelector((state) => state.loginUserReducer);
  const [orders, setOrders] = useState('');
  const currentUser = userstate.currentUser;
  console.log(currentUser)

  useEffect(() => {
    async function fetchMyAPI() {
      
      const headers = defaultOptions(currentUser.token);
      console.log(headers)
      const response = await axios.get(`${domain}/orders/inProgress`, headers)
      if (response.status=200) {        
        setOrders(response.data.orders);
      }
    }
    fetchMyAPI();    
  }, [])
  
  async function updateOrderHandler(id) {
    if (id) {
      const uuid=[]
      uuid.push(id)
      const resp = await dispatch(updateOrderStatus({ uuid, status: 'delivered' }));
      if(resp.status === 200) window.location.href = '/orders';
    }
  }
  async function allStatus(){
    const uuid=[]
    orders.map(order => (
      uuid.push(order)
    ))
    console.log(uuid)
    const resp = await dispatch(updateOrderStatus({ uuid, status: 'delivered' }));
      if(resp.status === 200) window.location.href = '/orders' 
  }

  if (!Array.isArray(orders)) {
    return <>Loading</>
  } else {   
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Items</th>
                  <th scope="col">Address</th>
                  {currentUser.role==="admin"  && <th scope="col">Action</th>}
                  { orders.length !==0 && <th>
                  <input 
                        type="checkbox" 
                        name="interest" value="box"
                        onClick={allStatus} />
                  <label for="box">select all</label></th>
                  }   
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 && <tr><td colSpan={3}> No Orders found</td></tr>}
                
                {orders.length >0 && orders.map((order, index) => (
                  (order.status==="inProgress") && (
                  <tr key={order._id}>
                    <th scope="row">{index +1}</th>
                    <td className="w-25">{order.name}</td>
                    <td>
                      Price: {order.total_price} <br/>
                      Status: {order.status} <br />
                      Date: {format(new Date(order.createdAt), "dd/MMMM/yyyy HH:mm:ss")} <br />
                    </td>
                    {(currentUser.role==="admin" && order.status === "inProgress" ) && 
                      <td>
                        <button type="button" onClick={() => updateOrderHandler(`${ order.uuid }`)}>Delivered</button>
                      </td>}
                  </tr>)
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  
  
};

export default AdminOrderScreen;