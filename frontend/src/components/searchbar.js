import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <input className="form-control form-rounded mt-2 mb-2" type="text" placeholder="Sök event" style={{borderRadius: '1rem'}} onChange={e=>this.props.onChange(e.target.value)} />    
    )
  }
}

export default SearchBar;
