import React from 'react';
import { Link } from 'react-router-dom';
export default function AddServices()
{
    return (

<main id="main" className="main">
   <section className="section">
    <div className="row">
      <div className="col-lg-12">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add Services : </h5>

            <form>
                 <div className="row" >
                  <select>
                    <option>Select Category </option>
                  </select>
                </div>
                 <br/><br/>
               
                <br/><br/>
              <div className="row mb-3">
                <label for="inputText" className="col-sm-2 col-form-label">Enter Service Name</label>
                <div className="col-sm-10">
                  <input type="text" placeholder="Enter Service Name " className="form-control"/>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Submit Service</button>
                </div>
              </div>
            </form>{/* End General Form Elements */}
            
          </div>
        </div>

      </div>

      
    </div>
  </section>
  <div>
  <table className="table table-bordered table-hover table-striped">
                   <tr>
                      <th>S.No</th>
                      <th>Service Id</th>
                      <th>Service Name</th>
                      <th>Operation</th> 
                   </tr>
      <tbody>
        <tr>
                     <th>1</th>
                      <th>123456789123</th>
                      <th>Electrician</th>
                      <th><button className="btn btn-success btn-floating mx-1" >Edit</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-primary btn-floating mx-1" >Delete</button> 
</th> 
        </tr>
        <tr>
        
                    <th>2</th>
                      <th>C23456876543</th>
                      <th>Plumber</th>
                      <th><button className="btn btn-success btn-floating mx-1" >Edit</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-primary btn-floating mx-1" >Delete</button> 
</th> 
        </tr>
        <tr>
        
                    <th>3</th>
                      <th>098765234562</th>
                      <th>Carpenter</th>
                      <th><button className="btn btn-success btn-floating mx-1" >Edit</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-primary btn-floating mx-1" >Delete</button> 
</th> 
        </tr>
        <tr>
        
                    <th>4</th>
                      <th>2345678098765</th>
                      <th>House Cleaner</th>
                      <th><button className="btn btn-success btn-floating mx-1" >Edit</button> &nbsp; ||  &nbsp;
                          <button className="btn btn-primary btn-floating mx-1" >Delete</button> 
</th> 
        </tr>
      </tbody>
    </table>
  </div>

</main>
    )
}