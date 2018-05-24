import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render(
      <BrowserRouter>
          <Route path="/" component={App}/>
     </BrowserRouter>
     , document.getElementById('root'));
// registerServiceWorker();
