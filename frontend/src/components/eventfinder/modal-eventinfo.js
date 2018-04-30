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
    if(!this.props.show) {
      return null;
    }
    console.log(this.props.events)

    return(
    <div className="backdrop" style={backdropStyle}>
      <div className="modal-dialog" >
        <div className="modal-content">
          <button onClick={this.props.onClose}>
            Close
          </button>
          <div className="Name">
            {this.props.events.name}

          </div>
          <div className="Date">
            {this.props.events.date}
          </div>
          <div className="Description">
            {this.props.events.description}
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
