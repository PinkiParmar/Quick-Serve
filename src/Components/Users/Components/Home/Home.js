import React from "react";
import {Link} from "react-router-dom";
import Footer from "../../Common/Footer/Footer";
import Menu from "../../Common/Menu/Menu";
import Sidebar from "../../Common/Sidebar/Sidebar";
export default class HomeUsers extends React.Component
{
  render()
  {
      return (<>
             <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{height: "410px;"}}>
                            <img className="img-fluid" src="img/home1.jpg" alt="Image"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px;"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Home Services</h3>
                                    <a href="" className="btn btn-light py-2 px-3">Visit Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{height: "410px;"}}>
                            <img className="img-fluid" src="img/home2.jpg" alt="Image"/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{maxWidth: "700px;"}}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Service</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">Home Services</h3>
                                    <a href="" className="btn btn-light py-2 px-3">Visit Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{width: "45px", height:"45px"}}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{width: "45px", height: "45px;"}}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
        </>)
    }
}