import React from 'react';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import "../../assets/css/style.css";
export default function MainLayout({Mainpage})
{
    return (<>
        <Menu/>
        <Sidebar/>
        {Mainpage}
        <Footer/>    
    </>
    )
}