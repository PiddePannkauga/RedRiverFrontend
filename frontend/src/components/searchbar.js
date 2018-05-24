import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)

  }



  render(){

    const searchbarStyle ={
      borderRadius: '1rem',
      width: '75%',
      margin: 'auto'
    };

    return(
      <input className="form-control form-rounded mt-2 mb-2" type="text" placeholder="Sök event" style={searchbarStyle} onChange={e=>this.props.onChange(e.target.value)} />
    )
  }
}

export default SearchBar;
