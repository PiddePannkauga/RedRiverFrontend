import React,{Component} from 'react';
import Axios from 'axios';



class ApplyForEventModal extends Component{
  constructor(props){
    super(props)

    this.state ={
      userRoleTitle: '',
      userRoleDescription: '',
      eventRolesToApplyFor:[],
      roleDescription:''
    }
  }

  componentDidMount(){
    let roleDescription = '';
    this.fetchEventRoles().then(res=>{
      if(res.length != 0){
        roleDescription = res[0].roleDescription
      }
      this.setState({
        eventRolesToApplyFor: res,
        roleDescription: roleDescription
      })})
    }

    render(){
      if(!this.props.show){
        return null;
      }

      const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50,
        overflowY: 'auto'
      };

      const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: '0 auto',
        padding: '0 auto'
      };

      return(
        <div className="backdrop" style={backdropStyle}>
          <div className="modal-dialog modal-lg" style={modalStyle}>
            <div className="modal-content">
              <div className="container-fluid">
                <div className="modal-header">
                  <div>
                    <h2 className="modal-title"> Ansök till Event </h2>
                  </div>
                  <div>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  {this.roleList(this.state.eventRolesToApplyFor)}
                  <div>
                    {this.state.roleDescription}
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-primary" type="submit" onClick={this.sendRegistration}> Skicka in </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )
    }

    sendRegistration = () =>{

      Axios({
        method: 'post',
        url: 'http://ellakk.zapto.org:5050/api/User/events/'+this.props.event.eventId+"/roles",
        params:{userToken: sessionStorage.getItem("userToken")},
        data: {
          userRoleTitle: this.state.userRoleTitle,
          userRoleDescription: this.state.userRoleDescription
        }
      });

      this.props.onClose()

    }

    fetchEventRoles=()=>{
      return Axios.get("http://ellakk.zapto.org:5050/api/User/events/"+this.props.event.eventId+"/roles",{
        params:{userToken: sessionStorage.getItem("userToken")}
      }).then(res=>{
        return res.data
      })
    }

    handleTextChange=(event) => {
      const name = event.target.id;
      const value = event.target.value;
      console.log(event.target.value)
      this.setState({
        [name]: value
      });

    }

    handleRoleChange=(selectedRole)=>{
      console.log("Hej")
      console.log(selectedRole.target.value)
      this.state.eventRolesToApplyFor.forEach(obj=>{
        if(obj.roleTitle === selectedRole.target.value){
          this.setState({roleDescription:obj.roleDescription})
        }
      })
    }

    roleList = (roleArray) =>{
      const roles = roleArray.map((obj)=>{
        return(
          <option key={obj.roleId} value={obj.roleTitle}>{obj.roleTitle} </option>
        );
      });
      return(
        <div>
          <select onChange={this.handleRoleChange}>
            {roles}
          </select>
        </div>
      )
    }

  }

  export default ApplyForEventModal;
