import React,{Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import Axios from 'axios';

class MyCreatedEvents extends Component{

  constructor(props){
    super(props)
    this.state={
      adminCreatedEvents: []
    }
  }

  componentDidMount(){
    this.fetchAdminCreatedEvents().then(res=>{this.setState({adminCreatedEvents:res})})
  }

  render(){
    return(
      <div>
        <EventFinder events={this.state.adminCreatedEvents} />
      </div>
    )
  }

  fetchAdminCreatedEvents(){
    return Axios.get("http://ellakk.zapto.org:5050/api/Admin/events",{
      params:{ userToken: sessionStorage.getItem('userToken')}
    }).then(res=>{
      return res.data

    })
  }

}





export default MyCreatedEvents;
