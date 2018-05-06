import React,{Component} from 'react';



class EventInfoModal extends Component{
  constructor(props){
    super(props)
  }

  render(){

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

    if(!this.props.show) {
      return null;
    }

    return(

      <div className="backdrop" style={backdropStyle}>

          <div className="modal-dialog" style={modalStyle}>
            <div className="modal-content">
              <button className="btn btn-success"onClick={this.props.onClose}>
                Close
              </button>
              <div className="Name">
                {this.props.events.eventTitle}
              </div>
              <div className="Date">
                {this.props.events.eventStart}

                {this.props.events.eventStop}
              </div>
              <div className="Description">
                {this.props.events.eventDescription}
              </div>
              <button  onClick={this.props.onRegister}>
                Anmäla
              </button>
            </div>

          </div>
        </div>
    )
  }

}

export default EventInfoModal;
