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
    const headerStyle = {
      padding: 20,
      margin: '0 auto',
    };

    return(
      <div className="container">
        <div className="row" style={headerStyle} id="header">
          <div className="col-sm-2" align="left">
            <DropDown />
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
            <SearchBar />
            <EventInfoDisplay />
            <LoginModal show={this.state.isOpenLogin}  onClose={this.toggleLoginModal}/>
          </div>
          <div className="col-sm-2"></div>
        </div>
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
