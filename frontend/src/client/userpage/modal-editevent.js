import React,{Component} from 'react';
import Axios from 'axios';



class EditEventModal extends Component{
  constructor(props){
    super(props)

    this.state ={
      updatedEvent: '',
      eventTitle: '',
      eventDescription: '',
      eventStart: '',
      eventEnd: '',
      eventContactPhone: '',
      eventContactEmail: '',
      eventAdressCity: '',
      eventAdressStreet: '',
      eventAdressPostal: '',
    }
  }


  render(){
    if(!this.props.show){
      return null;
    }

    const eventStart = new Date(Date.parse(this.props.event.eventStart))
    const eventEnd = new Date(Date.parse(this.props.event.eventEnd))

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
                  <h2 className="modal-title"> Uppdatera Event </h2>
                </div>
                <div>
                  <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventTitle"> Titel </label>
                        <input type="text" className="form-control" id="eventTitle" value={this.state.eventTitle} onChange={this.handleTextChange} placeholder={this.props.event.eventTitle}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventStart"> Event Start datum och tid </label>
                        <input type="text" className="form-control" id="eventStart"value={this.state.eventStart} onChange={this.handleTextChange} placeholder={eventStart.toLocaleString()}></input>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventEnd"> Event Slut datum och tid </label>
                      <input type="address" className="form-control" id="eventEnd" value={this.state.street} onChange={this.handleTextChange}placeholder={eventEnd.toLocaleString()}/>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactPhone">Telefonnummer </label>
                        <input type="text" className="form-control" id="eventContactPhone" value={this.state.eventContactPhone} onChange={this.handleTextChange} placeholder={this.props.event.eventContactPhone}/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactEmail"> Email </label>
                        <input type="email" className="form-control" id="eventContactEmail"  value={this.state.eventContactEmail} onChange={this.handleTextChange}placeholder={this.props.event.eventContactEmail}></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressCity"> Stad </label>
                        <input type="text" className="form-control" id="eventAdressCity" value={this.state.eventAdressCity} onChange={this.handleTextChange} placeholder={this.props.event.eventAdressCity}/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressStreet"> Adress </label>
                        <input type="text" className="form-control" id="eventAdressStreet"value={this.state.eventAdressStreet} onChange={this.handleTextChange} placeholder={this.props.event.eventAdressStreet}></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressPostal"> Postnummer </label>
                        <input type="number" className="form-control" id="eventAdressPostal"value={this.state.eventAdressPostal} onChange={this.handleTextChange} placeholder={this.props.event.eventAdressPostal}></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription"><h5 className="mt-2"> Event Beskrivning </h5></label>
                    <textarea className="form-control" id="eventDescription" value={this.state.eventDescription} onChange={this.handleTextChange} placeholder={this.props.event.eventDescription} rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" type="submit" onClick={this.sendRegistration}> Uppdatera </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  sendRegistration = () =>{

    //Kolla states ifall de har ändrats. Skicka med ändringen som json object
    const updatedEvent = this.checkUpdatedEventFields()

    Axios({
      method: 'put',
      url: 'http://ellakk.zapto.org:5050/api/Admin/events/'+this.props.event.eventId,
      params:{userToken: sessionStorage.getItem("userToken")},
      data: JSON.parse(updatedEvent)
    });

    this.props.onClose()

  }


  checkUpdatedEventFields(){
    const eventUpdateCheck = [
    'eventTitle',
    'eventDescription',
    'eventStart',
    'eventEnd',
    'eventContactPhone',
    'eventContactEmail',
    'eventAdressCity',
    'eventAdressStreet',
    'eventAdressPostal']

    let updatedEventJSON = '{';

    eventUpdateCheck.forEach(eventString =>{
      if(this.state[eventString]){
        if(updatedEventJSON.length>1){
          updatedEventJSON += ' ,'
        }
        updatedEventJSON += '"'+eventString+'"'+': '+ '"'+this.state[eventString]+'"'

      }
    })
    updatedEventJSON += '}';

    return updatedEventJSON;
  }

  handleTextChange=(event) => {
    const name = event.target.id;
    const value = event.target.value;

    this.setState({
      [name]:value
    });

  }

}

export default EditEventModal;
