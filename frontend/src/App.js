import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFetchEventInfo from './components/eventfinder/button-fetch-eventinfo';
import EventInfoDisplay from './components/eventfinder/eventinfo-display';
import EventProvider from './providers/provider-eventdisplay';
import SplashScreen from './components/splashscreen/splashscreen'




class App extends Component {
  render() {
    return (
      <EventProvider>
        <div className="App">
          <SplashScreen />
          <ButtonFetchEventInfo />
          <EventInfoDisplay />
        </div>
      </EventProvider>
    );
  }
}

export default App;
