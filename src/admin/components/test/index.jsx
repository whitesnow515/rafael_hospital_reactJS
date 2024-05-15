import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Test extends Component{
    render(){
        return(
        <>        
      
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title"> 
                            <span>Main</span>
                        </li>
                        <li className="active"> 
                            <Link to="/admin"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/appointment-list"><i className="fe fe-layout"></i> <span>Appointments</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/specialities"><i className="fe fe-users"></i> <span>Specialities</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/doctor-list"><i className="fe fe-user-plus"></i> <span>Doctors</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/patient-list"><i className="fe fe-user"></i> <span>Patients</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/reviews"><i className="fe fe-star-o"></i> <span>Reviews</span></Link>
                        </li>
                        <li> 
                            <Link to="/transactions-list"><i className="fe fe-activity"></i> <span>Transactions</span></Link>
                        </li>
                        <li> 
                            <Link to="/admin/settings"><i className="fe fe-vector"></i> <span>Settings</span></Link>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-document"></i> <span> Reports</span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/admin/invoicerepot">Invoice Reports</Link></li>
                            </ul>
                        </li>
                        <li className="menu-title"> 
                            <span>Pages</span>
                        </li>
                        <li> 
                            <Link to="/admin/profile"><i className="fe fe-user-plus"></i> <span>Profile</span></Link>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-document"></i> <span> Authentication </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/admin/login"> Login </Link></li>
                                <li><Link to="/admin/register"> Register </Link></li>
                                <li><Link to="/admin/forgotPassword"> Forgot Password </Link></li>
                                <li><Link to="/admin/lockscreen"> Lock Screen </Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-warning"></i> <span> Error Pages </span> <span className="menu-arrow"></span></a>
                            <ul>
                                <li><Link to="/admin/404">404 Error </Link></li>
                                <li><Link to="/admin/500">500 Error </Link></li>
                            </ul>
                        </li>
                        <li> 
                            <Link to="/admin/blank-page"><i className="fe fe-file"></i> <span>Blank Page</span></Link>
                        </li>
                        <li className="menu-title"> 
                            <span>UI Interface</span>
                        </li>
                        <li> 
                            <Link to="/admin/components"><i className="fe fe-vector"></i> <span>Components</span></Link>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-layout"></i> <span> Forms </span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li><Link to="/admin/basic-input">Basic Inputs </Link></li>
                                <li><Link to="/admin/form-input-group">Input Groups </Link></li>
                                <li><Link to="/admin/form-horizontal">Horizontal Form </Link></li>
                                <li><Link to="/admin/form-vertical"> Vertical Form </Link></li>
                                <li><Link to="/admin/form-mask"> Form Mask </Link></li>
                                <li><Link to="/admin/form-validation"> Form Validation </Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#"><i className="fe fe-table"></i> <span> Tables </span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li><Link to="/admin/tables-basic">Basic Tables </Link></li>
                                <li><Link to="/admin/data-tables">Data Table </Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="#0"><i className="fe fe-code"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                            <ul >
                                <li className="submenu">
                                    <a href="#0"> <span>Level 1</span> <span className="menu-arrow"></span></a>
                                    <ul >
                                        <li><a href="#0"><span>Level 2</span></a></li>
                                        <li className="submenu">
                                            <a href="#0"> <span> Level 2</span> <span className="menu-arrow"></span></a>
                                            <ul >
                                                <li><a href="#0">Level 3</a></li>
                                                <li><a href="#0">Level 3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#0"> <span>Level 2</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#0"> <span>Level 1</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
       
    </>

        );
    }
}

export default Test;
		
