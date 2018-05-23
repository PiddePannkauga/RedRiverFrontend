import React,{Component} from 'react';
import Axios from 'axios';



class ApplyForEventModal extends Component{
  constructor(props){
    super(props)

    this.state ={

      eventRolesToApplyFor:[],
      roleDescription:'',
      userRoleId: null,
      userRoleApplication: ''
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.event != this.props.event){
      let roleDescription = '';
      let roleId = '';
      this.fetchEventRoles().then(res=>{
        if(res.length != 0){
          roleDescription = res[0].roleDescription
          roleId = res[0].roleId
        }
        this.setState({
          eventRolesToApplyFor: res,
          roleDescription: roleDescription,
          userRoleId: roleId
        })})
      }

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

      const cardStyle = {
        width: 'auto',
        backgroundColor: '#fff'
      }

      const eventStart = new Date(Date.parse(this.props.event.eventStart))
      const eventEnd = new Date(Date.parse(this.props.event.eventEnd))

      return(
        <div className="backdrop" style={backdropStyle}>
          <div className="modal-dialog modal-lg" style={modalStyle}>
            <div className="modal-content">
              <div className="container-fluid">
                <div className="modal-header">
                  <div>
                    <h2 className="modal-title"> Ansök som Eventmedarbetare </h2>
                  </div>
                  <div>
                    <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
                <div className="modal-body">
                  <h2>{this.props.event.eventTitle}</h2>

                  <div className="card bg-light mb-3" style = {cardStyle}>
                    <div className="card-body">
                      <h5 className="card-title">Event Beskrivning</h5>
                      <div className="card-text mb-2">
                        {this.props.event.eventDescription}
                        <br/>
                        <h5 className="mt-2">Datum/tid</h5>
                        Start: {eventStart.toLocaleString("sv-SE")}
                        <br/>
                        Slut: {eventEnd.toLocaleString("sv-SE")}
                      </div>
                      <div>
                        <h5 className="card-title">Adress</h5>
                        <div className="card-text mb-2">
                        {this.props.event.eventAdressCity}
                        <br />
                        {this.props.event.eventAdressStreet}
                        <br />
                        {this.props.event.eventAdressPostal}
                        </div>
                      </div>
                      <div>
                        <h5 className="card-title">Kontakt information</h5>
                        {this.props.event.eventContactEmail}
                        <br />
                        {this.props.event.eventContactPhone}
                      </div>
                    </div>
                  </div>

                  <div>
                    {this.roleList(this.state.eventRolesToApplyFor)}
                    <div>

                      <h4>Rollbeskrivning</h4>
                      <div className="card bg-light mb-3">
                        <div className="card-body">
                          <div className="card-text">
                            {this.state.roleDescription}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4>Ansökningstext</h4>
                      <textarea className="form-control" placeholder="Skriv en ansökan" id="userRoleApplication" value={this.state.userRoleApplication} onChange={this.handleTextChange} rows="3" style={{resize: 'none'}}></textarea>
                    </div>
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
        url: 'http://ellakk.zapto.org:5050/api/User/events/'+this.props.event.eventId,
        params:{userToken: sessionStorage.getItem("userToken")},
        data: {
          userRoleId: this.state.userRoleId,
          userRoleApplication: this.state.userRoleApplication
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
      this.setState({
        [name]: value
      });

    }

    handleRoleChange=(selectedRole)=>{
      this.state.eventRolesToApplyFor.forEach(obj=>{
        if(obj.roleTitle === selectedRole.target.value){
          this.setState({
            roleDescription:obj.roleDescription,
            userRoleId: obj.roleId
          })
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
          <h4 htmlFor="roleSelect">Välj arbetsroll</h4>
          <select className="form-control" id="roleSelect" onChange={this.handleRoleChange}>
            {roles}
          </select>
        </div>
      )
    }

  }

  export default ApplyForEventModal;
