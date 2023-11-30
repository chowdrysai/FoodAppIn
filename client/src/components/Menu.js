import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
export default function Menu({ menu }) {
    const options = ['1','2','3','4','5','6','7','8','9','10'];
    const [quantity, setquantity] = useState(options[0]);
    // const[varient ,setVarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submit = (e) => {
        setquantity(e.target.value);
    };
    const dispatch = useDispatch();
    function addtocart() {
        dispatch(addToCart(menu, quantity));
    }

    return (
        <div className="card shadow-sm" >
            <img
                src={menu.image}
                className="img-fluid"
                style={{ height: '400px' }}
                alt=""
            />

            <div className="card-body" onClick={handleShow} >
                <p className="card-text">{menu.name}</p>
                <p className="card-text">${menu.price * quantity} For one</p>        
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button onClick={addtocart} type="button" className="w-100 btn btn-lg btn-success">Add To Cart</button>
                    </div>
                    <small className="text-muted">
                        <span>Quantity </span>
                        <select value={quantity} 
                            onChange={submit}>
                            {/* {[...Array(10).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>
              })} */}
                            {options.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                            ))}
                        </select></small>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>{menu.name} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img
                        src={menu.image}
                        className="img-fluid"
                        style={{ height: '250px', width: '350px' }}
                    />
                    <p>{menu.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>
            Close
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    

    );
}
