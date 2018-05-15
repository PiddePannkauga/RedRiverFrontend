import React,{Component} from 'react';



class EventInfoItem extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const event = this.props.events
    var eventStart = parseInt(event.eventStart.slice(8,10)) + ' ' + this.getMonth(event.eventStart);
    var eventEnd = parseInt(event.eventEnd.slice(8,10)) + ' ' + this.getMonth(event.eventEnd);

    if(eventStart === eventEnd) {
      eventEnd = event.eventEnd.slice(11,16);
    }
    eventStart = eventStart + ' ' + event.eventStart.slice(11,16);

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
                {eventStart}
                &nbsp;-&nbsp;
                {eventEnd}
              </div>
              <div className="col-sm-6" align="right" id="city">
                {event.eventAdressCity}
              </div>
            </div>
            <div className="Description mt-2">
              {this.props.events.eventDescription}
            </div>
          </div>
        </div>
      </div>
    )
  }

  getMonth(event) {
    const months = ["Invalid", "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return months[parseInt(event.slice(5,7))];
  }
}

export default EventInfoItem;
