import React,{Component} from 'react';
import '../styles/button.css';
import {EventDisplayContext} from '../Providers/provider-eventdisplay'

class FetchEventInfo extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <EventDisplayContext.Consumer>
        {(context) => (
          <button className="FetchEventInfoButton" onClick={()=>context.fetchEvent()}>Hämta EventInfo</button>
        )}
      </EventDisplayContext.Consumer>
    )
  }


}

export default FetchEventInfo;
