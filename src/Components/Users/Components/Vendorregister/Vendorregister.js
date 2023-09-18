import React from "react";
export default function Vendorregister()
{
    return(
        <>
       <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px;"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" for="firstName">First Name</label>
                    <input type="text" id="firstName" className="form-control form-control-lg" placeholder="Enter first name" />
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" for="lastName">Last Name</label>
                    <input type="text" id="lastName" className="form-control form-control-lg" placeholder="Enter last name" />
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                  <label className="form-label" for="Company-name">Company Name</label>
                    <input type="text" id="company-name" className="form-control form-control-lg" placeholder="Enter company name" />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" for="business-type">Business Type</label>
                    <input type="text" id="business-type" className="form-control form-control-lg" placeholder="Type your business" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" for="PAN-number">PAN Number</label>
                    <input type="number" id="PAN-number" className="form-control form-control-lg" placeholder="Enter PAN Number" />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" for="GST-number">GST Number</label>
                    <input type="number" id="GST-number" className="form-control form-control-lg" placeholder="Enter GST Number" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" for="aadhaar-number">Aadhaar No. </label>
                    <input type="number" id="aadhaar-number" className="form-control form-control-lg" placeholder="Enter Aadhaar number" />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  <label className="form-label" for="address">address</label>
                    <input type="text" id="address" className="form-control form-control-lg" placeholder="Enter your address" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                  <label className="form-label" for="emailAddress">Email</label>
                    <input type="email" id="emailAddress" className="form-control form-control-lg"placeholder="Enter email" />
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                  <label className="form-label" for="phoneNumber">Phone Number</label>
                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder="Enter phone number" />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}