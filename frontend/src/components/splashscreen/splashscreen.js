import React, {Component} from 'react';
import Logo from './logo';
import EventInfoDisplay from '../eventfinder/eventinfo-display';
import SearchBar from './searchbar';
import Button from './button'
import DropDown from './dropdown';
import LoginModal from './modal-login';


class SplashScreen extends Component{

  constructor(props) {
   super(props);

   this.state = {
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
      <SearchBar />
      <LoginModal show={this.state.isOpenLogin}  onClose={this.toggleLoginModal}/>

      <EventInfoDisplay />
    </div>
  )

  }

  toggleLoginModal = () => {

     this.setState({
       isOpenLogin: !this.state.isOpenLogin
     });

   }


}

export default SplashScreen;
