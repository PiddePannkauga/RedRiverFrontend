import React,{Component} from 'react';



class EventInfoItem extends Component{

  render(){

    return(
      <div>
        <div className="EventInfoItem">
          <div className="Name">
            {this.props.events.name}
          </div>
          <div className="Date">
            {this.props.events.date}
          </div>
          <div className="Description">
            {this.props.events.description}
          </div>
        </div>
      </div>
    )
  }
}

export default EventInfoItem;
