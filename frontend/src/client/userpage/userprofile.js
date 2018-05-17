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
    <div>
    {this.state.userData.userNameFirst}
    </div>
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
