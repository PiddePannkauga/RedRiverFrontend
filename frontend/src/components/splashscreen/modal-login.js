import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

class LoginModal extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: 'linda.rosing@gmail.com',
      password: 'Leinigen',
      token: ''
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
            <button onClick={()=>this.login().then(res=>this.setState({toke: res}))}>Login</button>
          </div>
        </div>
      </div>
    );
  }

  login(){

    return Axios.post('http://ellakk.zapto.org:5050/api/User/login',
    {
      email: this.state.userName,
      password: this.state.password
    }).then(function (response) {

      return response.data.token
    }).catch(function (error) {
      console.log(error);
    });
  }
}



LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};





export default LoginModal;
