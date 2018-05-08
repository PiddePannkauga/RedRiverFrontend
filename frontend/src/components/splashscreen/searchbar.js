import React, {Component} from 'react';
import {EventFinderContext} from '../../providers/provider-eventfinder';


class SearchBar extends Component{

  render(){
    return(
      <EventFinderContext.Consumer>
        {(context) => (
          <input className="w-100" onKeyDown={context.fetchEvent} />
        )}
      </EventFinderContext.Consumer>
    )
  }
}

export default SearchBar;
