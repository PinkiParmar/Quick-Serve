import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
export default function Register()
{
    const [data, setData] = useState({
      name:"",
      email:"",
      mobile:"",
      address:"",
      city:"",
      state:"",
      password:"",
      cpassword:""
    });
    
  function submit(e){
    e.preventDefault(e);
    const payload = data;
    console.log(payload)
    axios.post("http://apps.codebetter.in:8082/quickserve/user/save", payload, {
      headers: {
      "Content-type": "application/json",
      },
      })
      .then((res) => {
        console.log(res);
        if (res.status===200){
          alert(res.data.msg);
        } else {
          alert("Error in API request or network")
        }
      })
      .catch((err)=> {
        alert("Error in API request or network")
        console.log(err);
      });

    
  };
  const handle=(e)=>{
    const newdata={...data};
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
    return(
        <>
        <center>
        <h1>Register Here</h1>
        </center>
        <form method="post" onSubmit={(e)=>submit(e)}>
       <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>

              <div className="row">
                <div className="col-md-12 mb-4">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className="form-control form-control-lg" placeholder="Enter first name"  onChange={(e)=>handle(e)} value={data.name} />
                  </div>

                </div>
                
              </div>

              
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control form-control-lg"placeholder="Enter email" onChange={(e)=>handle(e)} value={data.email} />
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="mobile">Mobile</label>
                    <input type="number" id="mobile" name="mobile" className="form-control form-control-lg" placeholder="Mobile number" onChange={(e)=>handle(e)} value={data.mobile} />
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" className="form-control form-control-lg"placeholder="address" onChange={(e)=>handle(e)} value={data.address} />
                  </div>

                </div>
                
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="city">City</label>
                    <input type="text" id="city" name="city" className="form-control form-control-lg"placeholder="city" onChange={(e)=>handle(e)} value={data.city} />
                  </div>                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="state">State</label>
                    <input type="text" id="state" name="state" className="form-control form-control-lg" placeholder="state" onChange={(e)=>handle(e)} value={data.state} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password"  name="password" className="form-control form-control-lg"placeholder="Enter email" onChange={(e)=>handle(e)} value={data.password}/>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                  <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                    <input type="password" id="cpassword" name="cpassword" className="form-control form-control-lg" placeholder="confirm password" onChange={(e)=>handle(e)} value={data.cpassword} />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <button className="btn btn-primary btn-lg" type="submit" style={{color:"black"}}>Register</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary btn-lg" type="button"><Link style={{color:"black"}} to ="/">Login</Link></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
        </>
    )
}