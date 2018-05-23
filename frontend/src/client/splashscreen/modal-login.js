import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {Route, Redirect } from 'react-router-dom';



class LoginModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      password: '',
      token: '',
      isLoggedIn: false
    };

  }

  render(){
    if(!this.props.show) {
      return null;
    }

    if(this.state.isLoggedIn){
      return <Redirect to="/user"/>
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      overflowY: 'auto'
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      margin: '0 auto',
      padding: '0 auto'
    };

    const buttonStyle = {
      cursor: 'pointer'
    };

    return (
      <div className="backdrop" style={backdropStyle}>

        <div className="modal-dialog modal-md" style={modalStyle} >
          <div className="modal-content">
            <div className="container-fluid">
              <div className="modal-header">
                <h2 className="modal-title">
                  Logga in
                </h2>
                <button type="button" className="close" style={buttonStyle} aria-label="Close" onClick={this.props.onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                <input type="text" className="form-control mt-3 mb-3" id="user" placeholder="Användarnamn" onChange={(e)=>{this.setState({userName: e.target.value})}}/>
                  <input type="password" className="form-control mt-3 mb-3" id="password" placeholder="Lösenord" onChange={(e)=>{this.setState({password: e.target.value})}}/>
                </form>

                <div className="text-center"><button className="btn btn-primary" style={buttonStyle} onClick={()=>this.login().then(res=>this.setState({token: res})).then(this.redirect)}> Logga in </button></div>
              </div>
              <div className="modal-footer">
                <p>Ej medlem? <a href="">Registrera konto</a></p>
                <p>Glömt <a href="">Lösenord?</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  login(){

    return Axios.post('http://ellakk.zapto.org:5050/api/User/login',{
      userEmail: this.state.userName,
      userPassword: this.state.password
    })
    .then(function (response) {
      sessionStorage.setItem('userToken',response.data.userToken);
      return response.data.userToken
    }).catch(function (error) {
      console.log(error);
    });
  }
  redirect= () =>{
    const token = this.state.token
    if(token){
      this.setState({isLoggedIn:true})
    }
  }

}

export default LoginModal;
