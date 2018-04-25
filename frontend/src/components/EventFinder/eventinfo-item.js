import React,{Component} from 'react';
import '../styles/eventinfo.css';


class EventInfoItem extends Component{

  render(){

    return(
      <div>
        <div className="EventInfoItem">
          <div className="Name">
            {this.props.events.name}
          </div>
          <div className="Date">
            {this.props.events.datum}
          </div>
          <div className="Description">
            {this.props.events.beskrivning}
          </div>
        </div>
      </div>
    )
  }
}

export default EventInfoItem;
