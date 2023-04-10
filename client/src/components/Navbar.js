import React, { useState } from "react";
import axios from 'axios';
import { domain } from './../config';
import { useSelector } from "react-redux";
import { defaultOptions } from './../utils/helpers'
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    window.location.href = '/'
  }

  async function deleteUser(id) {
    try {
      if (id) {
        const headers = defaultOptions(currentUser.token);
        const resp = await axios.delete(`${domain}/auth/delete`, headers)
        if (resp.status === 200) {
          logoutHandler();
        }
      }
    } catch (err) {
      alert("Failed to Delete! Please try again after some time.")
    }
  }

  return (
    <div>
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB6CAMAAABDcmfrAAAAZlBMVEX///8AAADa2tpbW1udnZ00NDSTk5PGxsb5+fn8/Py6urr19fVPT09ISEjh4eHw8PDNzc3p6ekMDAyIiIgZGRlnZ2coKCg6Ojqvr6+CgoJvb29BQUHAwMDT09Ojo6MSEhIhISF4eHid2OjUAAAE10lEQVRoge1a2YKqMAx1AdlkE1HQAfX/f/LqiGPSpLTFlvvieRTaY2ianKRdLBwgqA5LgEubuGARETWI9RfnGZhXKaG9o3fOW+w53uXaNW/O8y5T18Q3ntc5cSThdU4cSIkjt8SejLh2y7tYy4hXjokltH7gmDcDZH38hyB0zLtogJG5azKIdj5vQoiOb+JqTuIcLLFrd0KA4aOck3jz5j3OkvpfqN/Epzl58+ubeDMnMQwf3ZzEIHwsLU6b9Gd/HFB8jL+5/tHnLVkNNxmtNvHJKu9yqWtzpp7KDLqxfGWb+Pq/iPdf4i+xK+KzJnFyVM9lBO30JS1OpuGqr3iLs0Xek4kyCsuVLcwqyL744guI09oKtrEpcasOSVowbojEdnh3xgWdpdxo3iyQ9u3MMKGgS/IsaKrTh0VFYU48ICy7vp6uDD5sPiWdl16m8OqKnjFkzQR1YKkflG3UVBiNHeI7YjNns9nyK6RdWwYWee8ItBfbdj8o7K9q0gfsLfELpV7TwKQfFA1QvaeVRLQYV7FX1an/GuOnp8qLM/n7pTqcqY5jkqCvpYMPbSNjV35ub4Q0KjxfNX552BTsp5eewwyQtpOT4kYPQ3n4G05KjC/0VVK9lJVklfZ8PlgH1OxRZj5DdLIVOv5kWcwfV25pp6xhX3yC6+h10rjn/2bQXPJ0S3bmSN6gfzORO/HLIaSW3MTULg/dxCuESc/IwYZ3Svhbu4GzC0pZKs7OgksI5t7u+nO1HSM+PXJbBxzuhieUNS4EgVlu0dPnJPnbvzvxqwx3DeD0a5xmJQuHM0SJU9olE3meh7/hO/0M4SeECiBFO1QiwfESC66QhuTLbldhUoBo9vJNZNcZ2cyajA8cxSD3OjIaaVG/Llfgv7yGnlNw49ASJ+TxILhHduPgnOLk0MMiToihGoLuzsOvyaMdtfrB3JFYBsNDxQxDoYZZjH1TFNw4gGvrMVECdkY7ZhRaYt1cpAWwXUr6FDnBQlOj6QHoi4TqTlxDbJnx0wG8iy4FzhAqyWAGUOxT58HBjVmLDzBm8WGBYVx1jQBEiIRsZCICbDVz7jaBeE2/JK0hYjs98MMNLiLdx4wkDove+xRNhwUkjUCU1wXo6Ynz23NPUJHr/r7gAyGNxJIuU5QVwRjYYdHwsCP1AROWuIonb9a+qnXE9eP+gtPVb7G6pkn1yIyPtTIUrfNw4YHOkiLiW8wf143WYgC4Cc99uFHJbqI1BKuONJhFXlx0i7NeaPhQ18J/gAUDF2iBVaJU9Amv0X2Ht82sNAIxIhfsuRHiHxPiP5slKU1OTM8hOFGmZJb4Iyi783oLkTLNA0PR9ahZe8kzGBVDDMo7WsBzKKQjDoanHKbXeKSSxfiCoEK8a2I34awh+1z9pBObo2EW95up8Jpi1guvXyDEFVyMar57EEIk5rq9q3S3+9ip79jtK6BucPdlz1hMWxHTAYqUEqmaI+P1ZtlJgfe0ODttmVht8/bQRUbMHRnbvKkF0mKJkh532GRzjYHMwPawF08tdl9AvMb6gj0CsVeY78CmwTmbvQdh73YrdCHUAZEUitY6AsCuyJc8gKDdimmAigstsTRVZ1auIKL2GRA1xxFlkn9+e3qHhHO4X+6eqBUXqbO+nr6tLmkrTB+pD2D/AbrpR5qigd4GAAAAAElFTkSuQmCC" />
            </a>
            <span></span>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" class="nav-link px-2 link-secondary"></a></li>
              <li><a href="/cart" class="nav-link px-2 link-dark">Cart {cartstate.cartItems && cartstate.cartItems.length > 0 ? <span className="numberCircle">{cartstate.cartItems.length}</span> : ''}</a></li>
              <li><a href="/food" class="nav-link px-2 link-dark">Food</a></li>
              <li><a href="/faq" class="nav-link px-2 link-dark">FAQ</a></li>

            </ul>
            <div class="dropdown text-end">
              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="mdo" width="32" height="32" class="rounded-circle" />
              </a>
              <ul class="dropdown-menu text-small">
                {!currentUser && <li><a class="dropdown-item" href="/login"> Login</a></li>}
                {!currentUser && <li><a class="dropdown-item" href="/register"> Register</a></li>}
                {currentUser && <li><a class="dropdown-item" href="/profile"> {currentUser.name}</a></li>}
                {currentUser && <li><a class="dropdown-item" href="/orders">Orders</a></li>}
                {currentUser && <li><hr class="dropdown-divider" /></li>}
                {currentUser && <li><a class="dropdown-item" href="#/" onClick={logoutHandler}>Sign out</a></li>}
                {currentUser && <li><a class="dropdown-item" href="#/" onClick={() => deleteUser(`${currentUser.id}`)}>Delete Account</a></li>}
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Food Application
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {currentUser && <li className="nav-item">
              <a className="nav-link" href="/adminOrders">
                Orders history
              </a>
            </li>} 
            {currentUser ? (
              <div class="dropdown">
                <p
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </p>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Orders Histor</a>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/cart">
                Cart {cartstate.cartItems && cartstate.cartItems.length > 0 ? cartstate.cartItems.length : ''}
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}
