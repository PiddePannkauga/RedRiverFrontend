import React,{Component} from 'react';


class EventInfoItem extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const event = this.props.events

    const date = this.getStartEndFormatted(event);

    const cardStyle = {
      padding: 5,
      margin: 5,
      borderRadius: 5,
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
    };

    const containerStyle = {
      padding: 0,
      margin: 0,
      cursor: 'pointer'
    };

    return(
      <div className="card" style={cardStyle}>
        <div className="EventInfoItem" onClick={(e)=>this.props.onClick(event,e)}>
          <div className="container" style={containerStyle}>
            <h5 className="Title" id="title">
              {event.eventTitle}
            </h5>
            <div className="row">
              <div className="col-sm-6" id="date">
                {date}
              </div>
              <div className="col-sm-6" align="right" id="city">
                {event.eventAdressCity}
              </div>
            </div>
            <div className="Description mt-2">
              {event.eventDescription}
            </div>
          </div>
        </div>
      </div>
    )
  }

  getStartEndFormatted(event) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    const dateStart = new Date(Date.parse(event.eventStart));
    const dateEnd = new Date(Date.parse(event.eventEnd));

    var eventStart = dateStart.getDate() + ' ' + months[dateStart.getMonth()];
    var eventEnd = dateEnd.getDate() + ' ' + months[dateEnd.getMonth()];

    if(eventStart === eventEnd) {
      eventEnd = dateEnd.getHours() + ':' + ('0' + dateEnd.getMinutes()).slice(-2);
    }
    eventStart += ' ' + dateStart.getHours() + ':' + ('0' + dateStart.getMinutes()).slice(-2);

    return eventStart + ' - ' + eventEnd;
  }
}

export default EventInfoItem;
