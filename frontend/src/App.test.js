import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EventDisplayProvider from './Providers/provider-eventdisplay';
const expectedResponse = [{"eventid":"23523523","name":"Diskotek i Linero","beskrivning":"Dans och kul här ja","datum":"2019-1-12","role":"Korvgrillare"},{"eventid":"9999352","name":"Togaparty","beskrivning":"Dans och kul här ja","datum":"2019-1-12","role":"Slav"}]
global.fetch = require('jest-fetch-mock')
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('fetches all events', () => {
const eventdisplay = new EventDisplayProvider();
  fetch.mockResponseOnce(JSON.stringify(
    {data:'420bleeezeeit'}));
  const res = eventdisplay.fetchInfo();
  console.log(res)
  expect(res).toBe(expectedResponse)
});
