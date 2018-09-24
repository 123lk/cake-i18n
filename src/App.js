import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />      
      </div>
    );
  }
}

export default App;
