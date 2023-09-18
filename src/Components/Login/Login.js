import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
export default function Login(){
  const [home, setHome] = useState(true);

  const [data, setData] = useState({
    email:"",
    password:"",
  });
  
function submit(e){
  e.preventDefault(e);
  const payload = data;
  console.log(payload)
  axios.post("http://apps.codebetter.in:8082/quickserve/user/login", payload, {
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
  // const [emaillog, setEmaillog] = useState(" ");
  // const [passwordlog, setPasswordlog] = useState(" ");
  // const [flag, setFlag] = useState(false);
  // const [home, setHome] = useState(true);

  // var save = (event) => {
  //   event.preventDefault()
  //   let apass = "admin123";
  //   let admin = "admin@gmail.com";
  //   let upass="user123";
  //   let user="user@gmail.com";
   
  //   if (!emaillog || !passwordlog){
  //     setFlag(true);
    
  //   } else if (passwordlog == apass || emaillog == admin) {
  //     setFlag(true);
  //     setHome(window.location.replace('/home'))
  //   }else if (passwordlog == upass || emaillog == user) {
  //     setFlag(true);
  //     setHome(window.location.replace('/users'))
  //   }
  //    else  {
  //     setFlag(true);
  //     alert("invalid username or password")
  //   }
  // }
    return<>
      {home?(
        <div>
          <center>
          <h1 className="m-0 display-5 font-weight-semi-bold bg-img" ><span className="text-primary font-weight-bold border px-3 mr-1">Quick</span>Serve</h1>
          <h2 >One step solution for your all home Services</h2>
          </center>
             <main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="card mb-3">
                <div className="card-body">
                  <form className="row g-3 needs-validation" method="post" onSubmit={(e)=>submit(e)} >
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="email">@</span>
                        <input o type="text" name="email" className="form-control" onChange={(e)=>handle(e)} value={data.email} required/>
                        <div className="invalid-feedback">Please enter your email</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="Password" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="Password " onChange={(e)=>handle(e)} value={data.password} required/>
                      <div className="invalid-feedback">Please enter your password!</div>
                    </div>

                    {/* <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>&nbsp;&nbsp;

                      <button className="btn btn-primary w-100"  type="submit"><Link style={{color:"black"}}to="/register">Register</Link></button>
                    </div>
                    
                  </form>

                </div>
              </div>

             
            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
        </div>
      ):(<Login/>)}
    </>
}

