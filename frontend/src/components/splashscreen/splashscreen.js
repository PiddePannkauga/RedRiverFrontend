import React, {Component} from 'react';
import Logo from './logo';
import EventInfoDisplay from '../eventfinder/eventinfo-display';
import SearchBar from './searchbar';
import Button from './button'
import DropDown from './dropdown';

class SplashScreen extends Component{

  render(){
    return(
    <div>
      <Logo />
      <Button text="Log in"/>
      <Button text="Register" />
      <DropDown />
      <SearchBar />

      <EventInfoDisplay />
    </div>
  )

  }
}

export default SplashScreen;
