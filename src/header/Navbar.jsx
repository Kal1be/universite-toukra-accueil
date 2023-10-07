import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function Navbar() {
  return (
    <div>
        <Header/>
     <nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border bg-white" id='navbar'>
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-3'><img src="../img1/im6.png" alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src="../img1/drapeau1.png" alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recherche</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#" >
          Facultes
        </a>
      </li>
      <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">A Propos  <fontawesomeicon icon="{faChevronDown}" classname="ms-5" /></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facultes  <fontawesomeicon icon="{faChevronDown}/">
            </fontawesomeicon></a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>



{/* ****************fixes la position si le scroll est a 150px******************* */}



<nav className="navbar navbar-expand-lg px-lg-2 px-sm-0 shadow border " id="nav">
  <div className="container-fluid">
  <h2 className='navbar-brand fs-lg-1 fs-3'><img src="../img1/im6.png" alt="" /> <strong>Universite de <strong className='text-primary'>Toukra</strong> </strong><span className="divider"><img src="../img1/drapeau1.png" alt="the problem is there" /></span></h2>

    {/* the bouton navbar icon toggle */}
    
    <button class="navbar-toggler shadow-none" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
  <div className="bar1" />
  <div className="bar2" />
  <div className="bar3" />
    </button>
    {/* end the bouton toggle */}

  <div className="collapse navbar-collapse justify-content-end d-lg-none" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recherche</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#" >
          Facultes
        </a>
      </li>
      <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
    </ul>
  </div>

  {/* l'affichage du navbar sur le small screen */}
  <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Bienvenue !</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body scroll-auto">
      <ul className="  navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="#">A Propos  <fontawesomeicon icon="{faChevronDown}" classname="ms-5" /></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Facultes  <fontawesomeicon icon="{faChevronDown}/">
            </fontawesomeicon></a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Instituts&amp;Centres  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" href="#">Nouvelles  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Biblioteques  <fontawesomeicon icon="{faChevronDown}/" /></a>
        </li>
      </ul>
    </div>
  </div>
</div>

    {/* fin de l'affichage sur le small screen */}

</nav>

    </div>
  )
}

export default Navbar
