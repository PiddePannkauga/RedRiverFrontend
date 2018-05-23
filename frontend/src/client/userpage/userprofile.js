import React,{Component} from 'react';
import Axios from 'axios';

class UserProfile extends Component{

  constructor(props){
    super(props)
    this.state={
      userData: {}
    }

  }

  componentDidMount(){
    this.fetchUserInfo().then(res =>{this.setState({userData:res})})
  }

  render(){
    return(
      <pre className="text-center">
        {this.state.userData.userNameFirst} {this.state.userData.userNameLast}<br/>
        {this.state.userData.userEmail}<br/>
        {this.state.userData.userSsn}<br/>
        {this.state.userData.userAdressStreet}<br/>
        {this.state.userData.userAdressCity}<br/>
        {this.state.userData.userAdressPostal}<br/>
        {this.state.userData.userMobilephone}<br/>
        {this.state.userData.userTelephone}<br/>
        {this.state.userData.userDescription}<br/>
        {this.state.userData.userActive}<br/>
        {this.state.userData.userCreated}<br/>
        {this.state.userData.userPrivileges}<br/>
      </pre>
    )
  }

  fetchUserInfo(){
    return Axios.get("http://ellakk.zapto.org:5050/api/User",{
      params: { userToken: sessionStorage.getItem('userToken') }
    }).then(res=>{
      return res.data
    })
  }
}

export default UserProfile;
