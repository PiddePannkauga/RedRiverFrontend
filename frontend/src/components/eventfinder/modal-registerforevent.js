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
                Förnamn:  <input type="text"></input>
                Efternamn:  <input type="text"></input>
                Epost:  <input type="text"></input>
                Adress:  <input type="text"></input>
                Personnummer:  <input type="text"></input>
                Telefonnummer:  <input type="text"></input>
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
    )
  }

}

export default RegisterForEventModal;
