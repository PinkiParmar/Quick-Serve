import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
export default function Contact(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        
           <div id="main" className="main">

<div className="pagetitle">
  <h1>Contact</h1>
  {/* <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
      <li className="breadcrumb-item">Pages</li>
      <li className="breadcrumb-item active">Contact</li>
    </ol>
  </nav> */}
</div>
<Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Alert</Modal.Title>
      </Modal.Header>
      <Modal.Body>Your message is successfully send.We will contact you with in 24 Hours.Stay connected.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" ><Link to="/users" style={{color:"black"}}> 
          Ok</Link>
        </Button>
      </Modal.Footer>
    </Modal>
<section className="section contact">

  <div className="row gy-4">

    <div className="col-xl-6">

      <div className="row">
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <p>Indore,<br></br>India</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+199999999<br></br>+1 123456789</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>info@Quickserve.com<br></br>contact@Quickserv.com</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="info-box card">
            <i className="bi bi-clock"></i>
            <h3>Open Hours</h3>
            <p>Monday - Friday<br></br>9:00AM - 05:00PM</p>
          </div>
        </div>
      </div>

    </div>

    <div className="col-xl-6">
      <div className="card p-4">
        <form action="forms/contact.php" method="post" className="php-email-form">
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
            </div>

            <div className="col-md-6 ">
              <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
            </div>

            <div className="col-md-12">
              <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit"onClick={handleShow}>Send Message</button>
            </div>

          </div>
        </form>
      </div>

    </div>

  </div>

</section>


        </div>
    )
}