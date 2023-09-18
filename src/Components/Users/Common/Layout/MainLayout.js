import React from 'react';
import Menu from '../Menu/Menu';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "../../../../css/style.css";
export default function MainLayoutUsers({MainPage, SecondoryPage})
{
    return (<>
       <Menu/>
       <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
        <Sidebar/>

</div>
<div className='col-lg-9'>
        <Navbar/>
        {MainPage}

</div>

<div className='col-lg-12'>
    {SecondoryPage}
</div>
</div>
</div>
        
        <Footer/>    
    </>
    )
}