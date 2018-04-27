import React,{Component} from 'react';
import PropTypes from 'prop-types';

class LoginModal extends Component{
  constructor(props){
    super(props)

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

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal-dialog" >
          <div className="modal-content">
            <button onClick={this.props.onClose}>
              Close
            </button>
            <form>
              Username:  <input type="text"></input>
              Password:  <input type="password"></input>
            </form>
            <button>Login</button>
          </div>
        </div>

      </div>

    );
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};





export default LoginModal;
