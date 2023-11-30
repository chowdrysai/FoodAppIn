import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

export default function Registerscreen() {
    const navigate = useNavigate();

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const dispatch = useDispatch();
    async function register(e) {
        e.preventDefault();
        if (password !== cpassword) {
            alert('Passwords didn\'t match');
        }
        else {
            const user = {
                name,
                email,
                password,
                role:'user'
        
            };
            const resp = await dispatch(registerUser(user));
            if(resp.status === 200){
                navigate('/login');
            }
        }
    }


    return (
        <div className="login-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <h3 className="mb-3">Please Register</h3>
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-7 pe-0">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form className="row g-4">
                      
                                            <div className="col-12">
                                                <label>Name<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="ri-user-smile-line"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter email-adress" 
                                                        value={name}
                                                        onChange={(e) => { setname(e.target.value); }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label>Email address<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="ri-user-smile-line"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter email-adress"
                                                        value={email}
                                                        onChange={(e) => { setemail(e.target.value); }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label>Password<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="ri-lock-password-fill"></i></div>
                                                    <input type="password" className="form-control" placeholder="Enter Password"
                                                        value={password}
                                                        onChange={(e) => { setpassword(e.target.value); }}
                                                    />
                                                </div>
                                            </div>  
                                            <div className="col-12">
                                                <label>Confirm Password<span className="text-danger">*</span></label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="ri-lock-password-fill"></i></div>
                                                    <input type="password" className="form-control" placeholder="Enter Password"
                                                        value={cpassword}
                                                        onChange={(e) => { setcpassword(e.target.value); }}
                                                    />
                                                </div>
                                            </div>                 

                                            <div className="col-12">
                                                <button type="buttton" className="btn btn-primary px-4 float-end mt-4" onClick={register} >Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-5 ps-0 d-none d-md-block">
                                    <div className="form-right h-100 bg-primary text-white text-center pt-5">
                                        <i className="bi bi-bootstrap"></i>
                                        <h2 className="fs-1">Sign up for Offers!!!</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div> 
    
    );
}
