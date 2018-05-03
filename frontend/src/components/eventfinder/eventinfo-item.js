import React,{Component} from 'react';



class EventInfoItem extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const event = this.props.events

    return(
      <div>
        <div className="EventInfoItem" onClick={(e)=>this.props.onClick(event,e)}>
          <div className="Name">
            {this.props.events.eventTitle}
          </div>
          <div className="Date">
            {this.props.events.eventStart}
            {this.props.events.eventEnd}
          </div>
          <div className="Description">
            {this.props.events.eventDescription}
          </div>
        </div>
      </div>
    )
  }
}

export default EventInfoItem;
