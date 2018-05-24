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
          <Switch>
          <Route path="/public" component={SplashScreen} />
          <Route path="/user" component={UserPage}/>
          <Redirect from='/' to='public' />
          </Switch>
        </div>

    );
  }
}

export default App;
