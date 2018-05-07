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
      padding: 50
    };
    const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
  };

    return(
      <div className="backdrop" style={backdropStyle}>
        <div className="container-fluid">
        <div className="modal-dialog" style={modalStyle}>
          <div className="modal-content">

            <h1>Anmäl Dig</h1>
            <button onClick={this.props.onClose}>
              Close
            </button>
            <button onClick={this.props.onBack}>
              Back
            </button>
            <div>
              <form>
                <div className="form-group">
                  <label htmlFor="firstname">Förnamn</label>
                  <input type="text" className="form-control" id="firstname" placeholder="Ange ditt förnamn" name="firstname"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Efternamn</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Ange ditt efternamn" name="lastname"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Epost</label>
                  <input type="email" className="form-control" id="email" placeholder="Ange din E-post" name="email"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Adress</label>
                  <input type="address" className="form-control" id="address" placeholder="Ange din Adress" name="address"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="personnr">Personnummer</label>
                  <input type="text" className="form-control" id="personnr" placeholder="Ange ditt personnummer" name="personnr"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefonnummer</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Ange ditt telefonnummer" name="phone"></input>
                </div>
              </form>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="specialKostCheck"></input>
              <label className="form-check-label" htmlFor="specialKostCheck">Vegetarisk</label>
              <input type="checkbox" className="form-check-input" id="specialKostCheck"></input>
              <label className="form-check-label" htmlFor="specialKostCheck">Gluten</label>
              <input type="checkbox" className="form-check-input" id="specialKostCheck"></input>
              <label className="form-check-label" htmlFor="specialKostCheck">Laktos</label>
              <input type="checkbox" className="form-check-input" id="specialKostCheck"></input>
              <label className="form-check-label" htmlFor="specialKostCheck">Skaldjur</label>

              Övrigt:<input type="text"></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Övrig information</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button onClick={this.props.onClose}>Skicka in</button>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

export default RegisterForEventModal;
