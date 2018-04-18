import React,{Component} from 'react';
import '../styles/eventinfo.css';

class EventInfoItem extends Component{

  render(){

    return(
      <div className="EventInfoItem-Container">
        <div className="Name">
         {this.props.name}
        </div>
      <div className="Date">
        {this.props.date}
      </div>
      <div className="Description">
        {this.props.description}
      </div>
      </div>
    )
  }
}

export default EventInfoItem;
