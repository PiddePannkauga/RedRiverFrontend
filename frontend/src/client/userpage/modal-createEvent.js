import React,{Component} from 'react';
import Axios from 'axios';



class CreateEventModal extends Component{
  constructor(props){
    super(props)

    this.state ={
      eventTitle: '',
      eventDescription: '',
      eventStart: '',
      eventEnd: '',
      eventContactPhone: '',
      eventContactEmail: '',
      eventAdressCity: '',
      eventAdressStreet: '',
      eventAdressPostal: '',
      createdEventId: '',
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
                  {!this.state.createdEventId&&
                    <h2 className="modal-title"> Skapa Event </h2>}
                  {this.state.createdEventId&&
                    <h2 className="modal-title"> Lägg till roller </h2>}
                </div>
                <div>
                  <button type="button" className="close" aria-label="Close" style={buttonStyle} onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                {!this.state.createdEventId &&
                  <form>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="eventTitle"> Titel </label>
                        <input type="text" className="form-control" id="eventTitle" value={this.state.eventTitle} onChange={this.handleTextChange} placeholder="Ange event titel"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventStart"> Event Start datum och tid </label>
                        <input type="text" className="form-control" id="eventStart" value={this.state.eventStart} onChange={this.handleTextChange} placeholder="Ange ÅÅÅÅ-MM-DD 19:00"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventEnd"> Event Slut datum och tid </label>
                        <input type="text" className="form-control" id="eventEnd" value={this.state.street} onChange={this.handleTextChange} placeholder="Ange ÅÅÅÅ-MM-DD 19:00"></input>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactPhone">Telefonnummer </label>
                        <input type="text" className="form-control" id="eventContactPhone" value={this.state.eventContactPhone} onChange={this.handleTextChange} placeholder="Ange telefonnummer för kontaktperson"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventContactEmail"> Email </label>
                        <input type="email" className="form-control" id="eventContactEmail"  value={this.state.eventContactEmail} onChange={this.handleTextChange}placeholder="Ange Email för kontaktperson"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressCity"> Stad </label>
                        <input type="text" className="form-control" id="eventAdressCity" value={this.state.eventAdressCity} onChange={this.handleTextChange} placeholder="Ange stad"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressStreet"> Adress </label>
                        <input type="text" className="form-control" id="eventAdressStreet"value={this.state.eventAdressStreet} onChange={this.handleTextChange} placeholder="Ange gatuadress"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="eventAdressPostal"> Postnummer </label>
                        <input type="number" className="form-control" id="eventAdressPostal"value={this.state.eventAdressPostal} onChange={this.handleTextChange} placeholder="Ange postnummer"></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription"><h5 className="mt-2"> Event Beskrivning </h5></label>
                    <textarea className="form-control" id="eventDescription" value={this.state.eventDescription} onChange={this.handleTextChange} rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
              }

              {this.state.createdEventId &&
                <form>
                  <label className="mb-3">Lägg till så många roller som önskas, avsluta med kryss</label>
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
              }
              <div className="modal-footer">
                {!this.state.createdEventId &&
                  <button className="btn btn-primary" type="submit" style={buttonStyle} onClick={this.sendRegistration}> Skicka in </button>}
                  {this.state.createdEventId &&
                    <button className="btn btn-primary" type="submit" style={buttonStyle} onClick={this.addRole}> Lägg till roll </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }

  sendRegistration=()=>{

  const promise = Promise.resolve(Axios({
      method: 'post',
      url: 'http://ellakk.zapto.org:5050/api/Admin/events/create',
      params:{userToken: sessionStorage.getItem("userToken")},
      data: {
        eventTitle: this.state.eventTitle,
        eventDescription: this.state.eventDescription,
        eventStart: this.state.eventStart,
        eventEnd: this.state.eventEnd,
        eventContactPhone: this.state.eventContactPhone,
        eventContactEmail: this.state.eventContactEmail,
        eventAdressCity: this.state.eventAdressCity,
        eventAdressStreet: this.state.eventAdressStreet,
        eventAdressPostal: this.state.eventAdressPostal
      }
    }).then(res => {
      return res.data.eventId
    }))

    promise.then((value) =>{
      this.setState({createdEventId: value})
    })

  }

  addRole = () =>{
    Axios({
      method: 'post',
      url: 'http://ellakk.zapto.org:5050/api/Admin/events/'+this.state.createdEventId+'/roles',
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

  handleTextChange=(event) => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState({
      [name]: value
    });

  }

}

export default CreateEventModal;
