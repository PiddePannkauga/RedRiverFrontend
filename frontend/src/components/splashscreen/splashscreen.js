import React, {Component} from 'react';
import Logo from './logo';
import EventInfoDisplay from '../eventfinder/eventinfo-display';
import SearchBar from './searchbar';
import Button from './button'
import DropDown from './dropdown';
import LoginModal from './modal-login';
import {EventFinderContext} from '../../providers/provider-eventfinder';


class SplashScreen extends Component{

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      isOpenLogin: false
    };
  }



  render(){
    return(
      <div>
        <Logo />
        <Button onClick={this.toggleLoginModal} text="Log in"/>
        <Button text="Register" />
        <DropDown />
        <SearchBar onChange={this.searchTermChange} />
        <LoginModal show={this.state.isOpenLogin}  onClose={this.toggleLoginModal}/>
        <EventFinderContext.Consumer>
          {(context) => (
            <EventInfoDisplay events={context.state.events} searchTerm={this.state.searchTerm} />
          )}
        </EventFinderContext.Consumer>
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


}

export default SplashScreen;
