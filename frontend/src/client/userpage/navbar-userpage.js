import React from 'react';
import Logo from '../../components/logo';


const UserPageNavbar = (props) =>{
  const buttonStyle = {
    cursor: 'pointer'
  };

  return(
    <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <a href="/user" class="navbar-brand d-flex w-50 mr-auto"><Logo /></a>
        <ul class="navbar-nav w-100 justify-content-center">
          <li class="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="myEvents">Mina Event</a>
          </li>
          <li class="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="applyEvent">Ansök till Event</a>
          </li>
          <li class="nav-item">
              <a className="nav-link" style={buttonStyle} onClick={props.onClick} id="profile">Profil</a>
            </li>
        </ul>
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
          <li class="nav-item">
              <button type="button" style={buttonStyle} className="btn btn-primary mb-2" onClick={props.logout}>Logga Ut</button>
          </li>
        </ul>
    </nav>
  )
}

export default UserPageNavbar;
