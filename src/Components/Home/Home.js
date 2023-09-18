import React from "react";
import {Link} from "react-router-dom"
export default function Home(){
    return(
        <div>
            <main id="main" className="main">

<div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
<section className="section dashboard">
  <div className="row">

   
    <div className="col-lg-12">
      <div className="row">

        
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card sales-card">

        

            <div className="card-body">
              <h5 className="card-title">Sales <span>| Today</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-cart"></i>
                </div>
                <div className="ps-3">
                  <h6>145</h6>
                  <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-xxl-4 col-md-6">
          <div className="card info-card revenue-card">

           

            <div className="card-body">
              <h5 className="card-title">Sales <span>| This Month</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-xxl-4 col-xl-6">

          <div className="card info-card customers-card">

            
            <div className="card-body">
              <h5 className="card-title">Customers <span>| This Year</span></h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-people"></i>
                </div>
                <div className="ps-3">
                  <h6>1244</h6>
                  <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-6">

<div className="card info-card customers-card">

  
  <div className="card-body">
    <h5 className="card-title">Services <span>| This Year</span></h5>

    <div className="d-flex align-items-center">
      <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
        <i className="bi bi-people"></i>
      </div>
      <div className="ps-3">
        <h6>1244</h6>
        <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
      </div>
    </div>
  </div>
</div>
</div>
        <div className="col-12">
          <div className="card">
          </div>
        </div>
        <div className="col-12">
          <div className="card recent-sales overflow-auto">
            <div className="card-body">
              <h5 className="card-title">Recent Services <span>| Today</span></h5>

              <table className="table table-borderless datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Services</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><Link to="#">#2457</Link></th>
                    <td>Brandon Jacob</td>
                    <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                    <td>$64</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2147</Link></th>
                    <td>Bridie Kessler</td>
                    <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                    <td>$47</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2049</Link></th>
                    <td>Ashleigh Langosh</td>
                    <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                    <td>$147</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2644</Link></th>
                    <td>Angus Grady</td>
                    <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                    <td>$67</td>
                    <td><span className="badge bg-danger">Rejected</span></td>
                  </tr>
                  <tr>
                    <th scope="row"><Link to="#">#2644</Link></th>
                    <td>Raheem Lehner</td>
                    <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                    <td>$165</td>
                    <td><span className="badge bg-success">Approved</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card top-selling overflow-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
        </div>
    )
}