import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonFetchEventInfo from './components/button-fetch-eventinfo';
import EventInfoDisplay from './components/eventinfo-display';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ButtonFetchEventInfo />
      <EventInfoDisplay />
      </div>
    );
  }
}

export default App;
