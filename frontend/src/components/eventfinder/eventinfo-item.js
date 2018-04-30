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
