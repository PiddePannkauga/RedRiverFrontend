import React, {Component} from 'react';
import LoginModal from './modal-login';

class Button extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <button onClick={() => this.props.onClick()}> {this.props.text} </button>
    )
  }
}

export default Button;
