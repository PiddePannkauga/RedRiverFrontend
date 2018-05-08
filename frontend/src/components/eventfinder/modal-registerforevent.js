import React,{Component} from 'react';

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
      'overflow-y': 'auto'
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      margin: 'auto',
      padding: 'auto'
    };

    return(
      <div className="backdrop" style={backdropStyle}>
        <div className="modal-dialog modal-lg" style={modalStyle}>
          <div className="container-fluid">
            <div className="modal-content">

                <div className="row mt-2">
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
                    <label htmlFor="email"> Epost </label>
                    <input type="email" className="form-control" id="email" placeholder="Ange din E-post"></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="address"> Adress </label>
                    <input type="address" className="form-control" id="address" placeholder="Ange din Adress"/>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="personnr"> Personnummer </label>
                        <input type="text" className="form-control" id="personnr" placeholder="Ange ditt personnummer"></input>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="phone"> Telefonnummer </label>
                        <input type="tel" className="form-control" id="phone" placeholder="Ange ditt telefonnummer"></input>
                      </div>
                    </div>
                  </div>

                  <h5> Allergier/Specialkost </h5>
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
                    <label htmlFor="personnr"> Övriga allergier/kost </label>
                    <input type="text" className="form-control" id="otherAllergies"></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"> Övrig information </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{resize: 'none'}}></textarea>
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
