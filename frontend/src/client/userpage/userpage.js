import React, {Component} from 'react';
import EventFinder from '../eventfinder/eventinfo-display';
import {EventFinderContext} from '../../providers/provider-eventfinder';
import SearchBar from '../../components/searchbar';

class UserPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  render(){
    return(
      <div>
      <SearchBar onChange={this.searchTermChange}/>
      <EventFinderContext.Consumer>
        {(context) => (
          <EventFinder events={context.state.events} searchTerm={this.state.searchTerm} />
        )}
      </EventFinderContext.Consumer>
      </div>
  )
  }
  searchTermChange = (term) =>{
    this.setState({searchTerm: term})
  }
}

export default UserPage;
