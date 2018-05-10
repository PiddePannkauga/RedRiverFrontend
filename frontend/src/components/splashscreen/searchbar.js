import React, {Component} from 'react';
import {EventFinderContext} from '../../providers/provider-eventfinder';


class SearchBar extends Component{

  render(){
    return(
      <EventFinderContext.Consumer>
        {(context) => (
          <input className="form-control form-rounded" type="text" placeholder="Sök event" style={{borderRadius: '1rem'}} onKeyDown={context.fetchEvent} />
        )}
      </EventFinderContext.Consumer>
    )
  }
}

export default SearchBar;
