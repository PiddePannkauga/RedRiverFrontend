import React,{Component} from 'react';
import DropdownGender from './dropdown-gender';

class RegisterForEventModal extends Component{
  constructor(props){
    super(props)
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

                    <button type="button" className="close" aria-label="Back" onClick={this.props.onBack}>
                      <span aria-hidden="true">&lt;</span>
                    </button>


                    <h2 className="modal-title"> Anmäl Dig </h2>


                    <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>


                </div>

              <div className="modal-body">
                <form>
                  <h5> Personliga uppgifter </h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="firstname"> Förnamn </label>
                        <input type="text" className="form-control" id="firstname" placeholder="Ange ditt förnamn"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="lastname"> Efternamn </label>
                        <input type="text" className="form-control" id="lastname" placeholder="Ange ditt efternamn"></input>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="street"> Adress </label>
                    <input type="address" className="form-control" id="street" placeholder="Exempelgatan 1"/>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="city"> Stad </label>
                        <input type="text" className="form-control" id="city" placeholder="Ange din stad"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="postal"> Postnummer </label>
                        <input type="number" className="form-control" id="postal" placeholder="123 45"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email"> Epost </label>
                        <input type="email" className="form-control" id="email" placeholder="Ange din E-post"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone"> Telefonnummer </label>
                        <input type="tel" className="form-control" id="phone" placeholder="Ange ditt telefonnummer"></input>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="personnr"> Personnummer </label>
                        <input type="number" className="form-control" id="personnr" placeholder="Ange ditt personnummer"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <DropdownGender />
                    </div>
                  </div>

                  <h5 className="mt-2"> Allergier/Specialkost </h5>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="vegetarian">
                      <input type="checkbox" className="form-check-input" id="vegetarian"></input> Vegetarisk
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="gluten">
                      <input type="checkbox" className="form-check-input" id="gluten"></input> Gluten
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="lactose">
                      <input type="checkbox" className="form-check-input" id="lactose"></input> Laktos
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="shellfish">
                      <input type="checkbox" className="form-check-input" id="shellfish"></input> Skaldjur
                    </label>
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" id="otherAllergies" placeholder="Övriga allergier/specialkost"></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="otherInfo"><h5 className="mt-2"> Övrig information </h5></label>
                    <textarea className="form-control" id="otherInfo" rows="3" style={{resize: 'none'}}></textarea>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button className="btn btn-primary" type="submit" onClick={this.props.onClose}> Skicka in </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default RegisterForEventModal;
