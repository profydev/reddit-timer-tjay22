import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './global-styles/global-styles.css';
import './global-styles/normalize.css';

import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/search" />
          <Route path="/how-it-works" />
          <Route path="/about" />
          <Route path="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
