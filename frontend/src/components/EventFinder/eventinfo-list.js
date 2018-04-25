import React from 'react';
import EventInfoItem from './eventinfo-item';
import '../styles/eventinfo.css';

const EventInfoList = (props) =>{
  const eventinfoItems = props.events.map((obj)=>{
    return(
      <EventInfoItem key={obj.name} events={obj}/>
      );
    });
    return(
      <ul>
        {eventinfoItems}
      </ul>
    )
  }
export default EventInfoList;
