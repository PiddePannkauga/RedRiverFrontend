import React,{Component} from 'react';
import EventInfoList from './eventinfo-list';


class EventInfoDisplay extends Component{
  constructor(props){
    super(props)

    this.state = {
      eventsToDisplay: [],
    };
  }



  componentDidUpdate(){
    if(this.props.events){
      const eventsToDisplay = this.eventSearch(this.props.searchTerm,this.props.events)
      if(JSON.stringify(this.state.eventsToDisplay) !== JSON.stringify(eventsToDisplay)){
        this.setState({eventsToDisplay})
      }
    }
  }

  render(){
    return(
      <div className="container" style={{padding: 0}}>
        <EventInfoList events={this.state.eventsToDisplay} onClick={this.props.onClick} />
      </div>
    )
  }

  eventSearch(searchTerm,arr){
    const eventsToDisplay=[];
    const searchTermRegex = new RegExp(searchTerm, "i");

    arr.forEach((obj) => {
      if(searchTermRegex.test(obj.eventTitle)) {
        eventsToDisplay.push(obj)
      } else {
        if(searchTermRegex.test(obj.eventDescription)) {
          eventsToDisplay.push(obj)
        } else if(searchTermRegex.test(obj.eventAdressCity)) {
          eventsToDisplay.push(obj)
        }
      }
    }
  )
  return eventsToDisplay;
}

}
export default EventInfoDisplay;
