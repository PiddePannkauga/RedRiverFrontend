import React,{Component} from 'react';
import EventInfoItem from './eventinfo-item';
import '../styles/eventinfo.css';

class EventInfoDisplay extends Component{

  render(){
    return(
      <div className="EventInfoDisplay-container">
        <div className="grid-item">
          <EventInfoItem name="Event 1" date="2018/04/20" description="Nu får man röga veed"/>
        </div>
        <div className="grid-item">
          <EventInfoItem name="Event 2" date="2018/12/12" description="Nu får man skörda veed, wolowlwowlwlwoawlwaolwaoakawowaokawokofoafokaowkfowkofkowkwofkoakwfok"/>
        </div>
      </div>


    )

  }


}

export default EventInfoDisplay;
