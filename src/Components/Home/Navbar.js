import React from 'react';
import img from "../../Assest/img/Insta.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
         <Link to="/" className="navbar-brand" href="/"> <img   className="img-fluid" style={{width:'103px', height:'29px'}} src={img} alt="logo" /> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form className="d-flex ms-auto mt-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-right mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
              <Link to="/" className="navbar-brand" href="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="navbar-brand" href="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link to="/" className="navbar-brand" href="/">Home</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Navbar;