import React from 'react';
import EventInfoItem from './eventinfo-item';


const EventInfoList = (props) =>{
  const eventinfoItems = props.events.map((obj)=>{

    return(
      <EventInfoItem key={obj.eventId} events={obj} onClick={props.onClick} />
      );
    });
    return(
      <ul>
        {eventinfoItems}
      </ul>
    )
  }
export default EventInfoList;
