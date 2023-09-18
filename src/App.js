import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./Comman/Footer/Footer";
import Menu from "./Comman/Menu/Menu";
import Sidebar from "./Comman/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import AddServices from "./Components/AddServices/AddServices";
import AddCategory from "./Components/AddCategory/AddCategory";
import Profile from "./Components/Profile/Profile";
import MainLayout from "./Comman/Layout/MainLayout";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import HomeMain from "./Components/Users/Components/Home/HomeMain";
import HomeUsers from "./Components/Users/Components/Home/Home";
import MainLayoutUsers from "./Components/Users/Common/Layout/MainLayout";
import Register from "./Components/Users/Components/Register/Register";
//import Vendorregister from "./Components/Users/Components/VendorRegister/Vendorregister";
import Logout from "./Components/Users/Components/Logout/Logout";
import Cart from "./Components/Users/Components/Cart/Cart";
import Electrician from "./Components/Users/Components/Electrician/Electrician";
import Plumber from "./Components/Users/Components/Plumber/Plumber";
import Carpenter from "./Components/Users/Components/Carpenter/Carpenter";
import Housecleaner from "./Components/Users/Components/Housecleaner/Housecleaner";
import Checkout from "./Components/Users/Components/Checkout/Checkout";
import Contactusers from "./Components/Users/Components/Contact/Contact";
import Viewhistory from "./Components/Users/Components/Viewhistory/Viewhistory";
import UserProfile from "./Components/Users/Components/UserProfile/UserProfile";

export default function App()
{
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<MainLayout Mainpage={<Home/>}/>}/>
    <Route path="/add-services" element={<MainLayout Mainpage={<AddServices/>}/>}/>
    <Route path="/add-category" element={<MainLayout Mainpage={<AddCategory/>}/>}/>
    <Route path="/admin-profile" element={<MainLayout Mainpage={<Profile/>}/>}/>    
    <Route path="/contact" element={<MainLayout Mainpage={<Contact/>}/>}/>    
    <Route path="/" element={<Login/>}/>    
    <Route path="/logout" element={<Logout/>}/>

    <Route path="/users" element={<MainLayoutUsers MainPage={<HomeUsers/>} SecondoryPage={<HomeMain/>}/>}/>
    <Route path="/users/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<MainLayoutUsers MainPage={<Profile/>} />}/>
    <Route path="/cart" element={<MainLayoutUsers MainPage={<Cart/>} />}/>
    <Route path="/electrician" element={<MainLayoutUsers MainPage={<Electrician/>} />}/>
    <Route path="/plumber" element={<MainLayoutUsers MainPage={<Plumber/>} />}/>
    <Route path="/carpenter" element={<MainLayoutUsers MainPage={<Carpenter/>} />}/>
    <Route path="/house-cleaner" element={<MainLayoutUsers MainPage={<Housecleaner/>} />}/>
    <Route path="/check-out" element={<MainLayoutUsers MainPage={<Checkout/>} />}/>
    <Route path="/contact-users" element={<MainLayoutUsers MainPage={<Contact/>} />}/>
    <Route path="/view-history" element={<MainLayoutUsers MainPage={<Viewhistory/>} />}/>
    <Route path="/users/login" element={<MainLayoutUsers MainPage={<HomeUsers/>} SecondoryPage={<HomeMain/>}/>}/>
    <Route path="/users/login" element={<MainLayoutUsers MainPage={<HomeUsers/>} SecondoryPage={<HomeMain/>}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
