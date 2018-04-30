import React,{Component} from 'react';
import EventInfoList from './eventinfo-list';
//import '../../styles/eventinfo.css';
import {EventDisplayContext} from '../../providers/provider-eventdisplay';
import EventInfoModal from './modal-eventinfo';
import RegisterForEventModal from './modal-registerforevent';

class EventInfoDisplay extends Component{
  constructor(props){
    super(props)

    this.state = {
      selectedEvent:{name: 'Event 1',
      date: '2001/01/01',
      description: 'Här gör man saker'},
      isOpenEventInfo: false,
      isOpenRegisterForEvent: false
    };
  }

  render(){
    let selectedEvent;
    return(
      <EventDisplayContext.Consumer>
        {(context) => (
          <div className="EventInfoDisplay-container">
            <EventInfoList  events={context.state.events} onClick={this.toggleEventInfoModal} />
            <EventInfoModal events={this.state.selectedEvent} show={this.state.isOpenEventInfo} onClose={this.toggleEventInfoModal} onRegister={this.toggleRegisterForEventModal}/>
            <RegisterForEventModal show={this.state.isOpenRegisterForEvent} onClose={this.toggleRegisterForEventModal} onBack={this.returnToEventInfo}/>
          </div>
        )}
      </EventDisplayContext.Consumer>
    )
  }

  toggleEventInfoModal = (selectedEvent) => {
    if(!selectedEvent){
      this.setState({selectedEvent: selectedEvent});
    }

     this.setState({

       isOpenEventInfo: !this.state.isOpenEventInfo
     });

   }

   toggleRegisterForEventModal = () => {
     if(this.state.isOpenEventInfo){
       this.setState({

         isOpenEventInfo: !this.state.isOpenEventInfo
       });
     }
      this.setState({

        isOpenRegisterForEvent: !this.state.isOpenRegisterForEvent
      });

    }

    returnToEventInfo = () => {
      if(this.state.isOpenRegisterForEvent){
        this.setState({

          isOpenRegisterForEvent: !this.state.isOpenRegisterForEvent
        });
      }
       this.setState({

         isOpenEventInfo: !this.state.isOpenEventInfo
       });

     }
}
export default EventInfoDisplay;
