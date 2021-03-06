import React,{Component} from 'react';
import Axios from 'axios';

class EventWorkRegistrationModal extends Component{
  constructor(props){
    super(props)

    this.state ={

    }
  }

  componentDidMount(){

    }

    render(){
      if(!this.props.show){
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

      const buttonStyle = {
        cursor: 'pointer'
      };

      return(
        <div className="backdrop" style={backdropStyle}>
          <div className="modal-dialog modal-lg" style={modalStyle}>
            <div className="modal-content">
              <div className="container-fluid">
                <div className="modal-header">
                  <div>
                    <h3 className="modal-title"> Eventmedarbetare </h3>
                  </div>
                  <div>
                    <button type="button" className="close" aria-label="Close" style={buttonStyle} onClick={this.props.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <div className="modal-body">

                </div>

                <div className="modal-footer">

                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }

  }

  export default EventWorkRegistrationModal;
