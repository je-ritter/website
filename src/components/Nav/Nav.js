import './Nav.css';
import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav nav-justified">
      <div className="container">
        <a className="navbar-brand" href="./index.html"><div className="fancyj">Jake Ritter</div></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="./index.html" className="nav-link  active">Home</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link {{about_link_active}}" href="./about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link {{blog_link_active}}" href="./blog.html"></a>
            </li>
          </ul>
        </div>  
      </div>
    </nav>
  );
}

export default Nav;
