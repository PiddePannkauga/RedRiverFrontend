import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <input onChange={e=>this.props.onChange(e.target.value)}>
      </input>
    )
  }
}

export default SearchBar;
