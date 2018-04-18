import React,{Component} from 'react';
import '../styles/button.css';

class FetchEventInfo extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
    <button className="FetchEventInfoButton">Hämta EventInfo</button>
    )
  }

}

export default FetchEventInfo;
