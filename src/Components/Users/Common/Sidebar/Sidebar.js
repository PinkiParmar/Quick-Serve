import React from 'react';
import{Link} from "react-router-dom"
export default function Sidebar()
{
    return (<>
                <Link className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" to="#navbar-vertical" style={{height: '65px', marginTop: '-1px', padding:'0 30px;'}}>
                    <h3>Services</h3>
                    {/* <i className="fa fa-angle-down text-dark"></i> */}
                </Link>
                <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden" style={{height:'410px'}}>
                    <div class="nav-item dropdown">
                            <Link to="/electrician" className="nav-link" data-toggle="dropdown">Electrician <i class="fa fa-angle-down float-right mt-1"></i></Link>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <Link to="/electrician" target="" className="dropdown-item">Switch & Socket</Link>
                                <Link to="/electrician" className="dropdown-item">Fan</Link>
                                <Link to="/electrician" className="dropdown-item">Wiring</Link>
                                <Link to="/electrician" className="dropdown-item">Light</Link>
                                <Link to="/electrician" className="dropdown-item">MCB & fuse</Link>
                                <Link to="/electrician" className="dropdown-item">Decorative lights</Link>
                                <Link to="/electrician" className="dropdown-item">Invertor & Stabilizer</Link>
                                <Link to="/electrician" className="dropdown-item">Door bell</Link>

                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <Link to="/plumber" className="nav-link" data-toggle="dropdown">Plumber<i class="fa fa-angle-down float-right mt-1"></i></Link>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <Link to="/plumber" target="" className="dropdown-item">Tap repair</Link>
                                <Link to="/plumber" className="dropdown-item">Water tank installation</Link>
                                <Link to="/plumber" className="dropdown-item">Wash basin installation</Link>
                                <Link to="/plumber" className="dropdown-item">Motor installation </Link>
                                <Link to="/plumber" className="dropdown-item">Bath fitting</Link>
                                <Link to="/plumber" className="dropdown-item">Water pipe connections</Link>
                                <Link to="/plumber" className="dropdown-item">Drainage pipe fitting</Link>
                                <Link to="/plumber" className="dropdown-item">Toilet installation</Link>

                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <Link to="/carpenter" className="nav-link" data-toggle="dropdown">Carpenter<i class="fa fa-angle-down float-right mt-1"></i></Link>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <Link to="/carpenter" target="" className="dropdown-item">Bed</Link>
                                <Link to="/carpenter" className="dropdown-item">Door</Link>
                                <Link to="/carpenter" className="dropdown-item">TV</Link>
                                <Link to="/carpenter" className="dropdown-item">Window</Link>
                                <Link to="/carpenter" className="dropdown-item">Furniture repair</Link>
                                <Link to="/carpenter" className="dropdown-item">Drill & hang</Link>
                                <Link to="/carpenter" className="dropdown-item">Cupboard & drawer</Link>
                                <Link to="/carpenter" className="dropdown-item">Balcony</Link>

                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <Link to="/house-cleaner" className="nav-link" data-toggle="dropdown">House cleaner<i class="fa fa-angle-down float-right mt-1"></i></Link>
                            <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                <Link to="/house-cleaner" target="" className="dropdown-item">Kitchen cleaning</Link>
                                <Link to="/house-cleaner" className="dropdown-item">Bathroom cleaning</Link>
                                <Link to="/house-cleaner" className="dropdown-item">Full house cleaning</Link>
                                <Link to="/house-cleaner" className="dropdown-item">Sofa & carpet cleaning</Link>
                                

                            </div>
                        </div>

                        
                    </div>
                </nav>
</>

    )
}