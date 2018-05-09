import React, {Component} from 'react';
import {EventFinderContext} from '../../providers/provider-eventfinder';


class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={
      searchTerm: ''
    }
  }

  render(){
    return(
<<<<<<< HEAD
      <input onChange={e=>this.props.onChange(e.target.value)} >

      </input>
=======
      <EventFinderContext.Consumer>
        {(context) => (
          <input className="w-100" onKeyDown={context.fetchEvent} />
        )}
      </EventFinderContext.Consumer>
>>>>>>> nils-branch
    )
  }
}

export default SearchBar;
