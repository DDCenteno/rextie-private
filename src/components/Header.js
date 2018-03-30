import React from 'react';



const Header = () => (

  <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <a className="navbar-brand" href="">
    <img src="images/logo.png"  className="d-inline-block align-top" alt=""/>
   
  </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
          
          <li className="nav-item">
            <a className="nav-link" href="">CUENTA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">SALIR</a>
          </li>
        </ul>

      </div>
    </nav>
  </header>

)

export default Header;
