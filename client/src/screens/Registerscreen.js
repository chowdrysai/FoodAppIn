import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from "../actions/userActions"
import { useNavigate } from "react-router-dom"

export default function Registerscreen() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch()
  async function register(e) {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Passwords didn't match")
    }
    else {
      const user = {
        name,
        email,
        password,
        role:"user"
        
      }
      const resp = await dispatch(registerUser(user));
      if(resp.status === 200){
        navigate('/login');
      }
    }
  }


  return (
    <div class="login-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h3 class="mb-3">Please Register</h3>
            <div class="bg-white shadow rounded">
              <div class="row">
                <div class="col-md-7 pe-0">
                  <div class="form-left h-100 py-5 px-5">
                    <form class="row g-4">
                      
                      <div class="col-12">
                        <label>Name<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <div class="input-group-text"><i class="ri-user-smile-line"></i></div>
                          <input type="text" class="form-control" placeholder="Enter email-adress" 
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <label>Email address<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <div class="input-group-text"><i class="ri-user-smile-line"></i></div>
                          <input type="text" class="form-control" placeholder="Enter email-adress"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <label>Password<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <div class="input-group-text"><i class="ri-lock-password-fill"></i></div>
                          <input type="password" class="form-control" placeholder="Enter Password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                          />
                        </div>
                      </div>  
                      <div class="col-12">
                        <label>Confirm Password<span class="text-danger">*</span></label>
                        <div class="input-group">
                          <div class="input-group-text"><i class="ri-lock-password-fill"></i></div>
                          <input type="password" class="form-control" placeholder="Enter Password"
                            value={cpassword}
                            onChange={(e) => { setcpassword(e.target.value) }}
                          />
                        </div>
                      </div>                 

                      <div class="col-12">
                        <button type="buttton" class="btn btn-primary px-4 float-end mt-4" onClick={register} >Register</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 ps-0 d-none d-md-block">
                  <div class="form-right h-100 bg-primary text-white text-center pt-5">
                    <i class="bi bi-bootstrap"></i>
                    <h2 class="fs-1">Sign up for Offers!!!</h2>
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
