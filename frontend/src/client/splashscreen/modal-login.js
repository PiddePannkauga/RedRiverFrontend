import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Route, Redirect } from 'react-router-dom';


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

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

    if(this.state.isLoggedIn){
      return <Redirect to="/user"/>
    }

    return (
      <div className="backdrop" style={backdropStyle}>

        <div className="modal-dialog" style={modalStyle} >
          <div className="modal-content">
            <button onClick={this.props.onClose}>
              Close
            </button>
            <form>
              Username:  <input type="text" onChange={(e)=>{this.setState({userName: e.target.value})}}></input>
              Password:  <input type="password" onChange={(e)=>this.setState({password: e.target.value})}></input>
            </form>
            <button onClick={()=>this.login().then(res=>this.setState({token: res})).then(this.redirect)}>Login</button>
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



// LoginModal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node
// };





export default LoginModal;
