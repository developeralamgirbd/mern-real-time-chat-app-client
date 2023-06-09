import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthProvider";
import {sessionRemove} from "../helpers/sessionHelper";
import {checkPermission} from "../helpers/checkPermission";

const Main = () => {
    const {auth} = useAuth();
    const logout = ()=>{
        sessionRemove();
    }
    return (
        <>
           <header>
               <nav className="navbar navbar-expand-lg bg-light">
                   <div className="container">
                       <Link className="navbar-brand" to="/">MERN AUTH</Link>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                               data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                               aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                       </button>
                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          </ul>

                           {/*<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               <li className="nav-item">
                                   <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                               </li>
                               <li className="nav-item">
                                   <Link className="nav-link active" aria-current="page" to="/category">Categories</Link>
                               </li>
                           </ul>*/}

                           {/*<ul className="navbar-nav">
                               <li className="nav-item">
                                   <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                               </li>

                               <li className="nav-item">
                                   <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                               </li>

                           </ul>*/}

                           <ul className="navbar-nav">
                           {
                               auth ? <>

                                   <li className="nav-item">
                                       <li className="nav-item">
                                           {
                                               checkPermission('can_create_user', auth?.permissions) ?
                                                <span className="nav-link" >{auth?.firstName.toUpperCase() + ' '+ auth?.lastName.toUpperCase()}</span> : ''
                                           }
                                       </li>
                                   </li>
                                   <li className="nav-item">
                                       <li className="nav-item">
                                           <a href='#' className="nav-link" onClick={logout}>Logout</a>
                                       </li>
                                   </li>


                               </> : <>
                                   <li className="nav-item">
                                       <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                   </li>

                                   <li className="nav-item">
                                       <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                                   </li>
                               </>
                           }
                           </ul>


                       </div>
                   </div>
               </nav>
           </header>
            {auth ? JSON.stringify(auth): ''}
            <div className="container">
                <Outlet/>
            </div>
        </>
    );
};

export default Main;