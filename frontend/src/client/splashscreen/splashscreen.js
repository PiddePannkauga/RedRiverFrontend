import React, {Component} from 'react';
import Logo from '../../components/logo';
import EventInfoDisplay from '../eventfinder/eventinfo-display';
import SearchBar from '../../components/searchbar';
import Button from '../../components/button'
import DropDown from '../../components/dropdown';
import LoginModal from './modal-login';
import EventInfoModal from './modal-eventinfo';
import RegisterForEventModal from './modal-registerforevent';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import Axios from 'axios';


class SplashScreen extends Component{

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      isOpenLogin: false,
      selectedEvent:{},
      isOpenEventInfo: false,
      isOpenRegisterForEvent: false
    };
  }

  render(){

    const headerStyle = {
      padding: 20,
      margin: '0 auto',
    };

    return(
      <div className="container">
        <div className="row" style={headerStyle} id="header">
          <div className="col-sm-2" align="left">
          </div>
          <div className="col-sm-8">
            <Logo align="center" />
          </div>
          <div className="col-sm-2" align="right">
            <div>
              <button type="button" className="btn btn-outline-primary btn-block mb-2" onClick={this.toggleLoginModal}>Logga in</button>
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary btn-block mb-2">Registrera</button>
            </div>
          </div>

          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <SearchBar onChange={this.searchTermChange}/>
            <EventFinderContext.Consumer>
              {(context) => (
                <EventInfoDisplay events={context.state.eventsPublic} searchTerm={this.state.searchTerm} onClick={this.toggleEventInfoModal}/>
              )}
            </EventFinderContext.Consumer>
            <EventInfoModal event={this.state.selectedEvent} show={this.state.isOpenEventInfo} onClose={this.toggleEventInfoModal} onRegister={this.toggleRegisterForEventModal}/>
            <RegisterForEventModal event={this.state.selectedEvent} show={this.state.isOpenRegisterForEvent} onClose={this.toggleRegisterForEventModal} onBack={this.returnToEventInfo}/>
            <LoginModal show={this.state.isOpenLogin}  onClose={this.toggleLoginModal} />
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    )
  }

  searchTermChange = (term) =>{
    this.setState({searchTerm: term})
  }

  toggleLoginModal = () => {
    this.setState({
      isOpenLogin: !this.state.isOpenLogin
    });
  }

  toggleEventInfoModal = (selectedEvent) => {
    if(!this.state.isOpenEventInfo){
      this.getSelectedEvent(selectedEvent.eventId).then(res=>{this.setState({selectedEvent:res})}).then(
        this.setState({

          isOpenEventInfo: !this.state.isOpenEventInfo
        }))
      }else{
        this.setState({
          selectedEvent: {},
          isOpenEventInfo: !this.state.isOpenEventInfo
        })
      }
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
    getSelectedEvent(selectedEvent){

      return Axios.get('http://ellakk.zapto.org:5050/api/Events/'+selectedEvent).then(res =>
        {
          return res.data
        })
      }
}

export default SplashScreen;
