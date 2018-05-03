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
      <input onChange={e=>this.props.onChange(e.target.value)} >

      </input>
    )
  }
}

export default SearchBar;
