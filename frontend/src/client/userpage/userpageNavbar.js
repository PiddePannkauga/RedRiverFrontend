import React from 'react';
import Logo from '../../components/logo';


const UserPageNavbar = (props) =>{
  return(
    <nav className="navbar navbar-expand navbar-light bg-light">

      <Logo />

      <div className="navbar" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link"  onClick={props.onClick} id="myEvents">Mina Event</a>
          <a className="nav-link" onClick={props.onClick} id="applyEvent">Ansök till Event</a>
          <a className="nav-link" onClick={props.onClick} id="settings">Inställningar</a>
          <a className="nav-link" onClick={props.onClick} id="profile">Profil</a>
        </div>
      </div>
    </nav>

  )
}

export default UserPageNavbar;
