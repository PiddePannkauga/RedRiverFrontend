import React,{Component} from 'react';
import Axios from 'axios';



class EditEventModal extends Component{
  constructor(props){
    super(props)
    const eventStart = new Date(Date.parse(props.event.eventStart))
    const eventEnd = new Date(Date.parse(props.event.eventEnd))
    this.state ={
      eventTitle: props.event.eventTitle,
      eventDescription: props.event.eventDescription,
      eventStart: eventStart.toLocaleString("sv-SE"),
      eventEnd: eventEnd.toLocaleString("sv-SE"),
      eventContactPhone: props.event.eventContactPhone,
      eventContactEmail: props.event.eventContactEmail,
      eventAdressCity: props.event.eventAdressCity,
      eventAdressStreet: props.event.eventAdressStreet,
      eventAdressPostal: props.event.eventAdressPostal,
      userRoleTitle: '',
      userRoleDescription: ''
    }
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
                        <input type="text" className="form-control" id="eventTitle" value={this.state.eventTitle} onChange={this.handleTextChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventStart"> Event Start datum och tid </label>
                        <input type="text" className="form-control" id="eventStart"value={this.state.eventStart} onChange={this.handleTextChange}></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventEnd"> Event Slut datum och tid </label>
                        <input type="address" className="form-control" id="eventEnd" value={this.state.eventEnd} onChange={this.handleTextChange}/>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactPhone">Telefonnummer </label>
                        <input type="text" className="form-control" id="eventContactPhone" value={this.state.eventContactPhone} onChange={this.handleTextChange} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactEmail"> Email </label>
                        <input type="email" className="form-control" id="eventContactEmail"  value={this.state.eventContactEmail} onChange={this.handleTextChange}></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressCity"> Stad </label>
                        <input type="text" className="form-control" id="eventAdressCity" value={this.state.eventAdressCity} onChange={this.handleTextChange} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressStreet"> Adress </label>
                        <input type="text" className="form-control" id="eventAdressStreet"value={this.state.eventAdressStreet} onChange={this.handleTextChange} ></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressPostal"> Postnummer </label>
                        <input type="number" className="form-control" id="eventAdressPostal"value={this.state.eventAdressPostal} onChange={this.handleTextChange} ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription"><h5 className="mt-2"> Event Beskrivning </h5></label>
                    <textarea className="form-control" id="eventDescription" value={this.state.eventDescription} onChange={this.handleTextChange} rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
                <form>
                  <h4 className="mb-3">Lägg till roll </h4>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="userRoleTitle"> Rolltitel </label>
                        <input type="text" className="form-control" id="userRoleTitle" value={this.state.userRoleTitle} onChange={this.handleTextChange} placeholder="Ange roll titel"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="userRoleDescription"> Rollbeskrivning </label>
                        <textarea type="text" className="form-control" id="userRoleDescription" value={this.state.userRoleDescription} onChange={this.handleTextChange} placeholder="Ange roll beskrivning"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={this.addRole}> Lägg till roll </button>
                <button className="btn btn-primary" type="submit" onClick={this.sendRegistration}> Uppdatera </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  sendRegistration = () =>{


    const updatedEvent = this.checkUpdatedEventFields()

    Axios({
      method: 'put',
      url: 'http://ellakk.zapto.org:5050/api/Admin/events/'+this.props.event.eventId,
      params:{userToken: sessionStorage.getItem("userToken")},
      data: JSON.parse(updatedEvent)
    });

    this.props.onClose()

  }

  addRole = () =>{
    Axios({
      method: 'post',
      url: 'http://ellakk.zapto.org:5050/api/Admin/events/'+this.props.event.eventId+'/roles',
      params:{userToken: sessionStorage.getItem("userToken")},
      data: {
        userRoleTitle: this.state.userRoleTitle,
        userRoleDescription: this.state.userRoleDescription
      }
    });
    this.setState({userRoleTitle: '',
                  userRoleDescription: ''
    })

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

      eventUpdateCheck.forEach(stateName =>{
        if(this.state[stateName]){
          if(updatedEventJSON.length>1){
            updatedEventJSON += ' ,'
          }
          updatedEventJSON += '"'+stateName+'"'+': '+ '"'+this.state[stateName]+'"'

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
