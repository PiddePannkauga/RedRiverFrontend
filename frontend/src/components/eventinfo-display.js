import React,{Component} from 'react';
import EventInfoList from './eventinfo-list';
import '../styles/eventinfo.css';
import {EventDisplayContext} from '../Providers/provider-eventdisplay'

class EventInfoDisplay extends Component{

  render(){
    return(
      <EventDisplayContext.Consumer>
        {(context) => (
          <div className="EventInfoDisplay-container">
              
            <EventInfoList events={context.state.events}/>

          </div>

        )}
      </EventDisplayContext.Consumer>

    )

  }


}

export default EventInfoDisplay;
