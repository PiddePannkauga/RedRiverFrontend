import React, {Component} from 'react';
import image from '../img/eventsystemlogga_placeholder.png'


class Logo extends Component{

  render(){
    return(
      <div className="text-center">
        <img className="img-fluid" style={{maxHeight: '15vh', padding: 20}} src={image} alt="Placeholder"></img>
      </div>
    )
  }

}

export default Logo;
