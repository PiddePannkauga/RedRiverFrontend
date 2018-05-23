import React,{Component} from 'react';
import Axios from 'axios';

class ParticipantListModal extends Component{
  constructor(props){
    super(props)

    this.state ={
      participantList: []
    }
  }

  componentDidMount(){
    this.fetchParticipantList().then(res=>{this.setState({participantList:res})})
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
                  <h2 className="modal-title"> Deltagarlista </h2>
                </div>
                <div>
                  <button type="button" className="close" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
              <div className="modal-body">
                {this.participantList(this.state.participantList)}
              </div>

              <div className="modal-footer">
                
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  fetchParticipantList = () =>{
    return Axios.get("http://ellakk.zapto.org:5050/api/Admin/events/"+this.props.event.eventId+"/participants",{
      params:{userToken: sessionStorage.getItem("userToken")}
    }).then(res=>{
      return res.data
    })
  }

  participantList = (arr) =>{
    const participanList= arr.map(obj=>{
      return(
        <li>
          {obj.participantNameFirst}
          {obj.participantNameLast}
        </li>
      );
    });
    return (
      <ul className="no-bulletin">
        {participanList}
      </ul>
    )

  }

}

export default ParticipantListModal;
