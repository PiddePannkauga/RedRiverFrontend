import React,{Component} from 'react';

class DropDown extends Component{

  constructor(props) {
      super(props);
      this.state = {
        isToggleOn: false
      };
    }

    showDropdown(e) {
   e.preventDefault();
   this.setState(prevState => ({
     isToggleOn: !prevState.isToggleOn
   }));
 }

  render(){
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return(
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle btn-block" type="button" data-toggle="dropdown" onClick={(e) => {this.showDropdown(e)}}>Dropdown
          <span className="caret"></span>
        </button>
        <ul className={classDropdownMenu}>
          <li><a href="/">HTML</a></li>
          <li><a href="/">CSS</a></li>
          <li><a href="/">JavaScript</a></li>
        </ul>
      </div>
    )
  }

}

export default DropDown;