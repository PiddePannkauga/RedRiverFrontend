import React, { Component } from 'react';
import logo from './logo.svg';
import EventProvider from './providers/provider-eventfinder';
import SplashScreen from './components/splashscreen/splashscreen';


class App extends Component {
  render() {
    return (
      <EventProvider>
        <div className="App">
          <SplashScreen />

        </div>
      </EventProvider>
    );
  }
}

export default App;
