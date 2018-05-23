import React,{Component} from 'react';
import Axios from 'axios';



class AdminEventToolsModal extends Component{
  constructor(props){
    super(props)

    this.state ={

    }
  }

  componentDidUpdate(){

  }

  render(){
    if(!this.props.show){
      return null;
    }

    const event = this.props.event

    const date = this.getStartEndFormatted(event);

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
      padding: '0 auto',
    };

    return(
      <div className="backdrop" style={backdropStyle}>
        <div className="modal-dialog modal-dialog-centered" >
          <div className="modal-content">
            <div className="container-fluid">
              <div className="modal-header" >
                  <h3 className="modal-title">Administrera Event</h3>
                  <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center mb-3">
                  <div className="col-12">
                    <button className="btn btn-primary w-auto mb-2" onClick={this.props.onParticipant}>Deltagare</button>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-auto mb-2" onClick={this.props.onEventWork}>Eventmedarbetare</button>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-auto mb-2" onClick={this.props.onEdit}>Uppdatera Event</button>
                  </div>

                </div>
                <div className="row">
                  <div className="col-sm">
                    <h3>{event.eventTitle}</h3>
                    <div className="card bg-light mb-3 mt-3">
                      <div className="card-body">

                        <div className="Description mb-3 mt-3">
                          <h5>Beskrivning</h5>
                          {event.eventDescription}
                        </div>
                        <div className="Date mb-3 mt-3">
                          <h5>Datum</h5>
                          {date}
                        </div>
                        <div className="Location mb-3 mt-3">
                          <h5>Adress</h5>
                          {event.eventAdressStreet}
                          ,&nbsp;
                          {event.eventAdressCity}
                        </div>
                        <div className="Contact mb-3 mt-3">
                          <h5>Kontaktinformation</h5>
                          {event.eventContactEmail}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>



            <div className="modal-footer">
            </div>

          </div>
        </div>
      </div>

    )
  }

  getStartEndFormatted(event) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    const dateStart = new Date(Date.parse(event.eventStart));
    const dateEnd = new Date(Date.parse(event.eventEnd));

    var eventStart = dateStart.getDate() + ' ' + months[dateStart.getMonth()];
    var eventEnd = dateEnd.getDate() + ' ' + months[dateEnd.getMonth()];

    if(eventStart === eventEnd) {
      eventEnd = dateEnd.getHours() + ':' + ('0' + dateEnd.getMinutes()).slice(-2);
    }else{
      eventEnd += ' ' + dateEnd.getHours() + ':' + ('0' + dateEnd.getMinutes()).slice(-2);
    }
    eventStart += ' ' + dateStart.getHours() + ':' + ('0' + dateStart.getMinutes()).slice(-2);

    return eventStart + ' - ' + eventEnd;
  }

}

export default AdminEventToolsModal;
