import React,{Component} from 'react';

class EventInfoModal extends Component{
  constructor(props){
    super(props)

  }


  render(){

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      'overflow-y': 'auto'
    };

      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: '0 auto',
        padding: '0 auto'
      };

    if(!this.props.show) {
      return null;
    }


    return(
    <div className="backdrop" style={backdropStyle}>
      <div className="modal-dialog modal-lg" style={modalStyle}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">
              {this.props.event.eventTitle}
            </h2>
            <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="Date">
              {this.props.event.eventStart}
              &nbsp; - &nbsp;
              {this.props.event.eventEnd}
            </div>
            <div className="Location">
              {this.props.event.eventAdressStreet}
              , &nbsp;
              {this.props.event.eventAdressCity}
            </div>
            <div className="Contact">
              {this.props.event.eventContactEmail}
            </div>
            <div className="Description mt-3">
              <h5>Beskrivning</h5>
              {this.props.event.eventDescription}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={this.props.onRegister}> Anmäl </button>
          </div>
        </div>
      </div>
    </div>

    )
  }
}

export default EventInfoModal;
