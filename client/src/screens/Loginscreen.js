import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from "../actions/userActions"
import { useNavigate } from "react-router-dom"
import "./login.css";
export default function Loginscreen() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('currenuUser')) {
      window.location.href = '/'
    }
  }, [])

  async function login(e) {
    e.preventDefault();
    const user = { email, password }
    const resp = await dispatch(loginUser(user))
    console.log("resp",resp)
    if (resp.status === 200) {
      window.location.href = '/'
    }
  }

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Please Signin</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form className="row g-4">
                      <div className="col-12">
                        <label>Username<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="ri-user-smile-line"></i></div>
                          <input type="email" className="form-control" placeholder="Enter email-adress" 
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }} required
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <label>Password<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="ri-lock-password-fill"></i></div>
                          <input required type="password" className="form-control" placeholder="Enter Password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                          />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        {/* <a href="#" className="float-end text-primary">Forgot Password?</a>                         */}
                      </div>

                      <div className="col-sm-6">
                        <a href="/register" className="float-end text-primary">Register?</a>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="btn btn-primary px-4 float-end mt-4" onClick={login}>login</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 ps-0 d-none d-md-block">
                  <div className="form-right h-100 bg-primary text-white text-center pt-5">
                    <i className="bi bi-bootstrap"></i>
                    <h2 className="fs-1">Welcome Back!!!</h2>
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
