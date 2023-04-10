import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMenu } from "../actions/menuAction";
// import products from "../productsdata";
import Menu from "../components/Menu";
import "./home.css";
import "./hero-section.css";
export default function Homepage() {


  const dispatch = useDispatch()

  const menustate = useSelector((state) => state.getAllMenuReducer);

  const { items, error, loading } = menustate;
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-md-6">
            <div className="hero__content  ">
              <h5 className="mb-3">Easy way to make an order</h5>
              <h1 className="mb-4 hero__title">
                <span>HUNGRY?</span> Just wait <br /> food at
                <span> your door</span>
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                magni delectus tenetur autem, sint veritatis!
              </p>

              <div className="hero__btns d-flex align-items-center gap-5 mt-4">

                <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/cart" style={{ textDecoration:"none", color:"#fff"}}>Order Now 
                  <i class="ri-arrow-right-s-line"></i></Link>
                </button>

                <button className="all__foods-btn">
                  <Link to="/food">See all foods</Link>
                </button>
              </div>

              <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-car-line"></i>
                  </span>{" "}
                  No shipping charge
                </p>

                <p className=" d-flex align-items-center gap-2 ">
                  <span className="shipping__icon">
                    <i class="ri-shield-check-line"></i>
                  </span>{" "}
                  100% secure checkout
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-6 col-md-6">
            <div className="hero__img">
              <img src={`${process.env.PUBLIC_URL}/assets/images/hero.png`} alt="hero-img" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
