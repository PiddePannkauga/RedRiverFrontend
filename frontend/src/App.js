import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFetchEventInfo from './components/button-fetch-eventinfo';
import EventInfoDisplay from './components/eventinfo-display';
import EventProvider from './Providers/provider-eventdisplay';




class App extends Component {
  render() {
    return (
      <EventProvider>
        <div className="App">
          <ButtonFetchEventInfo />
          <EventInfoDisplay />
        </div>
      </EventProvider>
    );
  }
}

export default App;
