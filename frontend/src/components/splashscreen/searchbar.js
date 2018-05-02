import React, {Component} from 'react';
import {EventFinderContext} from '../../providers/provider-eventfinder';


class SearchBar extends Component{

  render(){
    return(
      <EventFinderContext.Consumer>
        {(context) => (
      <input onKeyDown={context.fetchEvent}>

      </input>
    )}
  </EventFinderContext.Consumer>
    )
  }
}

export default SearchBar;
