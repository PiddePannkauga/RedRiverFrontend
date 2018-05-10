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
      padding: 50,
      overflowY: 'auto'
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      margin: '0 auto',
      padding: '0 auto'
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
                <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <input type="text" className="form-control mt-3 mb-3" id="user" placeholder="Användarnamn"/>
                  <input type="password" className="form-control mt-3 mb-3" id="password" placeholder="Lösenord"/>
                </form>

                <div className="text-center"><button className="btn btn-primary" onClick={this.props.onRegister}> Logga in </button></div>
              </div>
              <div className="modal-footer">
                <p>Not a member? <a href="#">Sign Up</a></p>
                <p>Forgot <a href="#">Password?</a></p>
              </div>
            </div>
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
