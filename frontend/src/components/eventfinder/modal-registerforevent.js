import React,{Component} from 'react';
import Axios from 'axios';

class RegisterForEventModal extends Component{
  constructor(props){
    super(props)

    this.state ={
      firstname: '',
      lastname: '',
      gender: '',
      street: '',
      postal: '',
      ssn: '',
      city: '',
      email: '',
      phone: '',
      vegetarian: false,
      vegan: false,
      otherAllergies: '',
      otherInfo: ''
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
      'overflow-y': 'auto'
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
              <div className="row mt-3">
                <div className="col-sm-1">
                  <button type="button" className="close" aria-label="Back" onClick={this.props.onBack}>
                    <span aria-hidden="true">&lt;</span>
                  </button>
                </div>
                <div className="col-sm-10">
                  <h2 className="text-center"> Anmäl Dig </h2>
                </div>
                <div className="col-sm-1">
                  <button type="button" className="close mr-3" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>

              <div className="modal-body">
                <form>
                  <h5> Personliga uppgifter </h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="firstname"> Förnamn </label>
                        <input type="text" className="form-control" name="firstname" value={this.state.firstName} onChange={this.handleTextChange} placeholder="Ange ditt förnamn"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="street"> Adress </label>
                        <input type="address" className="form-control" name="street" onChange={this.handleTextChange} placeholder="Exempelgatan 1"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="postal"> Postnummer </label>
                        <input type="text" className="form-control" name="postal" placeholder="123 45"></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="personnr"> Personnummer </label>
                        <input type="ssn" className="form-control" name="ssn" placeholder="Ange ditt personnummer"></input>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary-outline dropdown-toggle" type="button" data-toggle="dropdown" onClick={{}}> Kön
                          <span className="caret"></span>
                        </button>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lastname"> Efternamn </label>
                        <input type="text" className="form-control" name="lastname" placeholder="Ange ditt efternamn"></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="city"> Stad </label>
                        <input type="address" className="form-control" name="city" placeholder="Ange din stad"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email"> Epost </label>
                        <input type="email" className="form-control" name="email" placeholder="Ange din E-post"></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone"> Telefonnummer </label>
                        <input type="tel" className="form-control" name="phone" placeholder="Ange ditt telefonnummer"></input>
                      </div>
                    </div>
                  </div>

                  <h5 className="mt-2"> Allergier/Specialkost </h5>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="vegetarian">
                      <input type="checkbox" className="form-check-input" name="vegetarian" onClick></input> Vegetarisk
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="vegan">
                      <input type="checkbox" className="form-check-input" name="vegan"></input> Vegan
                    </label>
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" name="otherAllergies" placeholder="Ange övriga allergier/specialkost"></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otherInfo"><h5 className="mt-2"> Övrig information </h5></label>
                    <textarea className="form-control" id="otherInfo" rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" type="submit" onClick={this.sendRegistration}> Skicka in </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  sendRegistration = () =>{

    Axios.post( 'http://ellakk.zapto.org:5050/api/Events/' + this.props.event.eventId + '/register',
    {

      participantNameFirst: this.state.firstname,
      participantNameLast: this.state.lastname,
      participantEmail: this.state.email,
      participantSsn: this.state.ssn,
      participantGender: this.state.gender,
      participantTelephone: this.state.phone,
      participantTextarea: this.state.otherInfo,
      participantVegan: this.state.vegan,
      participantVegetarian: this.state.vegetarian,
      participantTextareaAllergies: this.state.otherAllergies,
      participantAdressStreet: this.state.street,
      participantAdressCity: this.state.city,
      participantAdressPostal: this.state.postal


    }).then((res=>{
      console.log(res.status)
    }

  ));


  this.props.onClose()

}

handleTextChange=(event) => {
  const name = event.target.name;
  const value = event.target.value;

  this.setState({
    [name]: value
  });

}

}

export default RegisterForEventModal;
