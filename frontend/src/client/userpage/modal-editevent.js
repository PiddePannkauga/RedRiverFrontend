import React,{Component} from 'react';
import Axios from 'axios';



class EditEventModal extends Component{
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
      eventAdressPostal: ''
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
                  <button type="button" className="close" aria-label="Back" onClick={this.props.onBack}>
                    <span aria-hidden="true">&lt;</span>
                  </button>
                </div>
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

    Axios({
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
    });

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

export default EditEventModal;
