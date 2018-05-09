import React from 'react';
import EventInfoItem from './eventinfo-item';
//import '../../styles/eventinfo.css';

const EventInfoList = (props) =>{

  const eventinfoItems = props.events.map((obj)=>{

    return(
<<<<<<< HEAD
      <EventInfoItem key={obj.eventTitle} events={obj} onClick={props.onClick} />
=======
      <EventInfoItem key={obj.eventId} events={obj} onClick={props.onClick} />
>>>>>>> nils-branch
      );
    });
    return(
      <ul>
        {eventinfoItems}
      </ul>
    )
  }
export default EventInfoList;
