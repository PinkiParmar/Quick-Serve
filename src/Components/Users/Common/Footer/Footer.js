import React from "react";


export default function Footer()
{
    
        return(
            <>
<div className="container-fluid bg-secondary text-dark mt-5 pt-5">
  <div className="row px-xl-5 pt-5">
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
          <a href="" className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border border-white px-3 mr-1">Quick</span>Serve</h1>
          </a>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>Indore, India</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+919999999999</p>
      </div>
      <div className="col-lg-8 col-md-12">
          <div className="row">
              
              <div className="col-md-4 mb-5">
                  <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                  <div className="d-flex flex-column justify-content-start">
                      <a className="text-dark mb-2" href="/users"><i className="fa fa-angle-right mr-2"></i>Home</a>
                      <a className="text-dark mb-2" href="/cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                      <a className="text-dark mb-2" href="/check-out"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                      <a className="text-dark" href="/contact-users"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                  </div>
              </div>
              <div className="col-md-4 mb-5">
                  <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                  <form action="">
                      <div className="form-group">
                          <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                      </div>
                      <div className="form-group">
                          <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                              required="required" />
                      </div>
                      <div>
                          <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
  <div className="row border-top border-light mx-xl-5 py-4">
      <div className="col-md-6 px-xl-0">
          <p className="mb-md-0 text-center text-md-left text-dark">
              &copy; <a className="text-dark font-weight-semi-bold" href="#">Quick Serve</a>. All Rights Reserved. Designed
              by
             
          </p>
      </div>
      <div className="col-md-6 px-xl-0 text-center text-md-right">
          <img className="img-fluid" src="img/payments.png" alt=""/>
      </div>
  </div>
</div>


<a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>

            </>
        )
    }
