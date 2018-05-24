import React from 'react';
import Logo from '../../components/logo';


const UserPageNavbar = (props) =>{
  const buttonStyle = {
    cursor: 'pointer'
  };

  return(
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <a className="navbar-brand d-flex w-50 mr-auto"><Logo /></a>
        <ul className="navbar-nav w-100 justify-content-center">
          <li className="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="myEvents">Mina Event</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="applyEvent">Ansök till Event</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="profile">Profil</a>
            </li>
        </ul>
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
              <button type="button" style={buttonStyle} className="btn btn-primary mb-2" onClick={props.logout}>Logga Ut</button>
          </li>
        </ul>
    </nav>
  )
}

export default UserPageNavbar;
