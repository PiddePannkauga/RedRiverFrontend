import React,{Component} from 'react';

class EventInfoModal extends Component{
  constructor(props){
    super(props)

  }


  render(){
    if(!this.props.show) {
      return null;
    }

    const event = this.props.event

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,

    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      margin: '0 auto',
      padding: '0 auto',
    };

    const buttonStyle = {
      cursor: 'pointer'
    };

    return(
    <div className="backdrop" style={backdropStyle}>
      <div className="modal-dialog modal-lg" style={modalStyle}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">
              {event.eventTitle}
            </h2>
            <button type="button" className="close" style={buttonStyle} aria-label="Close" onClick={this.props.onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="Date">
              {event.eventStart}&nbsp;-&nbsp;
              {event.eventEnd}
            </div>
            <div className="Location">
              {event.eventAdressStreet}
              ,&nbsp;
              {event.eventAdressCity}
            </div>
            <div className="Contact">
              {event.eventContactEmail}
            </div>
            <div className="Description mt-3">
              <h5>Beskrivning</h5>
              {event.eventDescription}
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" style={buttonStyle} onClick={this.props.onRegister}> Anmäl </button>
          </div>
        </div>
      </div>
    </div>

    )
  }

  getMonth(event) {
    const months = ["Invalid", "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return months[parseInt(event.slice(5,7))];
  }
}

export default EventInfoModal;
