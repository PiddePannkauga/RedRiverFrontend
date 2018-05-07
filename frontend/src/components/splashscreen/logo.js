import React, {Component} from 'react';
import image from '../../img/eventsystemlogga_placeholder.png'
import '../../styles/logo.css';

class Logo extends Component{

  render(){
    return(
      <img className="img-fluid" src={image} alt="Placeholder"></img>
    )
  }

}

export default Logo;
