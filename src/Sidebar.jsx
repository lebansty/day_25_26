import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" style={{height:'100%'}} id="accordionSidebar">

         
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

           
            <hr className="sidebar-divider my-0"/>

            
            <li className="nav-item active">
                <Link className="nav-link" to="/Portal/Dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            
            <hr className="sidebar-divider"/>

            <li className="nav-item active">
                <Link className="nav-link" to="/Portal/Users">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Users</span></Link>
            </li>

            <hr className="sidebar-divider"/>

            <li className="nav-item active">
                <Link className="nav-link" to="/Portal/Products">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Products</span></Link>
            </li>

            
    
            
            
                    

           
            

        </ul>
    </div>
  )
}

export default Sidebar