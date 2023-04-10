import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMenu } from "../actions/menuAction";
// import products from "../productsdata";
import Menu from "../components/Menu";
export default function Homepage() {


  const dispatch = useDispatch()

  const menustate = useSelector((state) => state.getAllMenuReducer);
  console.log(menustate)
  const { items, error, loading } = menustate;
  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div>
      {/* <div className="category">
                <h1></h1>
            </div> */}

      <div className=" justify-content-center container py-3">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Something Went Wrong</h1>
          ) : (

            items.map((menu) => {
              return (
                <div className="col" style={{ padding: "10px" }} key={menu._id}>
                  <div>
                    <Menu menu={menu} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <footer className="text-center text-white" style={{"backgroundColor": "#f1f1f1"}}>
        <div className="pt-4">
          <section style={{"padding":"0px"}}>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
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
          </section>

        </div>


        <div className="text-center text-dark p-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)"}}>
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">Foods.com</a>
        </div>

      </footer>


    </div>
  );
}
