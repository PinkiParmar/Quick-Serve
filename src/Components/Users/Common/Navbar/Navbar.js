import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
export default function Navbar(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(<>
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to log-off?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" >
          <Link to="/" style={{color:"black"}}>Log Out</Link>
        </Button>
      </Modal.Footer>
    </Modal>
        <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <Link to="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Quick</span>Serve</h1>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to="/users" className="nav-item nav-link active">Home</Link>
                            
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to="/cart" className="dropdown-item">Shopping Cart</Link>
                                    <Link to="/check-out" className="dropdown-item">Checkout</Link>
                                </div>
                            </div>
                            <Link to="/contact-users" className="nav-item nav-link">Contact</Link>
                        </div>
                        <div className="navbar-nav ml-auto py-0">
                            <Link  className="nav-item nav-link" onClick={handleShow}>Logout</Link>
                            <Link to="/profile" className="nav-item nav-link">Profile</Link>
                        </div>
                    </div> 
                </nav>
            </div>
        </div>
        </div>
    </>
    )
}