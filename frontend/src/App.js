import React, { Component } from 'react';
import UserPage from './client/userpage/userpage'
import SplashScreen from './client/splashscreen/splashscreen';
import {Route, Switch,Redirect} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props)

  }

  render() {
    return (

        <div className="App" style={{overflowX: 'hidden'}}>
          <Redirect from="/" to="public" />
          <Switch>
          <Route path="/public" component={SplashScreen} />
          <Route path="/user" component={UserPage}/>
          </Switch>
        </div>

    );
  }
}

export default App;
