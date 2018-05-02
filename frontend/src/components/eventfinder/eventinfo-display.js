import React,{Component} from 'react';
import EventInfoList from './eventinfo-list';
//import '../../styles/eventinfo.css';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import EventInfoModal from './modal-eventinfo';
import RegisterForEventModal from './modal-registerforevent';
import Axios from 'axios';

class EventInfoDisplay extends Component{
  constructor(props){
    super(props)

    this.state = {
      selectedEvent:{},
      isOpenEventInfo: false,
      isOpenRegisterForEvent: false
    };
  }

  render(){
    let selectedEvent;
    return(
      <EventFinderContext.Consumer>
        {(context) => (
          <div className="EventInfoDisplay-container">
            <EventInfoList  events={context.state.events} onClick={this.toggleEventInfoModal} />
            <EventInfoModal events={this.state.selectedEvent} show={this.state.isOpenEventInfo} onClose={this.toggleEventInfoModal} onRegister={this.toggleRegisterForEventModal}/>
            <RegisterForEventModal show={this.state.isOpenRegisterForEvent} onClose={this.toggleRegisterForEventModal} onBack={this.returnToEventInfo}/>
          </div>
        )}
      </EventFinderContext.Consumer>
    )
  }

  toggleEventInfoModal = (selectedEvent) => {
    if(!this.state.isOpenEventInfo){
      this.getSelectedEvent(selectedEvent.id).then(res=>{this.setState({selectedEvent:res})}).then(
        this.setState({

          isOpenEventInfo: !this.state.isOpenEventInfo
        }))
      }else{
        this.setState({

          isOpenEventInfo: !this.state.isOpenEventInfo
        })
      }


    }

    getSelectedEvent(selectedEvent){

      return Axios.get('http://ellakk.zapto.org:5050/api/Events/'+selectedEvent).then(res =>{

        return res.data
      })
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
