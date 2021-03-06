import React,{Component} from 'react';
import Axios from 'axios';


class RegisterAccountModal extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      ssn: '',
      street: '',
      city: '',
      postal: '',
      mobilephone: 'naj',
      telephone: '',
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
                  <h2 className="modal-title"> Registrera Dig </h2>
                </div>
                <div>
                  <button type="button" className="close" style={buttonStyle} aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                <form>
                  <h5> Inloggningsuppgifter </h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email"> Epost </label>
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleTextChange} placeholder="Ange din E-post"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="password"> Lösenord </label>
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleTextChange} placeholder="Ange lösenord"></input>
                      </div>
                    </div>
                  </div>
                  <h5 className="mt-2"> Personliga uppgifter </h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="firstname"> Förnamn </label>
                        <input type="text" className="form-control" id="firstname" value={this.state.firstname} onChange={this.handleTextChange} placeholder="Ange ditt förnamn"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lastname"> Efternamn </label>
                        <input type="text" className="form-control" id="lastname"value={this.state.lastname} onChange={this.handleTextChange} placeholder="Ange ditt efternamn"></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="street"> Adress </label>
                    <input type="address" className="form-control" id="street" value={this.state.street} onChange={this.handleTextChange} placeholder="Exempelgatan 1"/>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="city"> Stad </label>
                        <input type="text" className="form-control" id="city" value={this.state.city} onChange={this.handleTextChange} placeholder="Ange din stad"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="postal"> Postnummer </label>
                        <input type="number" className="form-control" id="postal"  value={this.state.postal} onChange={this.handleTextChange} placeholder="123 45"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="personnr"> Personnummer </label>
                        <input type="number" className="form-control" id="ssn" value={this.state.ssn} onChange={this.handleTextChange} placeholder="Ange ditt personnummer"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="telephone"> Telefonnummer </label>
                        <input type="tel" className="form-control" id="telephone" value={this.state.telephone} onChange={this.handleTextChange} placeholder="Ange ditt telefonnummer"></input>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otherInfo"><h5 className="mt-2"> Övrig information </h5></label>
                    <textarea className="form-control" id="otherInfo" value={this.state.description} onChange={this.handleTextChange} rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" type="submit" style={buttonStyle} onClick={this.sendRegistration}> Skicka in </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  sendRegistration = () =>{

    Axios.post( 'http://ellakk.zapto.org:5050/api/User/register', {

      userEmail: this.state.email,
      userPassword: this.state.password,
      userNameFirst: this.state.firstname,
      userNameLast: this.state.lastname,
      userSsn: this.state.ssn,
      userAdressStreet: this.state.street,
      userAdressCity: this.state.city,
      userAdressPostal: this.state.postal,
      userMobilephone: this.state.mobilephone,
      userTelephone: this.state.telephone,
      userDescription: this.state.description

    }).then((res=>{
      console.log(res.status)
    }));

    this.props.onClose()
  }

  handleTextChange=(event) => {
    const name = event.target.id;
    const value = event.target.value;
    console.log(event.target.value)
    this.setState({
      [name]: value
    });

  }

}

export default RegisterAccountModal;
