//Modal som innehåller eventInfo och verktyg för event. Verktyg innehåller (
// Lista över deltagare, ansökningar och uppdatera eventInfo.
import React,{Component} from 'react';
import Axios from 'axios';



class AdminEventToolsModal extends Component{
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

      return(
        <div className="backdrop" style={backdropStyle}>
          <div className="modal-dialog modal-lg" style={modalStyle}>
            <div className="modal-content">
              <div className="container-fluid">
                <div className="modal-header">
                  <div>
                    <h2 className="modal-title"> Eventadmininstrations Panel </h2>
                  </div>
                  <div>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="row">
                  <div className="col-sm"></div>
                  <div className="col-sm">
                  <ul>
                    <li>
                      <button className="btn btn-primary" onClick={this.props.onParticipant}>Deltagare</button>
                    </li>
                    <li>
                      <button className="btn btn-primary" onClick={this.props.onEventWork}>Eventmedarbetare</button>
                    </li>
                    <li>
                      <button className="btn btn-primary" onClick={this.props.onEdit}>Uppdatera Event</button>
                    </li>
                  </ul>
                  </div>
                </div>

                </div>

                <div className="modal-footer">
                  <button className="btn btn-primary" type="submit" onClick={this.sendRegistration}> </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }

  }

  export default AdminEventToolsModal;
