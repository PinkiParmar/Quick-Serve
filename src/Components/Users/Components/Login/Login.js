import React,{useState} from "react";
import './login.css';
export default function Login()
{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
       return(<>
         
        <div className="container col-lg-4 mt-5">
   
       <form >

       <div className="form-outline mb-4">
        
        <label htmlFor="email" className="form-label pull-left float-left" style={{float: "left"}}>Email</label>
        <input value={email}  className="form-control" onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youemain@gmail.com" id="email" name="email"/>
        </div>
        <div className="form-outline mb-4">
        <label htmlFor="password" className="form-label">Password</label>
        <input value={pass}  className="form-control" onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
        </div>
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label className="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div className="col">
           
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button className="btn btn-primary btn-floating mx-1">Log In</button>
       </form>
       </div>
       
       </>
        )
    }
    // import React, { useState } from "react";
    // import {Link} from "react-router-dom";
    // export default function Login(){
    
    // const [data, setData] = useState({
    //       email:"",
    //       password:"",
    // });
    
    //   const [emaillog, setEmaillog] = useState(" ");
    //   const [passwordlog, setPasswordlog] = useState(" ");
    //   const [flag, setFlag] = useState(false);
    //   const [home, setHome] = useState(true);
    
    //   var save = (event) => {
    //     event.preventDefault()
    //     let apass = "admin123";
    //     let admin = "admin@gmail.com";
    //     let upass="user123";
    //     let user="user@gmail.com";
       
    //     if (!emaillog || !passwordlog) {
    //       setFlag(true);
        
    //     } else if (passwordlog == apass || emaillog == admin) {
    //       setFlag(true);
    //       setHome(window.location.replace('/home'))
    //     }else if (passwordlog == upass || emaillog == user) {
    //       setFlag(true);
    //       setHome(window.location.replace('/users'))
    //     }
    //      else  {
    //       setFlag(true);
    //       alert("invalid username or password")
    //     }
    //   }
    //     return<>
    //       {home?(
    //         <div>
    //           <center>
    //           <h1 className="m-0 display-5 font-weight-semi-bold bg-img" ><span className="text-primary font-weight-bold border px-3 mr-1">Quick</span>Serve</h1>
    //           <h2 >One step solution for your all home Services</h2>
    //           </center>
    //              <main>
    //     <div className="container">
    
    //       <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
    //         <div className="container">
    //           <div className="row justify-content-center">
    //             <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
    //               <div className="card mb-3">
    //                 <div className="card-body">
    //                   <form className="row g-3 needs-validation" onSubmit={save} >
    //                     <div className="col-12">
    //                       <label htmlFor="email" className="form-label">Email</label>
    //                       <div className="input-group has-validation">
    //                         <span className="input-group-text" id="email">@</span>
    //                         <input o type="text" name="username" className="form-control" onChange={(event)=>setEmaillog(event.target.value)} id="yourUsername" required/>
    //                         <div className="invalid-feedback">Please enter your username.</div>
    //                       </div>
    //                     </div>
    //                     <div className="col-12">
    //                       <label htmlFor="Password" className="form-label">Password</label>
    //                       <input type="password" name="password" className="form-control" id="Password " onChange={(event)=>setPasswordlog(event.target.value)} required/>
    //                       <div className="invalid-feedback">Please enter your password!</div>
    //                     </div>
    
    //                     <div className="col-12">
    //                       <div className="form-check">
    //                         <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
    //                         <label className="form-check-label" for="rememberMe">Remember me</label>
    //                       </div>
    //                     </div>
    //                     <div className="col-12">
    //                       <button className="btn btn-primary w-100" type="submit">Login</button>&nbsp;&nbsp;
    
    //                       <button className="btn btn-primary w-100"  type="submit"><Link style={{color:"black"}}to="/register">Register</Link></button>
    //                     </div>
                        
    //                   </form>
    
    //                 </div>
    //               </div>
    
                 
    //             </div>
    //           </div>
    //         </div>
    
    //       </section>
    
    //     </div>
    //   </main>
    //         </div>
    //       ):(<Login/>)}
    //     </>
    // }
    
    