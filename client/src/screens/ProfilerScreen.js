import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { domain } from './../config';
import { useSelector } from 'react-redux';
import { defaultOptions } from '../utils/helpers';

const ProfilerScreen = (props) => {
    const [orders, setOrders] = useState('');
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;

    useEffect(() => {
        async function fetchMyAPI() {

            const headers = defaultOptions(currentUser.token);
            const response = await axios.get(`${domain}/orders/all`, headers);
            console.log(response);
            if (response.status === 200) {
                setOrders(response.data.orders);
            }
        }
        
        fetchMyAPI();
    }, []);



    async function deleteUser(id) {
        try {
            if (id) {
                const headers = defaultOptions(currentUser.token);
                const mail =currentUser.email;
                console.log(mail);
                if(headers){
                    const resp = await axios.delete(`${domain}/auth/delete`, mail);
                    if (resp.status === 200) {
                        logoutHandler();
                    }
                } 
            }
        } catch (err) {
            alert('Failed to Delete! Please try again after some time.');
        }
    }


    const logoutHandler = () => {
        // localStorage.removeItem("currentUser");
        // window.location.href = '/'
    };


    // const inProgressCount = orders.filter(item => item.status === 'in-progress');
    // const deliveredCount = orders.filter(item => item.status !== 'in-progress')
    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-4">
                        <div className="card" style={{ borderRadius: 15 }}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 100 }}
                                    />
                                </div>
                                <h4 className="mb-2">{currentUser.name}</h4>
                                <p className="text-muted mb-4">
                                    {currentUser.email}
                                </p>
                                <div className="mb-4 pb-2">
                                    <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                        href="https://www.facebook.com/"
                                        role="button"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fa fa-facebook-f"></i
                                        ></a>

                                    <a
                                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                                        href="https://twitter.com/i/flow/login"
                                        role="button"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fa fa-twitter"></i
                                        ></a>

                                    <a
                                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                                        href="https://www.instagram.com/?hl=en"
                                        role="button"
                                        data-mdb-ripple-color="dark"
                                    ><i className="fa fa-instagram"></i
                                        ></a>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-rounded btn-lg"
                                    onClick={() => deleteUser(`${currentUser.email}`)}
                                >
                                    Delete Account
                                </button>
                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <p className="mb-2 h5">{orders.length > 0 ? orders.filter(item => item.status === 'inProgress').length : 0}</p>
                                        <p className="text-muted mb-0">In-progress</p>
                                    </div>
                                    <div className="px-3">
                                        <p className="mb-2 h5">{orders.length > 0 ? orders.filter(item => item.status === 'delivered').length : 0}</p>
                                        <p className="text-muted mb-0">Delivered</p>
                                    </div>
                                    <div>
                                        <p className="mb-2 h5">{orders.length}</p>
                                        <p className="text-muted mb-0">Total Orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default ProfilerScreen;